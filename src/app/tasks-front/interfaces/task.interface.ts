export interface TaskResponse {
  id: number;
  title: string;
  description: string;
  stage: Stage;
  completed: boolean;
  createdAt: Date;
  assignedTo: User[];
}

export enum Stage {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  TESTING = 'TESTING',
  COMPLETED = 'COMPLETED',
}

export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  roles: Role[];
}

export interface Role {
  id: number;
  role: string;
}
