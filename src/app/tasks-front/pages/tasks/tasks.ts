import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/taskService';
import { rxResource } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { TaskCard } from './task-card/task-card';

@Component({
  selector: 'app-tasks',
  imports: [JsonPipe, TaskCard],
  templateUrl: './tasks.html',
})
export class Tasks {
  taskService = inject(TaskService);

  taskResource = rxResource({
    stream: () =>
      this.taskService
        .getTasks()
        .pipe(tap((res) => console.log('Respuesa: ', res))),
  });
}
