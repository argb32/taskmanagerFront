import { Routes } from '@angular/router';
import { Layout } from './components/layout/layout';
import { Home } from './pages/home/home';
import { Users } from './pages/users/users';
import { Tasks } from './pages/tasks/tasks';
import { TaskCard } from './components/task-card/task-card';

export const taskRoutes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'users',
        component: Users,
      },
      {
        path: 'tasks',
        component: Tasks,
      },
      {
        path: 'tasks/:id',
        component: TaskCard,
      },
    ],
  },
];

export default taskRoutes;
