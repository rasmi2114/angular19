import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
}
