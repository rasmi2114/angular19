import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { UserDetailsComponent } from './user-details/user-details';
import { UserTasks } from './user-tasks/user-tasks';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'userDetails', component: UserDetailsComponent },
  { path: 'usertasks', component: UserTasks }
];
