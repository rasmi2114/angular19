import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  name: string;
  avatar: string;
}

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  userId: number;
}

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-tasks.html',
  styleUrl: './user-tasks.css',
})
export class UserTasks {
  @Input() selectedUser: User | null = null;

  tasks = signal<Task[]>([
    { id: 1, title: 'Complete project documentation', description: 'Write comprehensive docs', completed: false, userId: 1 },
    { id: 2, title: 'Review pull requests', description: 'Code review for team PRs', completed: true, userId: 1 },
    { id: 3, title: 'Update database schema', description: 'Migrate to new schema', completed: false, userId: 2 },
    { id: 4, title: 'Fix login bug', description: 'Debug authentication issue', completed: true, userId: 2 },
    { id: 5, title: 'Design new UI', description: 'Create mockups for dashboard', completed: false, userId: 3 },
    { id: 6, title: 'Setup CI/CD pipeline', description: 'Configure GitHub Actions', completed: true, userId: 3 },
    { id: 7, title: 'Write unit tests', description: 'Increase test coverage', completed: false, userId: 4 },
    { id: 8, title: 'Deploy to production', description: 'Release v2.0', completed: true, userId: 4 },
    { id: 9, title: 'Client meeting', description: 'Discuss requirements', completed: false, userId: 5 },
    { id: 10, title: 'Optimize performance', description: 'Improve load time', completed: false, userId: 5 },
  ]);

  get userTasks() {
    if (!this.selectedUser) return [];
    return this.tasks().filter(task => task.userId === this.selectedUser!.id);
  }
}
