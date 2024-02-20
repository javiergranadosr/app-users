import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuComponent } from './common/menu/menu.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title = 'Gestión de usuarios';
}
