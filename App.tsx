
import React, { useState } from 'react';
import { BookOpen, GraduationCap, Layout, Users, FileCode, CheckCircle, Clock, Menu, X, ChevronDown, ChevronRight, PlayCircle, Folder, Lock, LogOut, Mic, MonitorPlay, Terminal, FileText } from 'lucide-react';
import Markdown, { Components } from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Role, UnitId, ClassSession, User, ContentBlock as ContentBlockType } from './types';
import { SYLLABUS, COURSE_INFO } from './constants';
import CodeBlock from './components/CodeBlock';
import LoginScreen from './components/LoginScreen';
import ExamView from './components/ExamView';
import TeacherExams from './components/TeacherExams';
import StudentExams from './components/StudentExams';
import { InteractiveDiagram, InteractiveInlineQuiz, InteractiveCodeFill, InteractiveTallerGuiado, InteractiveMatch, InteractiveGamePreview, MainAssignmentBlock } from './components/AutonomousBlocks';

// Simple Router States
type View = 'dashboard' | 'unit' | 'class' | 'exams';

const markdownComponents: Components = {
  code(props) {
    const {children, className, node, ...rest} = props
    const match = /language-(\w+)/.exec(className || '')
    return match ? (
      <CodeBlock
        code={String(children).replace(/\n$/, '')}
        language={match[1]}
      />
    ) : (
      <code {...rest} className={className}>
        {children}
      </code>
    )
  }
};

const InteractiveEventsComponent = () => {
    const [eventLog, setEventLog] = useState<string>("Esperando acciones del usuario...");
    
    return (
        <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl shadow-inner border border-purple-500/30 my-4 text-center">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Generador de Eventos</h3>
            <p className="text-sm text-slate-300 mb-6">Interactúa con los elementos abajo para ver cómo el navegador 'dispara' los eventos.</p>
            
            <div className="flex gap-4 flex-wrap justify-center items-center">
                <button 
                    onClick={() => {
                        window.alert('¡Evento click detectado!');
                        setEventLog('Evento: click (Botón clickeado)');
                    }} 
                    className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-500 active:scale-95 transition-all text-sm font-bold"
                >
                    ¡Haz Clic Aquí!
                </button>
                
                <div 
                    onMouseEnter={(e) => {
                        (e.target as HTMLElement).innerText = '¡Estás encima!';
                        setEventLog('Evento: mouseenter (Cursor sobre la caja)');
                    }} 
                    onMouseLeave={(e) => {
                        (e.target as HTMLElement).innerText = 'Pasa el cursor';
                        setEventLog('Evento: mouseleave (Cursor salió de la caja)');
                    }} 
                    className="px-6 py-3 bg-pink-600 text-white rounded-lg shadow-md cursor-pointer transition-all flex items-center justify-center w-40 text-sm font-bold select-none"
                >
                    Pasa el cursor
                </div>
                
                <input 
                    type="text" 
                    placeholder="Escribe algo aquí..." 
                    onInput={(e) => setEventLog('Evento: input - Valor actual: "' + (e.target as HTMLInputElement).value + '"')}
                    className="px-4 py-3 rounded-lg border border-purple-500/50 bg-[#1e1e1e] text-white focus:border-purple-400 focus:outline-none w-48 text-sm placeholder:text-slate-500" 
                />
            </div>
            
            <div className="mt-8 p-4 bg-black/40 rounded-lg shadow-md border border-dark-border w-full max-w-md mx-auto">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Consola de Eventos</p>
                <p className="text-emerald-400 font-mono text-sm min-h-[1.5rem] flex items-center justify-center m-0">
                    {eventLog}
                </p>
            </div>
        </div>
    );
};

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [selectedUnitId, setSelectedUnitId] = useState<UnitId | null>(null);
  const [selectedClass, setSelectedClass] = useState<ClassSession | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // --- Access Control Logic ---
  const isUnitLocked = (unitId: UnitId): boolean => {
    if (!currentUser) return true;
    if (currentUser.role === Role.TEACHER) return false;
    
    // Student Logic: HTML, CSS, and JS are open
    return unitId !== UnitId.HTML && unitId !== UnitId.CSS && unitId !== UnitId.JS;
  };

  const isClassLocked = (unitId: UnitId, classId: number): boolean => {
    if (!currentUser) return true;
    if (currentUser.role === Role.TEACHER) return false;

    // Student Logic: Class 1, 2, 3, 4, 5 and Exam (100) in HTML unit are open
    if (unitId === UnitId.HTML && (classId === 1 || classId === 2 || classId === 3 || classId === 4 || classId === 5 || classId === 100)) return false;
    
    // Student Logic: Unit II (CSS) up to class 5 (Classes 6, 7, 8, 9, 10) are open
    if (unitId === UnitId.CSS && (classId === 6 || classId === 7 || classId === 8 || classId === 9 || classId === 10)) return false;

    // Student Logic: Unit III (JS) Classes 11, 12, 13, 14, and 15 are open
    if (unitId === UnitId.JS && (classId === 11 || classId === 12 || classId === 13 || classId === 14 || classId === 15)) return false;

    return true;
  };

  const isClassVisible = (unitId: UnitId, cls: ClassSession): boolean => {
    if (!currentUser) return false;
    if (currentUser.role === Role.TEACHER) return true;
    
    // Hide Exam in Unit 1 from students
    if (unitId === UnitId.HTML && cls.type === 'Examen') {
      return false;
    }
    
    return true;
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setSelectedUnitId(null);
    setSelectedClass(null);
  };

  const handleClassSelect = (cls: ClassSession, unitId: UnitId) => {
    if (isClassLocked(unitId, cls.id)) return;
    setSelectedClass(cls);
    setCurrentView('class');
    // Close sidebar on mobile when selection is made
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  const handleUnitSelect = (uId: UnitId) => {
      if (isUnitLocked(uId)) return;
      setSelectedUnitId(uId === selectedUnitId ? null : uId);
      if(currentView === 'class') setCurrentView('unit');
      else setCurrentView('unit');
  }

  const goHome = () => {
      setCurrentView('dashboard');
      setSelectedUnitId(null);
      setSelectedClass(null);
  }

  // If not logged in, show Login Screen
  if (!currentUser) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  //Helper to render content blocks (reused for teacher guide and student content)
  const renderContentBlocks = (blocks: ContentBlockType[]) => {
      return blocks.map((block, index) => (
        <section key={index} className="animate-slide-up mb-8 last:mb-0">
            {block.title && <h2 className="text-xl font-bold text-brand-400 mb-4 flex items-center gap-2">
                {block.type === 'script' ? <Mic size={18} className="text-yellow-500" /> : <span className="text-slate-600 text-sm font-mono mr-2">0{index + 1}</span>}
                {block.title}
            </h2>}
            
            {block.type === 'script' && (
                <div className="bg-[#1e1e1e] border-l-4 border-yellow-500 p-4 rounded-r-lg shadow-md">
                    <div className="prose prose-invert prose-sm max-w-none text-yellow-100/90 font-medium">
                        <Markdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>{block.content}</Markdown>
                    </div>
                </div>
            )}

            {block.type === 'theory' && (
                <div className="prose prose-invert max-w-none text-slate-300">
                    <Markdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>{block.content}</Markdown>
                </div>
            )}

            {block.type === 'image' && (
                <div className="rounded-xl overflow-hidden border border-dark-border shadow-lg bg-black/20">
                    <img src={block.imageUrl} alt={block.title} className="w-full h-auto object-contain max-h-[400px]" />
                    {block.content && (
                        <div className="bg-dark-card p-3 text-xs text-center text-slate-500 italic">
                            <Markdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>{block.content}</Markdown>
                        </div>
                    )}
                </div>
            )}

            {block.type === 'code' && (
                <CodeBlock code={block.content} language={block.codeLanguage} title={block.title} />
            )}

            {block.type === 'task' && (
                <div className="bg-gradient-to-r from-emerald-900/30 to-emerald-800/10 border border-emerald-800 rounded-xl p-6">
                    <div className="flex items-center gap-3 text-emerald-400 mb-3 font-bold">
                        <PlayCircle size={24} />
                        <span>Actividad Práctica</span>
                    </div>
                    <div className="prose prose-invert max-w-none text-slate-200">
                        <Markdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>{block.content}</Markdown>
                    </div>
                </div>
            )}
            
            {block.type === 'interactive-events' && (
                <InteractiveEventsComponent />
            )}

            {block.type === 'interactive-diagram' && (
                <InteractiveDiagram />
            )}
            
            {block.type === 'interactive-quiz' && (
                <InteractiveInlineQuiz block={block} />
            )}

            {block.type === 'interactive-code-fill' && (
                <InteractiveCodeFill block={block} />
            )}

            {block.type === 'interactive-match' && (
                <InteractiveMatch block={block} />
            )}

            {block.type === 'game-preview' && (
                <InteractiveGamePreview block={block} />
            )}

            {block.type === 'main-assignment' && (
                <MainAssignmentBlock block={block} />
            )}

            {block.type === 'taller-guiado' && (
                <InteractiveTallerGuiado block={block} />
            )}
        </section>
      ));
  };

  // --- Render Functions ---

  const renderSidebar = () => (
    <aside className={`${isSidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 bg-dark-card border-r border-dark-border h-screen fixed left-0 top-0 overflow-hidden z-20 flex flex-col`}>
      <div className="p-6 border-b border-dark-border flex flex-col gap-2">
        <div className="flex items-center gap-2 text-brand-500 font-bold text-xl cursor-pointer" onClick={goHome}>
          <FileCode />
          <span>LPIII</span>
        </div>
        <p className="text-xs text-slate-400">Aula Virtual {COURSE_INFO.semester}</p>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <div className="px-4 mb-2 text-xs font-semibold text-slate-500 uppercase">Unidades</div>
        {SYLLABUS.map(unit => {
          const locked = isUnitLocked(unit.id);
          return (
            <div key={unit.id} className="mb-2">
              <button 
                  onClick={() => handleUnitSelect(unit.id)}
                  disabled={locked}
                  className={`w-full px-4 py-3 flex items-center justify-between transition group
                    ${selectedUnitId === unit.id ? 'bg-slate-800 border-l-2 border-brand-500' : 'hover:bg-slate-800/50'}
                    ${locked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                  `}
              >
                  <div className="flex items-center gap-3">
                      {locked ? (
                        <Lock size={14} className="text-slate-500" />
                      ) : (
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-br ${unit.color}`}></span>
                      )}
                      <span className={`text-sm ${locked ? 'text-slate-500' : 'text-slate-200'}`}>{unit.title}</span>
                  </div>
                  {!locked && (
                    selectedUnitId === unit.id ? <ChevronDown size={14} className="text-slate-400"/> : <ChevronRight size={14} className="text-slate-400"/>
                  )}
              </button>
              
              {/* Submenu for classes if unit selected */}
              {selectedUnitId === unit.id && !locked && (
                  <div className="bg-[#0f172a] py-1 animate-slide-down">
                      {unit.classes.filter(cls => isClassVisible(unit.id, cls)).map(cls => {
                        const classLocked = isClassLocked(unit.id, cls.id);
                        return (
                          <button
                              key={cls.id}
                              onClick={() => handleClassSelect(cls, unit.id)}
                              disabled={classLocked}
                              className={`w-full pl-10 pr-4 py-2 text-left text-xs transition flex items-center gap-2 
                                ${selectedClass?.id === cls.id ? 'text-brand-500 font-medium bg-brand-500/10' : 'text-slate-400 hover:text-brand-400'}
                                ${classLocked ? 'opacity-40 cursor-not-allowed hover:text-slate-400' : ''}
                              `}
                          >
                              {classLocked ? <Lock size={10} /> : <div className={`w-1 h-1 rounded-full ${selectedClass?.id === cls.id ? 'bg-brand-500' : 'bg-slate-600'}`}></div>}
                              {cls.type === 'Examen' ? 'Examen' : `Clase ${cls.id}`}
                          </button>
                        );
                      })}
                  </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-auto flex flex-col">
        {currentUser.role === Role.TEACHER ? (
          <div className="p-4 border-t border-dark-border bg-slate-900/50">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Herramientas Docente
            </p>
            <button
                onClick={() => {
                    setCurrentView('exams');
                    if (window.innerWidth < 768) setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 text-sm ${
                    currentView === 'exams'
                        ? 'bg-brand-500/10 text-brand-400 font-medium'
                        : 'text-slate-400 hover:bg-[#1e1e1e] hover:text-slate-200'
                }`}
            >
                <FileText size={16} />
                Banco de Exámenes
            </button>
          </div>
        ) : (
          <div className="p-4 border-t border-dark-border bg-slate-900/50">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Práctica y Repaso
            </p>
            <button
                onClick={() => {
                    setCurrentView('exams');
                    if (window.innerWidth < 768) setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 text-sm ${
                    currentView === 'exams'
                        ? 'bg-brand-500/10 text-brand-400 font-medium'
                        : 'text-slate-400 hover:bg-[#1e1e1e] hover:text-slate-200'
                }`}
            >
                <FileText size={16} />
                Taller de Repaso
            </button>
          </div>
        )}

        <div className="p-4 border-t border-dark-border bg-slate-900/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-500 to-brand-700 flex items-center justify-center text-xs font-bold text-white uppercase shadow-lg shadow-brand-900/50">
              {currentUser.role === Role.TEACHER ? 'D' : 'A'}
            </div>
          <div className="overflow-hidden">
            <p className="text-sm text-white font-medium truncate">{currentUser.name}</p>
            <p className="text-xs text-slate-400 truncate capitalize">{currentUser.role.toLowerCase()}</p>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 text-xs text-red-400 hover:bg-red-500/10 py-2 rounded transition border border-transparent hover:border-red-500/20"
        >
          <LogOut size={14} /> Cerrar Sesión
        </button>
      </div>
      </div>
    </aside>
  );

  const renderDashboard = () => (
    <div className="p-8 max-w-6xl mx-auto animate-fade-in">
        <div className="mb-8 border-b border-dark-border pb-6 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{COURSE_INFO.name}</h1>
              <p className="text-slate-400">{COURSE_INFO.career} - {COURSE_INFO.semester}</p>
            </div>
            {currentUser.role === Role.TEACHER && (
              <div className="bg-yellow-500/10 border border-yellow-500/30 px-3 py-1 rounded text-yellow-500 text-xs font-mono flex items-center gap-2">
                <Users size={12} /> VISTA DE DOCENTE (ACCESO TOTAL)
              </div>
            )}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-dark-card border border-dark-border p-6 rounded-xl flex items-start justify-between hover:border-brand-500/30 transition">
                <div>
                    <p className="text-slate-400 text-sm mb-1">Próxima Clase</p>
                    <h3 className="text-xl font-semibold text-white">Clase 1: HTML</h3>
                    <span className="text-xs bg-brand-900 text-brand-300 px-2 py-1 rounded mt-2 inline-block">Unidad I</span>
                </div>
                <div className="bg-brand-500/10 p-3 rounded-lg text-brand-500"><Clock size={24}/></div>
            </div>
            <div className="bg-dark-card border border-dark-border p-6 rounded-xl flex items-start justify-between hover:border-green-500/30 transition">
                <div>
                    <p className="text-slate-400 text-sm mb-1">Progreso del Curso</p>
                    <h3 className="text-xl font-semibold text-white">{currentUser.role === Role.TEACHER ? 'N/A' : '5%'}</h3>
                    <div className="w-24 h-1.5 bg-slate-700 rounded-full mt-3">
                        <div className="w-1.5 h-full bg-green-500 rounded-full"></div>
                    </div>
                </div>
                <div className="bg-green-500/10 p-3 rounded-lg text-green-500"><CheckCircle size={24}/></div>
            </div>
            {/* Third card removed as requested */}
        </div>

        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <BookOpen size={20} className="text-brand-500" />
          Plan de Estudios
        </h2>
        <div className="grid grid-cols-1 gap-6">
            {SYLLABUS.map(unit => {
              const unitLocked = isUnitLocked(unit.id);
              return (
                <div key={unit.id} className={`group bg-dark-card border border-dark-border transition rounded-xl overflow-hidden relative ${unitLocked ? 'opacity-60' : 'hover:border-brand-500/50'}`}>
                    {unitLocked && (
                      <div className="absolute inset-0 bg-dark-bg/50 z-10 flex items-center justify-center backdrop-blur-[1px]">
                        <div className="bg-dark-card p-3 rounded-full border border-dark-border shadow-xl">
                          <Lock size={24} className="text-slate-400" />
                        </div>
                      </div>
                    )}
                    <div className={`h-2 w-full bg-gradient-to-r ${unitLocked ? 'from-slate-700 to-slate-600' : unit.color}`}></div>
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">{unit.weeks}</span>
                                <h3 className={`text-2xl font-bold mt-1 transition ${unitLocked ? 'text-slate-400' : 'text-white group-hover:text-brand-400'}`}>{unit.title}</h3>
                            </div>
                            <button 
                              onClick={() => handleUnitSelect(unit.id)} 
                              disabled={unitLocked}
                              className={`p-2 rounded-full transition text-white ${unitLocked ? 'bg-slate-800/50 cursor-not-allowed' : 'bg-slate-800 hover:bg-slate-700'}`}
                            >
                                {unitLocked ? <Lock size={18} className="text-slate-500"/> : <ChevronRight size={20}/>}
                            </button>
                        </div>
                        <p className="text-slate-400 mb-6">{unit.description}</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {unit.classes.filter(cls => isClassVisible(unit.id, cls)).map(cls => {
                              const classLocked = isClassLocked(unit.id, cls.id);
                              return (
                                <div 
                                  key={cls.id} 
                                  onClick={() => !classLocked && handleClassSelect(cls, unit.id)} 
                                  className={`
                                    p-3 rounded border transition relative
                                    ${classLocked 
                                      ? 'bg-slate-800/20 border-slate-800/50 cursor-not-allowed opacity-70' 
                                      : 'bg-[#0f172a] border-slate-800 hover:border-brand-500/50 cursor-pointer'}
                                  `}
                                >
                                    <div className="flex justify-between items-start mb-1">
                                      <div className={`text-xs ${classLocked ? 'text-slate-500' : 'text-brand-500'}`}>Clase {cls.id}</div>
                                      {classLocked && <Lock size={12} className="text-slate-600" />}
                                    </div>
                                    <div className={`text-sm font-medium truncate ${classLocked ? 'text-slate-500' : 'text-slate-200'}`}>{cls.title}</div>
                                </div>
                              );
                            })}
                        </div>
                    </div>
                </div>
              );
            })}
        </div>
    </div>
  );

  const renderClassView = () => {
    if (!selectedClass) return null;

    if (selectedClass.type === 'Examen' && selectedClass.exams) {
        return (
            <div className="max-w-5xl mx-auto p-8 animate-fade-in">
                 <button onClick={() => selectedUnitId ? setCurrentView('unit') : setCurrentView('dashboard')} className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition">
                    <ChevronDown size={16} className="rotate-90"/> Volver
                </button>
                <ExamView exams={selectedClass.exams} userRole={currentUser.role} />
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto p-8 animate-fade-in">
            <button onClick={() => selectedUnitId ? setCurrentView('unit') : setCurrentView('dashboard')} className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition">
                <ChevronDown size={16} className="rotate-90"/> Volver
            </button>

            <header className="mb-10 border-b border-dark-border pb-6">
                <div className="flex items-center gap-4 mb-2">
                    <span className="bg-brand-900 text-brand-300 text-xs px-2 py-1 rounded font-mono uppercase">{selectedClass.type}</span>
                    <span className="text-slate-400 text-xs flex items-center gap-1"><Clock size={12}/> {selectedClass.duration}</span>
                </div>
                <h1 className="text-4xl font-bold text-white mb-4">{selectedClass.title}</h1>
                <p className="text-lg text-slate-300 leading-relaxed">{selectedClass.description}</p>
            </header>

            {/* TEACHER EXCLUSIVE VIEW */}
            {currentUser.role === Role.TEACHER && (selectedClass.teacherGuide || selectedClass.contentBlocks.some(b => b.teacherSolution)) && (
                <div className="mb-16 animate-slide-up">
                    <div className="bg-yellow-900/10 border border-yellow-600/30 rounded-xl overflow-hidden">
                        <div className="bg-yellow-900/20 px-6 py-4 border-b border-yellow-600/30 flex items-center gap-3">
                             <MonitorPlay className="text-yellow-500" size={24}/>
                             <div>
                                 <h2 className="text-xl font-bold text-yellow-500">Guía de Desarrollo de Clase</h2>
                                 <p className="text-xs text-yellow-200/70">Solo visible para el docente (Admin)</p>
                             </div>
                        </div>
                        <div className="p-8 space-y-8 bg-[#161208]">
                             {selectedClass.teacherGuide && renderContentBlocks(selectedClass.teacherGuide)}
                             
                             {/* Render solutions for tasks here */}
                             {selectedClass.contentBlocks.filter(b => b.type === 'task' && b.teacherSolution).map((block, idx) => (
                                 <div key={`solution-${idx}`} className="mt-8 pt-8 border-t border-yellow-800/50">
                                     <details className="group">
                                         <summary className="flex items-center gap-2 text-yellow-500 font-semibold cursor-pointer hover:text-yellow-400 transition-colors">
                                             <ChevronRight size={18} className="transition-transform group-open:rotate-90" />
                                             Solución: {block.title}
                                         </summary>
                                         <div className="mt-4">
                                             <CodeBlock 
                                                 code={block.teacherSolution!} 
                                                 language={block.teacherSolutionLanguage || 'html'} 
                                                 title="Código Propuesto" 
                                             />
                                         </div>
                                     </details>
                                 </div>
                             ))}
                        </div>
                    </div>
                </div>
            )}

            {/* STUDENT CONTENT (Teacher sees this too) */}
            <div className="space-y-12">
                <div className="flex items-center gap-2 mb-6">
                    <Terminal size={20} className="text-brand-500"/>
                    <h3 className="text-lg font-bold text-white">Contenido del Estudiante</h3>
                    <div className="h-px bg-slate-700 flex-1 ml-4"></div>
                </div>

                {selectedClass.contentBlocks.length === 0 ? (
                    <div className="text-center py-20 text-slate-500 bg-dark-card rounded-xl border border-dashed border-dark-border">
                        <Layout size={48} className="mx-auto mb-4 opacity-50"/>
                        <p>El contenido digital para los alumnos se habilitará durante la sesión.</p>
                    </div>
                ) : (
                    renderContentBlocks(selectedClass.contentBlocks)
                )}
            </div>

            {selectedClass.homework && (
                <div className="mt-16 border-t border-dark-border pt-8 pb-8">
                     <h3 className="text-xl font-bold text-white mb-4">🏠 Tarea para la Casa</h3>
                     <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex gap-4">
                         <div className="bg-blue-500/10 p-2 h-fit rounded text-blue-400"><BookOpen size={24}/></div>
                         <div>
                            <p className="text-slate-300">{selectedClass.homework}</p>
                            <p className="text-xs text-slate-500 mt-2">Fecha de entrega: Próxima clase</p>
                         </div>
                     </div>
                </div>
            )}
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg text-slate-200 font-sans flex">
      {/* Sidebar Trigger (Mobile) */}
      <button 
        className={`fixed top-4 left-4 z-30 p-2 bg-dark-card border border-dark-border rounded-md text-white md:hidden ${isSidebarOpen ? 'hidden' : 'block'}`}
        onClick={() => setIsSidebarOpen(true)}
      >
        <Menu size={20} />
      </button>

      {/* Main Sidebar */}
      {renderSidebar()}

      {/* Main Content Area */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Top Bar */}
        <div className="sticky top-0 z-10 bg-dark-bg/90 backdrop-blur-md border-b border-dark-border h-16 flex items-center justify-between px-8">
             <div className="flex items-center gap-4">
                 <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-slate-400 hover:text-white hidden md:block">
                     {isSidebarOpen ? <X size={20}/> : <Menu size={20}/>}
                 </button>
                 <div className="text-sm font-mono text-slate-500 hidden sm:block">
                     LPIII / {selectedUnitId ? selectedUnitId : 'Dashboard'} {selectedClass ? `/ ${selectedClass.title}` : ''}
                 </div>
             </div>
             <div className="flex items-center gap-4">
                 <button className="p-2 text-slate-400 hover:text-brand-400 transition" title="Recursos"><BookOpen size={20}/></button>
                 <button className="p-2 text-slate-400 hover:text-brand-400 transition" title="Calificaciones"><GraduationCap size={20}/></button>
                 <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-xs">
                    {currentUser.name.charAt(0)}
                 </div>
             </div>
        </div>

        {/* Dynamic Content */}
        {currentView === 'dashboard' && renderDashboard()}
        {currentView === 'unit' && renderDashboard()} 
        {currentView === 'class' && renderClassView()}
        {currentView === 'exams' && currentUser.role === Role.TEACHER && <TeacherExams onBack={() => setCurrentView('dashboard')} />}
        {currentView === 'exams' && currentUser.role === Role.STUDENT && <StudentExams username={currentUser.username} onBack={() => setCurrentView('dashboard')} />}

      </main>
    </div>
  );
}

export default App;
