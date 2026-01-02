import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Entete } from './entete/entete';
import { Main } from './main/main';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    Entete,
    Main,
  ],
})
export class App {
  protected readonly title = signal('cv_bootstrap');
}
