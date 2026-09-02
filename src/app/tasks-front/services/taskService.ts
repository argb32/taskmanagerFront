import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { TaskResponse } from '../interfaces/task.interface';
import { Task } from '../interfaces/user.interface';

const BASE_URL = environment.baseUrl;

@Service()
export class TaskService {
  private http = inject(HttpClient);

  getTasks(): Observable<TaskResponse[]> {
    return this.http.get<TaskResponse[]>(`${BASE_URL}/tasks`);
  }

  getTasksById(id: number): Observable<TaskResponse> {
    return this.http.get<TaskResponse>(`${BASE_URL}/tasks/${id}`);
  }
}
