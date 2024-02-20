import { Component, OnInit } from '@angular/core';
import { PrimeNgComponentsModule } from '../../prime-ng-components/prime-ng-components.module';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [PrimeNgComponentsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Usuarios',
        icon: 'pi pi-fw pi-users',
        routerLink: '/users',
      },
      {
        label: 'Permisos',
        icon: 'pi pi-fw pi-cog',
        routerLink: '/roles',
      },
      {
        label: 'Reportes',
        icon: 'pi pi-cloud-download',
        routerLink: '/reports',
      },
    ];
  }
}
