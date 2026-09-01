import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable, tap } from 'rxjs';
import { UserResponse } from '../interfaces/user.interface';

const BASE_URL = environment.baseUrl;

@Service()
export class UserService {
  private http = inject(HttpClient);

  getUsers(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(`${BASE_URL}/users`);
  }
}
