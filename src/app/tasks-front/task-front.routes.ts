import { Routes } from '@angular/router';
import { Layout } from './components/layout/layout';
import { Tasks } from './pages/tasks/tasks';

export const taskRoutes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: Tasks,
      },
    ],
  },
];

export default taskRoutes;
