import { Component, inject, input } from '@angular/core';
import { TaskService } from '../../services/taskService';
import { rxResource } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-task-details',
  imports: [JsonPipe],
  templateUrl: './task-details.html',
})
export class TaskDetails {
  taskService = inject(TaskService);

  id = input.required<string>();

  taskResource = rxResource({
    stream: () => this.taskService.getTasksById(Number(this.id())),
  });
}
