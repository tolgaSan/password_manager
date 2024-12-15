import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Willkommen zur Passwort-Manager-App</h1>
    <button (click)="goToList()">Zur Passwort-Liste</button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  constructor(private router: Router) {}

  goToList() {
    this.router.navigate(['/list']);
  }
}
