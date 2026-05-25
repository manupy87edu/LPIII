import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, RefreshCw, Zap, Puzzle, MessageSquare, TerminalSquare, Link } from 'lucide-react';
import { ContentBlock } from '../types';

export const InteractiveMatch = ({ block }: { block: ContentBlock }) => {
    const defaultItems = block.matchItems || [];
    const [leftSelected, setLeftSelected] = useState<string | null>(null);
    const [matches, setMatches] = useState<Record<string, string>>({}); 
    // keys: left id, values: right id
    
    // Shuffle the right side on mount
    const [rightItems, setRightItems] = useState([...defaultItems].sort(() => Math.random() - 0.5));
    
    const isCompleted = Object.keys(matches).length === defaultItems.length;
    const isAllCorrect = isCompleted && defaultItems.every(item => matches[item.id] === item.right);

    const handleLeftClick = (id: string) => {
        if (matches[id]) return; // already matched
        setLeftSelected(leftSelected === id ? null : id);
    };

    const handleRightClick = (rightContent: string) => {
        if (!leftSelected) return;
        
        // Find if this right item is already matched to something else
        if (Object.values(matches).includes(rightContent)) return;

        setMatches(prev => ({
            ...prev,
            [leftSelected]: rightContent
        }));
        setLeftSelected(null);
    };

    const resetMatches = () => {
        setMatches({});
        setLeftSelected(null);
        setRightItems([...defaultItems].sort(() => Math.random() - 0.5));
    };

    return (
        <div className="bg-[#1e1e1e] p-6 rounded-xl border border-slate-700 my-6 shadow-xl">
            <h4 className="text-lg font-bold text-slate-200 mb-2 flex items-center gap-2">
                <Link className="text-yellow-500" size={20} />
                Pareo de Conceptos
            </h4>
            <p className="text-slate-400 mb-6 text-sm">{block.content || "Conecta cada bloque de la izquierda con su contraparte de la derecha correspondiente."}</p>

            <div className="flex flex-col md:flex-row gap-8 mb-6">
                <div className="flex-1 space-y-3">
                    <h5 className="font-bold text-slate-500 text-xs uppercase text-center mb-2">Conceptos Clave</h5>
                    {defaultItems.map(item => {
                        const isMatched = !!matches[item.id];
                        const isSelected = leftSelected === item.id;
                        
                        return (
                            <button 
                                key={item.id}
                                onClick={() => handleLeftClick(item.id)}
                                disabled={isMatched}
                                className={`w-full p-4 rounded text-left border transition-all ${
                                    isMatched ? 'bg-slate-800 border-slate-700 text-slate-600 cursor-not-allowed opacity-50' : 
                                    isSelected ? 'bg-yellow-900/50 border-yellow-500 text-yellow-300 ring-2 ring-yellow-500' : 
                                    'bg-slate-800 border-slate-600 text-slate-300 hover:border-yellow-500/50 hover:bg-slate-700'
                                }`}
                            >
                                {item.left}
                            </button>
                        )
                    })}
                </div>

                <div className="flex-1 space-y-3">
                    <h5 className="font-bold text-slate-500 text-xs uppercase text-center mb-2">Definiciones / Código</h5>
                    {rightItems.map(item => {
                        const matchedKey = Object.keys(matches).find(k => matches[k] === item.right);
                        const isMatched = !!matchedKey;

                        return (
                            <button 
                                key={item.right}
                                onClick={() => handleRightClick(item.right)}
                                disabled={isMatched}
                                className={`w-full p-4 rounded text-left border transition-all ${
                                    isMatched ? 'bg-slate-800 border-slate-700 text-slate-600 cursor-not-allowed opacity-50' : 
                                    leftSelected ? 'bg-slate-800 border-yellow-500/30 text-slate-300 hover:border-yellow-500 hover:bg-slate-700 border-dashed cursor-pointer' : 
                                    'bg-slate-800 border-slate-700 text-slate-400 cursor-default'
                                }`}
                            >
                                {item.right}
                            </button>
                        )
                    })}
                </div>
            </div>

            {isCompleted && (
                <div className={`p-4 rounded border flex items-center justify-between ${isAllCorrect ? 'bg-emerald-900/20 border-emerald-500/50' : 'bg-red-900/20 border-red-500/50'}`}>
                    <div className="flex items-center gap-3">
                        {isAllCorrect ? <CheckCircle className="text-emerald-500" /> : <XCircle className="text-red-500" />}
                        <span className={`font-bold ${isAllCorrect ? 'text-emerald-400': 'text-red-400'}`}>
                            {isAllCorrect ? '¡Felicidades! Todos los bloques están correctos.' : 'Hay errores en las conexiones. Inténtalo de nuevo.'}
                        </span>
                    </div>
                    
                    <button onClick={resetMatches} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded border border-slate-600 text-sm font-bold flex gap-2 items-center">
                        <RefreshCw size={14} /> Reiniciar
                    </button>
                </div>
            )}
        </div>
    );
};

export const InteractiveGamePreview = ({ block }: { block: ContentBlock }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [pos, setPos] = useState({ x: 100, y: 100 });
    const gameAreaRef = React.useRef<HTMLDivElement>(null);

    const isAdvanced = block.title?.includes("Avanzado") || false;

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isPlaying) return;
        
        // Prevent default scrolling
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
            e.preventDefault();
        }

        const SPEED = 20;
        setPos(prev => {
            let newX = prev.x;
            let newY = prev.y;
            
            if (e.key === 'ArrowRight') newX += SPEED;
            if (e.key === 'ArrowLeft') newX -= SPEED;
            if (e.key === 'ArrowUp') newY -= SPEED;
            if (e.key === 'ArrowDown') newY += SPEED;
            
            // Advanced mode: Screen bounds and obstacle collision
            if (isAdvanced) {
                // Bounds (assuming 400x256 container roughly, character is ~36px)
                // Let's use simple numbers
                newX = Math.max(0, Math.min(newX, 800)); // We don't have exact width, let's use a percentage or just raw clamp
            }

            // Let's do DOM-based bounds check for accuracy if it's advanced
            if (isAdvanced && gameAreaRef.current) {
                const maxX = gameAreaRef.current.clientWidth - 40; // 40px char size
                const maxY = gameAreaRef.current.clientHeight - 40;
                newX = Math.max(0, Math.min(newX, maxX));
                newY = Math.max(0, Math.min(newY, maxY));

                // Obstacle collision (Let's say obstacle is at center 50% 50%, size 60x60)
                const obsX = gameAreaRef.current.clientWidth / 2 - 30;
                const obsY = gameAreaRef.current.clientHeight / 2 - 30;
                
                // Simple AABB collision
                if (newX < obsX + 60 && newX + 36 > obsX &&
                    newY < obsY + 60 && newY + 36 > obsY) {
                    // Collision detected, revert
                    return prev;
                }
            }

            return { x: newX, y: newY };
        });
    };

    return (
        <div className="bg-slate-900 border border-purple-500/30 rounded-xl overflow-hidden shadow-lg my-6">
             <div className="bg-purple-900/40 border-b border-purple-500/30 px-4 py-3 flex items-center justify-between">
                <h4 className="font-bold text-purple-400 flex items-center gap-2">
                    <Zap size={18} />
                    Live Preview: {block.title || "Minijuego"}
                </h4>
            </div>
            
            <p className="p-4 bg-[#1e1e1e] text-slate-300 text-sm border-b border-slate-800">
                {block.content || "Prueba el resultado final. Haz clic en 'Iniciar Prueba' y usa las flechas del teclado para mover el personaje."}
            </p>

            <div 
                ref={gameAreaRef}
                tabIndex={0}
                onKeyDown={handleKeyDown}
                className={`relative w-full h-64 bg-[#111] overflow-hidden focus:outline-none transition-all ${isPlaying ? 'ring-2 ring-purple-500' : 'opacity-80'}`}
                onClick={() => setIsPlaying(true)}
            >
                {!isPlaying ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsPlaying(true);
                                gameAreaRef.current?.focus();
                            }}
                            className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg shadow-lg flex gap-2 items-center"
                        >
                            <Zap size={18} />
                            Iniciar Prueba (Focus)
                        </button>
                    </div>
                ) : (
                    <div className="absolute top-2 right-2 text-xs text-purple-400 font-mono bg-purple-900/30 px-2 py-1 rounded z-20">
                        Activo - Usa las flechas ⌨️
                    </div>
                )}
                
                {isAdvanced && (
                    <div className="absolute top-1/2 left-1/2 w-[60px] h-[60px] bg-red-600/80 border-2 border-red-500 rounded-lg transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-red-200 font-bold shadow-[0_0_15px_rgba(220,38,38,0.5)] z-0">
                        Pared
                    </div>
                )}

                <div 
                    className="absolute text-4xl transition-all duration-100 z-10"
                    style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
                >
                    🧙‍♂️
                </div>
            </div>
        </div>
    );
};

export const MainAssignmentBlock = ({ block }: { block: ContentBlock }) => {
    return (
        <div className="bg-gradient-to-r from-brand-900/40 to-slate-900 border-2 border-brand-500/50 rounded-xl p-8 my-8 shadow-2xl relative">
            <div className="absolute -top-4 -right-4 bg-brand-500 text-white font-black px-4 py-2 rounded-lg shadow-lg transform rotate-3 flex gap-2 items-center">
                <CheckCircle size={18} /> TAREA OBLIGATORIA
            </div>
            
            <h3 className="text-2xl font-black text-brand-400 mb-4">{block.title || "Actividad Principal"}</h3>
            
            <div className="prose prose-invert max-w-none text-slate-300">
                <div dangerouslySetInnerHTML={{ __html: block.content }} />
            </div>

            <div className="mt-8 pt-6 border-t border-brand-900/50 bg-brand-900/20 p-4 rounded-lg flex items-start gap-4">
               <div className="mt-1 text-brand-400"><Puzzle size={24} /></div>
               <div>
                   <h4 className="font-bold text-slate-200">Entrega de la Actividad</h4>
                   <p className="text-sm text-slate-400 mt-1">Una vez finalizado el código en tu editor, asegúrate de comprimir tu carpeta en un archivo .zip o subirlo a un repositorio como GitHub (según las indicaciones) y entrégalo en la plataforma oficial de la facultad.</p>
               </div>
            </div>
        </div>
    );
};

export const InteractiveDiagram = () => {
    return (
        <div className="bg-[#1e1e1e] p-6 rounded-xl border border-blue-500/30 shadow-lg text-center font-mono relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
             <h3 className="text-xl text-blue-400 font-bold mb-6 italic">Arquitectura Visual: El Circuito del Evento</h3>
             
             <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                 {/* Trigger */}
                 <div className="bg-slate-800 p-4 rounded-lg shadow-md border border-slate-700 w-48 animate-pulse text-indigo-300">
                     <div className="flex justify-center mb-2"><Zap size={32} className="text-yellow-400" /></div>
                     <p className="font-bold">1. Event Trigger</p>
                     <p className="text-xs text-slate-400 mt-2">Usuario presiona "Spacebar" (keydown)</p>
                 </div>

                 <div className="hidden md:block text-slate-500">
                     <svg width="40" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h30M28 5l7 7-7 7"/></svg>
                 </div>

                 {/* Listener */}
                 <div className="bg-slate-800 p-4 rounded-lg shadow-md border border-slate-700 w-48 text-emerald-300">
                     <div className="flex justify-center mb-2"><MessageSquare size={32} className="text-emerald-400" /></div>
                     <p className="font-bold">2. Event Listener</p>
                     <p className="text-xs text-slate-400 mt-2">document.addEventListener detecta y captura información</p>
                 </div>

                 <div className="hidden md:block text-slate-500">
                    <svg width="40" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h30M28 5l7 7-7 7"/></svg>
                 </div>

                 {/* Handler */}
                 <div className="bg-slate-800 p-4 rounded-lg shadow-md border border-slate-700 w-48 text-purple-300">
                     <div className="flex justify-center mb-2"><TerminalSquare size={32} className="text-purple-400" /></div>
                     <p className="font-bold">3. Event Handler</p>
                     <p className="text-xs text-slate-400 mt-2">Función (callback) procesa lógica e interviene HTML</p>
                 </div>
             </div>
             <p className="mt-8 text-sm text-slate-400 border-t border-slate-700 pt-4 max-w-2xl mx-auto">
                 Esta anatomía ocurre en milisegundos. Cuando interactúas (click, mover el ratón, teclas), el <strong>Trigger</strong> es detectado por el <strong>Listener (Oreja)</strong>, que inmediatamente dispara al <strong>Handler (Cerebro)</strong> para realizar la acción.
             </p>
        </div>
    );
};

export const InteractiveInlineQuiz = ({ block }: { block: ContentBlock }) => {
    const [selected, setSelected] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);

    const isCorrect = selected === block.quizOptions?.find(o => o.isCorrect)?.id;

    return (
        <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/30 rounded-xl p-6 shadow-md my-4">
            <h4 className="text-lg font-bold text-slate-200 mb-4 flex gap-2 items-center">
                <Puzzle className="text-indigo-400" size={20} />
                Comprueba lo aprendido
            </h4>
            <p className="text-slate-300 mb-6">{block.content}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {block.quizOptions?.map(opt => (
                    <button
                        key={opt.id}
                        disabled={submitted}
                        onClick={() => setSelected(opt.id)}
                        className={`p-4 rounded-lg text-left border ${
                            selected === opt.id 
                                ? 'bg-indigo-600/50 border-indigo-400 text-white' 
                                : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500 hover:bg-slate-700'
                        } ${
                            submitted && opt.isCorrect ? '!bg-emerald-900/60 !border-emerald-500 !text-emerald-300' : ''
                        } ${
                            submitted && selected === opt.id && !opt.isCorrect ? '!bg-red-900/60 !border-red-500 !text-red-300' : ''
                        } transition-colors`}
                    >
                        {opt.text}
                    </button>
                ))}
            </div>

            {!submitted && selected && (
                <button 
                    onClick={() => setSubmitted(true)}
                    className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded font-bold shadow-lg"
                >
                    Verificar Respuesta
                </button>
            )}

            {submitted && (
                <div className={`p-4 rounded-lg flex items-start gap-3 mt-4 ${isCorrect ? 'bg-emerald-900/20 text-emerald-400 border border-emerald-800/50' : 'bg-red-900/20 text-red-500 border border-red-800/50'}`}>
                    {isCorrect ? <CheckCircle size={20} className="shrink-0 mt-0.5" /> : <XCircle size={20} className="shrink-0 mt-0.5" />}
                    <div>
                        <p className="font-bold mb-1">{isCorrect ? '¡Excelente!' : 'Respuesta Incorrecta'}</p>
                        <p className="text-sm opacity-90">{block.quizExplanation}</p>
                        {!isCorrect && (
                            <button onClick={() => { setSubmitted(false); setSelected(null); }} className="text-xs underline mt-2 flex gap-1 items-center hover:opacity-80">
                                <RefreshCw size={12} /> Intentar de nuevo
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export const InteractiveCodeFill = ({ block }: { block: ContentBlock }) => {
    const parts = (block.codeTemplate || "").split(/___BLANK[0-9]+___/);
    const blanksCount = parts.length - 1;
    const [inputs, setInputs] = useState<string[]>(Array(blanksCount).fill(''));
    const [checked, setChecked] = useState(false);

    const isAllCorrect = inputs.every((val, idx) => val.trim() === block.expectedFills?.[idx]);

    const handleChange = (idx: number, val: string) => {
        const newInputs = [...inputs];
        newInputs[idx] = val;
        setInputs(newInputs);
        setChecked(false); // reset check when typing
    };

    return (
        <div className="bg-slate-900 border border-emerald-500/30 rounded-xl overflow-hidden shadow-lg my-6">
            <div className="bg-emerald-900/40 border-b border-emerald-500/30 px-4 py-3 flex items-center justify-between">
                <h4 className="font-bold text-emerald-400 flex items-center gap-2">
                    <TerminalSquare size={18} />
                    Completa el Código
                </h4>
            </div>
            
            <p className="p-4 bg-[#1e1e1e] text-slate-300 text-sm italic border-b border-slate-800">{block.content}</p>

            <div className="p-4 font-mono text-sm bg-black/60 overflow-x-auto whitespace-pre leading-loose text-slate-300">
                {parts.map((part, index) => (
                    <React.Fragment key={index}>
                        {part}
                        {index < blanksCount && (
                            <input 
                                type="text"
                                className={`inline-block px-2 mx-1 py-0.5 bg-slate-800 text-yellow-300 font-bold border-b-2 outline-none w-32 focus:bg-slate-700 ${
                                    checked ? (inputs[index].trim() === block.expectedFills?.[index] ? 'border-emerald-500 text-emerald-300' : 'border-red-500 text-red-400') : 'border-emerald-500/50'
                                }`}
                                value={inputs[index]}
                                onChange={(e) => handleChange(index, e.target.value)}
                            />
                        )}
                    </React.Fragment>
                ))}
            </div>

            <div className="p-4 border-t border-slate-800 bg-[#1e1e1e] flex items-center justify-between">
                <button 
                    onClick={() => setChecked(true)}
                    className="px-6 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded font-bold transition-colors"
                >
                    Ejecutar / Probar
                </button>
                {checked && (
                    <span className={`font-bold ${isAllCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                        {isAllCorrect ? '✨ ¡Código Compilado Correctamente!' : '❌ Hay errores en tu código, fíjate en las cajas rojas e intenta repararlo.'}
                    </span>
                )}
            </div>
        </div>
    );
};

export const InteractiveTallerGuiado = ({ block }: { block: ContentBlock }) => {
    return (
        <div className="bg-[#111111] border border-orange-500/40 rounded-xl p-8 my-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
            
            <div className="mb-6 border-b border-orange-900/50 pb-4">
                <h3 className="text-2xl font-black text-orange-400 mb-2 uppercase tracking-wide">Workshop Autoguiado</h3>
                <p className="text-slate-300">{block.content}</p>
            </div>

            <div className="space-y-6">
                <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-900/50 border border-orange-500 flex items-center justify-center text-orange-400 font-bold shrink-0">1</div>
                    <div>
                        <h4 className="text-lg font-bold text-slate-200 mb-1">Prepara tu Lienzo (HTML)</h4>
                        <p className="text-slate-400 text-sm">Crea un archivo `index.html`, enlaza `style.css` y tu `script.js`. Agrega un contenedor con ID `area-juego` y dentro un ID `jugador`. Mantenlo simple.</p>
                    </div>
                </div>
                
                <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-900/50 border border-orange-500 flex items-center justify-center text-orange-400 font-bold shrink-0">2</div>
                    <div>
                        <h4 className="text-lg font-bold text-slate-200 mb-1">Aplícale Magia Visual (CSS)</h4>
                        <p className="text-slate-400 text-sm">El `#area-juego` debe ser un cuadrado gris oscuro con `position: relative`. El `#jugador` (un pequeño cubo verde) debe tener `position: absolute` para poder moverlo de las coordenadas.</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-900/50 border border-orange-500 flex items-center justify-center text-orange-400 font-bold shrink-0">3</div>
                    <div>
                        <h4 className="text-lg font-bold text-slate-200 mb-1">Motor Lógico (JavaScript)</h4>
                        <p className="text-slate-400 text-sm">Asigna variables globales para `x = 0; y = 0;`. Añade el `addEventListener` al documento para la tecla 'w', 'a', 's', 'd' y altera 'x' e 'y'. Finalmente asigale a `jugador.style.left` y `jugador.style.top` los píxeles respectivos.</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 text-center">
                <p className="text-orange-300 font-medium italic">Tómate alrededor de 45 minutos para construirlo en tu IDE local. La práctica persistente es la clave.</p>
            </div>
        </div>
    );
};
