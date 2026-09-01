import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/taskService';
import { rxResource } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { TaskCard } from '../../components/task-card/task-card';

@Component({
  selector: 'app-home',
  imports: [JsonPipe, TaskCard],
  templateUrl: './home.html',
})
export class Home {
  taskService = inject(TaskService);

  taskResource = rxResource({
    stream: () =>
      this.taskService
        .getTasks()
        .pipe(tap((res) => console.log('Respuesa: ', res))),
  });
}
