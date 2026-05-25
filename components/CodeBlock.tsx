import React, { useState, useMemo } from 'react';
import { Info } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

interface ParsedLine {
  code: string;
  explanation: string | null;
  originalLineNumber: number;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'html', title }) => {
  const [selectedLine, setSelectedLine] = useState<number | null>(null);

  const parsedLines = useMemo(() => {
    const lines = code.split('\n');
    const result: ParsedLine[] = [];
    let pendingExplanation: string[] = [];
    let inMultiLineComment = false;
    let multiLineAccumulator: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
      // Handle multi-line comments
      if (inMultiLineComment) {
        if (line.includes('*/')) {
          inMultiLineComment = false;
          const parts = line.split('*/');
          multiLineAccumulator.push(parts[0].trim());
          pendingExplanation.push(multiLineAccumulator.join('\n'));
          multiLineAccumulator = [];
          
          // If there's code after the comment, process it
          if (parts[1].trim() !== '') {
            result.push({
              code: parts[1],
              explanation: pendingExplanation.join('\n\n') || null,
              originalLineNumber: i + 1
            });
            pendingExplanation = [];
          }
        } else {
          multiLineAccumulator.push(line.trim());
        }
        continue;
      }

      if (line.trim().startsWith('/*') && !line.includes('*/')) {
        inMultiLineComment = true;
        multiLineAccumulator.push(line.replace('/*', '').trim());
        continue;
      }

      // Match inline comments at the end of the line or full line comments
      const htmlMatch = line.match(/^(.*?)\s*<!--\s*(.*?)\s*-->\s*$/);
      const cssMatch = line.match(/^(.*?)\s*\/\*\s*(.*?)\s*\*\/\s*$/);
      
      // For JS, avoid matching URLs like http://
      let jsMatch = null;
      if (!line.includes('://')) {
        jsMatch = line.match(/^(.*?)\s*\/\/\s*(.*?)\s*$/);
      }

      let cleanCode = line;
      let inlineExp = '';

      if (htmlMatch) {
        cleanCode = htmlMatch[1];
        inlineExp = htmlMatch[2];
      } else if (cssMatch) {
        cleanCode = cssMatch[1];
        inlineExp = cssMatch[2];
      } else if (jsMatch) {
        cleanCode = jsMatch[1];
        inlineExp = jsMatch[2];
      }

      if (cleanCode.trim() === '' && inlineExp) {
        // It's a full line comment
        pendingExplanation.push(inlineExp);
      } else {
        // It's a line of code (or empty line)
        const finalExplanation = [...pendingExplanation, inlineExp].filter(Boolean).join('\n\n');
        pendingExplanation = [];
        
        result.push({
          code: cleanCode,
          explanation: finalExplanation || null,
          originalLineNumber: i + 1
        });
      }
    }
    
    // If there are trailing comments, add them to the last line
    if (pendingExplanation.length > 0 && result.length > 0) {
      const lastLine = result[result.length - 1];
      lastLine.explanation = [lastLine.explanation, ...pendingExplanation].filter(Boolean).join('\n\n');
    }

    // If the code is just empty lines, return original
    if (result.length === 0) {
      return lines.map((l, i) => ({ code: l, explanation: null, originalLineNumber: i + 1 }));
    }

    return result;
  }, [code]);

  const activeExplanation = selectedLine !== null 
    ? parsedLines[selectedLine]?.explanation 
    : null;

  const hasAnyExplanations = parsedLines.some(l => l.explanation);

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-slate-700 bg-[#1e1e1e] shadow-lg flex flex-col">
      <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-slate-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-xs text-slate-400 font-mono">{title || `${language.toUpperCase()} Snippet`}</span>
      </div>
      
      <div className="flex flex-col md:flex-row max-h-[600px]">
        {/* Code Area */}
        <div className={`p-4 overflow-auto ${hasAnyExplanations ? 'md:w-2/3 border-b md:border-b-0 md:border-r border-slate-700' : 'w-full'}`}>
          <pre className="font-mono text-sm leading-relaxed text-blue-100">
            <code>
              {parsedLines.map((line, idx) => (
                <div 
                  key={idx} 
                  className={`px-2 py-0.5 -mx-2 rounded transition-colors flex ${
                    hasAnyExplanations ? 'cursor-pointer' : ''
                  } ${
                    selectedLine === idx ? 'bg-blue-900/40 border-l-2 border-blue-400' : 'hover:bg-slate-800/50 border-l-2 border-transparent'
                  } ${line.explanation ? 'hover:border-yellow-500/50' : ''}`}
                  onClick={() => hasAnyExplanations && setSelectedLine(selectedLine === idx ? null : idx)}
                >
                  <span className="text-slate-600 select-none w-6 inline-block text-right mr-4 text-xs">
                    {idx + 1}
                  </span>
                  <span className="whitespace-pre">{line.code || ' '}</span>
                  {line.explanation && selectedLine !== idx && (
                    <span className="ml-auto pl-4 text-yellow-500/50 flex-shrink-0">
                      <Info size={14} />
                    </span>
                  )}
                </div>
              ))}
            </code>
          </pre>
        </div>

        {/* Explanation Area */}
        {hasAnyExplanations && (
          <div className="md:w-1/3 bg-[#252526] p-4 flex flex-col overflow-y-auto">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Info size={14} />
              Explicación
            </h4>
            <div className="flex-1">
              {activeExplanation ? (
                <div className="text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {activeExplanation}
                </div>
              ) : (
                <div className="text-sm text-slate-500 italic flex items-center justify-center h-full text-center">
                  Haz clic en una línea de código con el ícono de información para ver su explicación.
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeBlock;