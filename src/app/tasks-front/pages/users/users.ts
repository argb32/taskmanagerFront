import { Component, inject, signal } from '@angular/core';
import { UserService } from '../../services/userService';
import { JsonPipe, TitleCasePipe } from '@angular/common';
import { rxResource } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { User } from '../../interfaces/task.interface';
import { UserResponse } from '../../interfaces/user.interface';

@Component({
  selector: 'app-users',
  imports: [TitleCasePipe],
  templateUrl: './users.html',
})
export class Users {
  userService = inject(UserService);

  users = signal(this.userService.getUsers());

  userResource = rxResource({
    stream: () =>
      this.userService
        .getUsers()
        .pipe(tap((res) => console.log(res))),
  });

  getRoles(user: UserResponse): string {
    return user.roles.map((role) => role.role).join(', ');
  }
}
