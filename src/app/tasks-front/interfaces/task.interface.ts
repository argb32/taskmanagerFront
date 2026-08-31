export interface TaskResponse {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  assignedTo: User[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  roles: Role[];
}

export interface Role {
  id: number;
  role: string;
}
