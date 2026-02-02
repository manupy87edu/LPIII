import React, { useState } from 'react';
import { Lock, User, ArrowRight, AlertCircle, FileCode } from 'lucide-react';
import { Role, User as UserType } from '../types';

interface LoginScreenProps {
  onLogin: (user: UserType) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (username === 'admin' && password === 'admin123') {
      onLogin({
        username: 'admin',
        name: 'Profesor Administrador',
        role: Role.TEACHER
      });
    } else if (username === 'alumno' && password === 'alumno123') {
      onLogin({
        username: 'alumno',
        name: 'Estudiante Universitario',
        role: Role.STUDENT
      });
    } else {
      setError('Credenciales incorrectas. Intente nuevamente.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4">
      <div className="bg-[#1e293b] w-full max-w-md rounded-2xl shadow-2xl border border-[#334155] overflow-hidden">
        <div className="p-8 text-center border-b border-[#334155] bg-[#0284c7]/10">
          <div className="w-16 h-16 bg-[#0ea5e9] rounded-xl mx-auto flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
            <FileCode size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">Aula Virtual LPIII</h1>
          <p className="text-slate-400 text-sm">Desarrollo Web Front-End</p>
        </div>

        <form onSubmit={handleLogin} className="p-8 space-y-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg text-sm flex items-center gap-2">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Usuario</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                <User size={18} />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-[#0f172a] border border-[#334155] rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition"
                placeholder="Ingrese su usuario"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Contraseña</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                <Lock size={18} />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0f172a] border border-[#334155] rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold py-3 rounded-lg transition duration-200 flex items-center justify-center gap-2 group"
          >
            Ingresar al Aula
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
        
        <div className="p-4 bg-[#0f172a] text-center text-xs text-slate-500 border-t border-[#334155]">
          Licenciatura en Análisis de Sistemas • 3º Semestre
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
