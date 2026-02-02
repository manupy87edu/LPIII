
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Search, Image as ImageIcon, X, Loader2 } from 'lucide-react';
import { createChatSession, searchWeb, generateImage } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: '¡Hola! Soy tu asistente de LPIII. ¿En qué puedo ayudarte con HTML, CSS o JS hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'chat' | 'search' | 'image'>('chat');
  const chatSession = useRef(createChatSession());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      let responseText = '';

      if (mode === 'chat') {
        const result = await chatSession.current.sendMessage({ message: userMsg.text });
        responseText = result.text || '';
      } else if (mode === 'search') {
        responseText = await searchWeb(userMsg.text);
      } else if (mode === 'image') {
        const imgUrl = await generateImage(userMsg.text);
        if (imgUrl) {
            responseText = `![Generado por IA](${imgUrl})\n\nAquí tienes una imagen generada basada en: "${userMsg.text}"`;
        } else {
            responseText = "Lo siento, no pude generar la imagen. Intenta con otra descripción.";
        }
      }

      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'model', text: responseText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'model', text: 'Ocurrió un error. Por favor intenta de nuevo.', isError: true }]);
    } finally {
      setIsLoading(false);
      // Reset mode to chat after special action
      if (mode !== 'chat') setMode('chat');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-dark-card border border-dark-border rounded-xl shadow-2xl flex flex-col z-50 overflow-hidden">
      {/* Header */}
      <div className="bg-brand-900 p-4 flex justify-between items-center border-b border-dark-border">
        <div className="flex items-center gap-2">
            <div className="bg-brand-500 p-1.5 rounded-full">
                <Bot size={18} className="text-white" />
            </div>
          <div>
            <h3 className="font-bold text-white text-sm">Asistente Virtual</h3>
            <p className="text-xs text-brand-100">Potenciado por Gemini</p>
          </div>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-white transition">
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0f172a]">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[85%] p-3 rounded-lg text-sm ${
                msg.role === 'user' 
                  ? 'bg-brand-600 text-white rounded-tr-none' 
                  : 'bg-slate-700 text-slate-200 rounded-tl-none'
              }`}
            >
              {msg.text.startsWith('![') ? (
                  <div dangerouslySetInnerHTML={{ 
                      __html: msg.text.replace(/\!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" class="rounded-md my-2 border border-slate-600"/>').replace(/\n/g, '<br/>')
                   }} />
              ) : (
                <div className="whitespace-pre-wrap">{msg.text}</div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
            <div className="flex justify-start">
                <div className="bg-slate-700 p-3 rounded-lg rounded-tl-none">
                    <Loader2 className="animate-spin text-brand-400" size={16} />
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 bg-dark-card border-t border-dark-border">
        <div className="flex gap-2 mb-2">
            <button 
                onClick={() => setMode('chat')}
                className={`text-xs px-2 py-1 rounded flex items-center gap-1 ${mode === 'chat' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
            >
                <Bot size={12}/> Chat
            </button>
            <button 
                onClick={() => setMode('search')}
                className={`text-xs px-2 py-1 rounded flex items-center gap-1 ${mode === 'search' ? 'bg-green-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
            >
                <Search size={12}/> Investigar
            </button>
            <button 
                onClick={() => setMode('image')}
                className={`text-xs px-2 py-1 rounded flex items-center gap-1 ${mode === 'image' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:bg-slate-700'}`}
            >
                <ImageIcon size={12}/> Generar Imagen
            </button>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={mode === 'image' ? "Describe la imagen..." : "Escribe tu pregunta..."}
            className="flex-1 bg-slate-800 text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 border border-slate-700"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-brand-600 text-white p-2 rounded-md hover:bg-brand-500 disabled:opacity-50 transition"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
