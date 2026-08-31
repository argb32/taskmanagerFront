import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./tasks-front/task-front.routes'),
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks-front/task-front.routes'),
  },
  {
    path: 'users',
    loadChildren: () => import('./tasks-front/task-front.routes'),
  },
];
