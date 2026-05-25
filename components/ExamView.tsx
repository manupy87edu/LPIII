import React, { useState, useRef } from 'react';
import { Exam, Question, Role } from '../types';
import { CheckCircle, XCircle, AlertCircle, FileText, Check, Download, FileCheck } from 'lucide-react';
import jsPDF from 'jspdf';

interface ExamViewProps {
  exams: Exam[];
  userRole?: Role;
}

const ExamView: React.FC<ExamViewProps> = ({ exams, userRole }) => {
  const [activeExamId, setActiveExamId] = useState<string>(exams[0]?.id || '');
  const [answers, setAnswers] = useState<{ [examId: string]: { [questionId: number]: any } }>({});
  const [showResults, setShowResults] = useState<{ [examId: string]: boolean }>({});
  const examContentRef = useRef<HTMLDivElement>(null);

  const activeExam = exams.find(e => e.id === activeExamId);

  if (!activeExam) return <div>No exams available.</div>;

  const handleAnswerChange = (questionId: number, value: any) => {
    if (showResults[activeExamId]) return; // Prevent changes after submission
    setAnswers(prev => ({
      ...prev,
      [activeExamId]: {
        ...prev[activeExamId],
        [questionId]: value
      }
    }));
  };

  const checkAnswers = () => {
    setShowResults(prev => ({ ...prev, [activeExamId]: true }));
  };

  const resetExam = () => {
    setShowResults(prev => ({ ...prev, [activeExamId]: false }));
    setAnswers(prev => ({
      ...prev,
      [activeExamId]: {}
    }));
  };

  const handleExportPDF = (mode: 'student' | 'teacher' = 'student') => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const margin = 20;
    const pageWidth = 210;
    const pageHeight = 297;
    const contentWidth = pageWidth - margin * 2;
    let y = margin;

    const checkPageBreak = (heightNeeded: number) => {
      if (y + heightNeeded > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
    };

    // Header
    doc.setFont('times', 'bold');
    doc.setFontSize(16);
    const title = mode === 'teacher' ? `PAUTA: ${activeExam.title}` : activeExam.title;
    const splitTitle = doc.splitTextToSize(title.toUpperCase(), contentWidth);
    doc.text(splitTitle, margin, y);
    y += splitTitle.length * 7 + 5;

    doc.setFontSize(11);
    doc.setFont('times', 'normal');
    
    // Info fields
    checkPageBreak(25);
    doc.text('Nombre: _________________________________________________', margin, y);
    doc.text('Fecha: ____/____/______', margin + 100, y);
    y += 10;
    doc.text('Puntaje Total: 15 Puntos', margin, y);
    doc.text('Puntaje Obtenido: _______', margin + 100, y);
    y += 10;

    // Line separator
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += 10;

    // Questions
    activeExam.questions.forEach((q, index) => {
      const questionTitle = `${index + 1}. ${q.question} (${q.points} pts)`;
      
      doc.setFont('times', 'bold');
      doc.setFontSize(12);
      
      const splitQuestion = doc.splitTextToSize(questionTitle, contentWidth);
      checkPageBreak(splitQuestion.length * 6 + 5);
      doc.text(splitQuestion, margin, y);
      y += splitQuestion.length * 6 + 2;

      doc.setFont('times', 'normal');
      doc.setFontSize(11);

      if (q.type === 'multiple_choice' || q.type === 'true_false') {
        q.options?.forEach(opt => {
          checkPageBreak(7);
          
          // Circle
          doc.circle(margin + 2, y - 1.5, 1.5);
          
          // Teacher mode: mark correct
          if (mode === 'teacher' && opt === q.correctAnswer) {
             doc.setFillColor(0, 0, 0);
             doc.circle(margin + 2, y - 1.5, 1.5, 'F');
             doc.setFont('times', 'bold');
          }

          const splitOpt = doc.splitTextToSize(opt, contentWidth - 10);
          doc.text(splitOpt, margin + 8, y);
          
          doc.setFont('times', 'normal'); // Reset font
          y += splitOpt.length * 5 + 2;
        });
      } else if (q.type === 'matching') {
        // Options box
        doc.setDrawColor(150);
        doc.setFillColor(245, 245, 245);
        
        // Calculate box height based on options text
        const optionsText = `Opciones: ${q.options?.join('  -  ')}`;
        const splitOptions = doc.splitTextToSize(optionsText, contentWidth - 4);
        const boxHeight = splitOptions.length * 5 + 6;
        
        checkPageBreak(boxHeight + 5);
        doc.rect(margin, y, contentWidth, boxHeight, 'FD');
        
        doc.text(splitOptions, margin + 2, y + 5);
        y += boxHeight + 8;

        // Pairs
        q.matchingPairs?.forEach(pair => {
            checkPageBreak(8);
            doc.line(margin, y, margin + 30, y); // Blank line
            
            if (mode === 'teacher') {
                doc.setFont('times', 'bold');
                doc.setTextColor(0, 0, 150);
                const answer = (q.correctAnswer as any)[pair.id];
                doc.text(answer || '', margin + 10, y - 1);
                doc.setTextColor(0);
                doc.setFont('times', 'normal');
            }

            doc.text(pair.text, margin + 35, y);
            y += 8;
        });

      } else if (q.type === 'fill_in_the_blank') {
         doc.setFont('courier', 'normal');
         doc.setFontSize(10);
         
         const parts = q.codeSnippet?.split('___') || [];
         let reconstructed = '';
         parts.forEach((part, idx) => {
             reconstructed += part;
             if (idx < parts.length - 1) {
                 if (mode === 'teacher') {
                      const ans = (q.correctAnswer as string[])[idx];
                      reconstructed += `__${ans}__`;
                 } else {
                      reconstructed += '____________';
                 }
             }
         });

         const splitCode = doc.splitTextToSize(reconstructed, contentWidth - 4);
         const height = splitCode.length * 5;
         
         checkPageBreak(height + 10);
         
         // Background
         doc.setFillColor(245, 245, 245);
         doc.setDrawColor(200);
         doc.rect(margin, y, contentWidth, height + 4, 'FD');
         
         doc.text(splitCode, margin + 2, y + 4);
         y += height + 8;
         
         doc.setFont('times', 'normal');
         doc.setFontSize(11);
      }

      y += 5; // Spacing between questions
    });

    const filename = mode === 'teacher' 
        ? `${activeExam.title.replace(/\s+/g, '_')}_PAUTA.pdf`
        : `${activeExam.title.replace(/\s+/g, '_')}.pdf`;

    doc.save(filename);
  };

  const isCorrect = (question: Question, userAnswer: any): boolean => {
    if (!userAnswer) return false;

    if (question.type === 'multiple_choice' || question.type === 'true_false') {
      return userAnswer === question.correctAnswer;
    }

    if (question.type === 'fill_in_the_blank') {
      if (!Array.isArray(userAnswer)) return false;
      const correct = question.correctAnswer as string[];
      return correct.every((ans, idx) => 
        ans.toLowerCase().trim() === (userAnswer[idx] || '').toLowerCase().trim()
      );
    }

    if (question.type === 'matching') {
      const correct = question.correctAnswer as { [key: string]: string };
      // Check if all keys match
      const keys = Object.keys(correct);
      return keys.every(key => correct[key] === userAnswer[key]);
    }

    return false;
  };

  const calculateScore = () => {
    let score = 0;
    activeExam.questions.forEach(q => {
      if (isCorrect(q, answers[activeExamId]?.[q.id])) {
        score += q.points;
      }
    });
    return score;
  };

  return (
    <div className="bg-dark-card border border-dark-border rounded-xl overflow-hidden shadow-2xl animate-fade-in">
      {/* Tabs */}
      <div className="flex border-b border-dark-border bg-slate-900/50">
        {exams.map(exam => (
          <button
            key={exam.id}
            onClick={() => setActiveExamId(exam.id)}
            className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition flex items-center justify-center gap-2
              ${activeExamId === exam.id 
                ? 'bg-brand-500/10 text-brand-400 border-b-2 border-brand-500' 
                : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/50'}
            `}
          >
            <FileText size={16} />
            {exam.title}
          </button>
        ))}
      </div>

      {/* Exam Content (Interactive) */}
      <div className="p-8" ref={examContentRef}>
        <div className="flex justify-between items-center mb-8">
            <div>
                <h2 className="text-2xl font-bold text-white mb-1">{activeExam.title}</h2>
                <p className="text-slate-400 text-sm">Responde todas las preguntas. Total: 15 Puntos.</p>
            </div>
            <div className="flex items-center gap-4">
                <button
                    onClick={() => handleExportPDF('student')}
                    className="flex items-center gap-2 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded text-xs font-medium transition border border-slate-600"
                    title="Exportar a PDF"
                >
                    <Download size={14} />
                    PDF
                </button>
                {showResults[activeExamId] && (
                    <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 text-center">
                        <span className="block text-xs text-slate-400 uppercase">Calificación</span>
                        <span className={`text-xl font-bold ${calculateScore() >= 9 ? 'text-green-400' : 'text-red-400'}`}>
                            {calculateScore()} / 15
                        </span>
                    </div>
                )}
            </div>
        </div>

        <div className="space-y-8">
          {activeExam.questions.map((q, index) => {
            const userAnswer = answers[activeExamId]?.[q.id];
            const correct = showResults[activeExamId] ? isCorrect(q, userAnswer) : null;

            return (
              <div key={q.id} className={`p-6 rounded-lg border transition ${
                showResults[activeExamId] 
                  ? (correct ? 'bg-green-900/10 border-green-500/30' : 'bg-red-900/10 border-red-500/30')
                  : 'bg-slate-800/30 border-slate-700 hover:border-slate-600'
              }`}>
                <div className="flex justify-between mb-4">
                    <h3 className="text-white font-medium flex gap-3">
                        <span className="text-brand-500 font-mono">{index + 1}.</span>
                        {q.question}
                    </h3>
                    <span className="text-xs text-slate-500 font-mono bg-slate-800 px-2 py-1 rounded h-fit whitespace-nowrap">{q.points} pts</span>
                </div>

                {/* Question Types */}
                <div className="ml-8">
                    {/* Multiple Choice & True/False */}
                    {(q.type === 'multiple_choice' || q.type === 'true_false') && (
                        <div className="space-y-2">
                            {q.options?.map(opt => (
                                <label key={opt} className={`flex items-center gap-3 p-3 rounded cursor-pointer transition border border-transparent
                                    ${userAnswer === opt ? 'bg-brand-500/20 border-brand-500/50' : 'hover:bg-slate-700/50'}
                                    ${showResults[activeExamId] && q.correctAnswer === opt ? '!bg-green-500/20 !border-green-500' : ''}
                                    ${showResults[activeExamId] && userAnswer === opt && userAnswer !== q.correctAnswer ? '!bg-red-500/20 !border-red-500' : ''}
                                `}>
                                    <input 
                                        type="radio" 
                                        name={`q-${activeExamId}-${q.id}`} 
                                        value={opt}
                                        checked={userAnswer === opt}
                                        onChange={() => handleAnswerChange(q.id, opt)}
                                        disabled={showResults[activeExamId]}
                                        className="text-brand-500 focus:ring-brand-500 bg-slate-900 border-slate-600"
                                    />
                                    <span className="text-slate-300 text-sm">{opt}</span>
                                    {showResults[activeExamId] && q.correctAnswer === opt && <CheckCircle size={16} className="text-green-500 ml-auto"/>}
                                    {showResults[activeExamId] && userAnswer === opt && userAnswer !== q.correctAnswer && <XCircle size={16} className="text-red-500 ml-auto"/>}
                                </label>
                            ))}
                        </div>
                    )}

                    {/* Fill in the Blank */}
                    {q.type === 'fill_in_the_blank' && (
                        <div className="bg-[#1e1e1e] p-4 rounded border border-slate-700 font-mono text-sm text-slate-300">
                            {q.codeSnippet?.split('___').map((part, i, arr) => (
                                <React.Fragment key={i}>
                                    {part}
                                    {i < arr.length - 1 && (
                                        <input
                                            type="text"
                                            value={userAnswer?.[i] || ''}
                                            onChange={(e) => {
                                                const newAns = [...(userAnswer || [])];
                                                newAns[i] = e.target.value;
                                                handleAnswerChange(q.id, newAns);
                                            }}
                                            disabled={showResults[activeExamId]}
                                            className={`mx-1 bg-slate-800 border-b border-slate-500 text-center w-24 focus:outline-none focus:border-brand-500 text-white
                                                ${showResults[activeExamId] ? 
                                                    ((q.correctAnswer as string[])[i].toLowerCase() === (userAnswer?.[i] || '').toLowerCase() 
                                                        ? 'border-green-500 text-green-400' 
                                                        : 'border-red-500 text-red-400') 
                                                    : ''}
                                            `}
                                            placeholder="..."
                                        />
                                    )}
                                </React.Fragment>
                            ))}
                            {showResults[activeExamId] && !correct && (
                                <div className="mt-2 text-xs text-green-400">
                                    Respuesta correcta: {(q.correctAnswer as string[]).join(', ')}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Matching */}
                    {q.type === 'matching' && (
                        <div className="grid grid-cols-1 gap-4">
                            {q.matchingPairs?.map(pair => (
                                <div key={pair.id} className="flex items-center justify-between gap-4 bg-slate-800/50 p-3 rounded border border-slate-700">
                                    <span className="text-slate-300 text-sm font-medium">{pair.text}</span>
                                    <div className="flex items-center gap-2">
                                        <select
                                            value={userAnswer?.[pair.id] || ''}
                                            onChange={(e) => {
                                                const newAns = { ...(userAnswer || {}) };
                                                newAns[pair.id] = e.target.value;
                                                handleAnswerChange(q.id, newAns);
                                            }}
                                            disabled={showResults[activeExamId]}
                                            className={`bg-slate-900 border border-slate-600 text-slate-300 text-sm rounded p-2 focus:ring-1 focus:ring-brand-500 outline-none w-48
                                                ${showResults[activeExamId] ? 
                                                    ((q.correctAnswer as any)[pair.id] === userAnswer?.[pair.id]
                                                        ? 'border-green-500 text-green-400'
                                                        : 'border-red-500 text-red-400')
                                                    : ''}
                                            `}
                                        >
                                            <option value="">Seleccionar...</option>
                                            {q.options?.map(opt => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                        {showResults[activeExamId] && (q.correctAnswer as any)[pair.id] !== userAnswer?.[pair.id] && (
                                            <span className="text-xs text-green-400 font-mono">{(q.correctAnswer as any)[pair.id]}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-between items-center" data-html2canvas-ignore>
            {userRole === Role.TEACHER && (
                <button 
                    onClick={() => handleExportPDF('teacher')}
                    className="px-4 py-2 bg-yellow-600/20 hover:bg-yellow-600/30 text-yellow-500 border border-yellow-600/50 rounded font-medium transition flex items-center gap-2 text-sm"
                >
                    <FileCheck size={16} />
                    Descargar Pauta (Docente)
                </button>
            )}

            <div className="flex gap-4 ml-auto">
                {showResults[activeExamId] ? (
                    <button 
                        onClick={resetExam}
                        className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded font-medium transition"
                    >
                        Reintentar
                    </button>
                ) : (
                    <button 
                        onClick={checkAnswers}
                        className="px-6 py-2 bg-brand-600 hover:bg-brand-500 text-white rounded font-medium transition flex items-center gap-2 shadow-lg shadow-brand-900/20"
                    >
                        <CheckCircle size={18} />
                        Entregar Examen
                    </button>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ExamView;
