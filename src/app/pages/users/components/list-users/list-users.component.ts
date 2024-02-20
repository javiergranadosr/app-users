import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { PrimeNgComponentsModule } from '../../../../prime-ng-components/prime-ng-components.module';
import { TablePageEvent } from 'primeng/table';
import { RouterLink } from '@angular/router';
import { ListUsers } from '../../../../interfaces/list-users';
import { CommonModule } from '@angular/common';
import { Role } from '../../../../interfaces/role';
import { Observable, Subject, takeUntil } from 'rxjs';
import { RoleService } from '../../../../core/role.service';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [PrimeNgComponentsModule, RouterLink, CommonModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css',
})
export class ListUsersComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();
  private roleService: RoleService = inject(RoleService);
  public roles: Role[] = [];
  public cities: { name: string; code: string }[] = [];

  public users: ListUsers[] = [
    {
      id: 1,
      name: 'Javier',
      lastname: 'Granados Rojas',
      username: 'javiergranadosr',
      email: 'javiergranadosr@demo.com',
      telephone: '(+52) 9827311440',
      roles: [
        {
          id: 1,
          name: 'ADMIN',
        },
        {
          id: 2,
          name: 'USER',
        },
      ],
      image:
        'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      createdAt: '01/16/2024',
      updatedAt: '01/16/2024',
    },
    {
      id: 1,
      name: 'Javier',
      lastname: 'Granados Rojas',
      username: 'javiergranadosr',
      email: 'javiergranadosr@demo.com',
      telephone: '(+52) 9827311440',
      roles: [
        {
          id: 1,
          name: 'ADMIN',
        },
        {
          id: 2,
          name: 'USER',
        },
      ],
      image:
        'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
      createdAt: '01/16/2024',
      updatedAt: '01/16/2024',
    },
  ];

  ngOnInit() {
    this.roleService.getAllRoles()
    .pipe(takeUntil(this.unsubscribe))
    .subscribe({
      next: (roles) => {
        console.log(roles);
        this.roles = roles;
      },
      error: (e) => {
        console.error(e);
      },
    });
  }

  pageChange($event: TablePageEvent) {
    console.log($event);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
