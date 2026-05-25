
export enum Role {
  TEACHER = 'DOCENTE',
  STUDENT = 'ALUMNO'
}

export enum UnitId {
  HTML = 'HTML',
  CSS = 'CSS',
  JS = 'JS'
}

export interface Question {
  id: number;
  type: 'multiple_choice' | 'true_false' | 'fill_in_the_blank' | 'matching';
  question: string;
  options?: string[];
  correctAnswer: string | string[] | { [key: string]: string };
  points: number;
  codeSnippet?: string;
  matchingPairs?: { id: string; text: string }[]; // For matching: list of items to match against options
}

export interface Exam {
  id: string;
  title: string;
  questions: Question[];
}

export interface ClassSession {
  id: number;
  title: string;
  description: string;
  duration: string;
  type: 'Teórico' | 'Práctico' | 'Teórico-Práctico' | 'Examen';
  objectives: string[];
  contentBlocks: ContentBlock[];
  teacherGuide?: ContentBlock[]; // New property for detailed teacher script
  homework?: string;
  exams?: Exam[];
}

export interface ContentBlock {
  type: 'theory' | 'code' | 'image' | 'task' | 'slides' | 'script' | 'interactive-events' | 'interactive-diagram' | 'interactive-quiz' | 'interactive-code-fill' | 'interactive-match' | 'taller-guiado' | 'game-preview' | 'main-assignment';
  title?: string;
  content: string; // Markdown or HTML string
  codeLanguage?: string;
  imageUrl?: string;
  teacherSolution?: string;
  teacherSolutionLanguage?: string;

  // Extra props for interactive content
  quizOptions?: { id: string, text: string, isCorrect?: boolean }[];
  quizExplanation?: string;
  codeTemplate?: string; // string with ___BLANK1___ etc.
  expectedFills?: string[]; 
  matchItems?: { id: string, left: string, right: string }[];
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
