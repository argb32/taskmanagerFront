import { Component, input } from '@angular/core';
import { TaskResponse } from '../../interfaces/task.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-card',
  imports: [DatePipe],
  templateUrl: './task-card.html',
})
export class TaskCard {
  task = input<TaskResponse>();
}
