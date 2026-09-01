export interface UserResponse {
  createdAt: Date;
  email: string;
  id: number;
  name: string;
  roles: RoleElement[];
  tasks: Task[];
}

export interface RoleElement {
  id: number;
  role: RoleEnum;
}

export enum RoleEnum {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  User = 'USER',
}

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}
