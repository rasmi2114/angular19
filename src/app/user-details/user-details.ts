import { Component, EventEmitter, Input, Output, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { UserTasks } from '../user-tasks/user-tasks';

interface User {
  id: number;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, UserTasks],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent {
  users = signal<User[]>([
    { id: 1, name: 'John Doe', avatar: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Jane Smith', avatar: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Bob Johnson', avatar: 'https://via.placeholder.com/100' },
    { id: 4, name: 'Alice Brown', avatar: 'https://via.placeholder.com/100' },
    { id: 5, name: 'Charlie Wilson', avatar: 'https://via.placeholder.com/100' },
  ]);
  
  selectedUser = signal<User | null>(null);
  
  @Output() select= new EventEmitter();

  onSelectUser(user: User) {
    this.selectedUser.set(user);
    this.select.emit(user.id);
  }
 
}