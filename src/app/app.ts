import { ProfileCard } from './profile-card/profile-card';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  fullName = 'John Kenneth A. Prado';
  location = 'Lindale Subdivision, Mabalacat City, Pampanga';
  email = 'japrado@student.hau.edu.ph';
  phone = '096 8481 8872';

  profile = 'I Love Nature Lover';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;

  }
  protected readonly title = signal('my-first-app');
}
