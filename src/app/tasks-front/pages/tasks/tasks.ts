import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/taskService';
import { rxResource } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { TitleCasePipe } from '@angular/common';
import { TaskResponse } from '../../interfaces/task.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  imports: [TitleCasePipe, RouterLink],
  templateUrl: './tasks.html',
})
export class Tasks {
  taskService = inject(TaskService);

  taskResource = rxResource({
    stream: () => this.taskService.getTasks(),
  });

  getAssignedTo(task: TaskResponse): string {
    return task.assignedTo.map((user) => user.name).join(', ');
  }
}
