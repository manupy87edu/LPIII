
export enum Role {
  TEACHER = 'DOCENTE',
  STUDENT = 'ALUMNO'
}

export enum UnitId {
  HTML = 'HTML',
  CSS = 'CSS',
  JS = 'JS'
}

export interface ClassSession {
  id: number;
  title: string;
  description: string;
  duration: string;
  type: 'Teórico' | 'Práctico' | 'Teórico-Práctico';
  objectives: string[];
  contentBlocks: ContentBlock[];
  teacherGuide?: ContentBlock[]; // New property for detailed teacher script
  homework?: string;
}

export interface ContentBlock {
  type: 'theory' | 'code' | 'image' | 'task' | 'slides' | 'script';
  title?: string;
  content: string; // Markdown or HTML string
  codeLanguage?: string;
  imageUrl?: string;
}

export interface Unit {
  id: UnitId;
  title: string;
  description: string;
  color: string;
  classes: ClassSession[];
  weeks: string;
}

export interface User {
  username: string;
  name: string;
  role: Role;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
