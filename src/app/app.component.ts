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
    // Navigiert zur Liste, falls die Route '' => PasswordListComponent ist
    // oder passe den Pfad an deine Routen-Konfiguration an, z. B. '/list'
    this.router.navigate(['/list']);
  }
}
