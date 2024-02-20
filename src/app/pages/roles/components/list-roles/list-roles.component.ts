import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { PrimeNgComponentsModule } from '../../../../prime-ng-components/prime-ng-components.module';
import { RoleService } from '../../../../core/role.service';
import { Role } from '../../../../interfaces/role';
import { Subject, delay, takeUntil } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CODE } from '../../../../enum/code.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-roles',
  standalone: true,
  imports: [CommonModule, PrimeNgComponentsModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './list-roles.component.html',
  styleUrl: './list-roles.component.css',
})
export class ListRolesComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();
  private roleService: RoleService = inject(RoleService);
  private messageService: MessageService = inject(MessageService);
  private confirmationService: ConfirmationService =
    inject(ConfirmationService);

  public data: Role[] = [];
  public loading: boolean = true;

  ngOnInit(): void {
    this.getAllRoles();
  }

  public delete(name:string, id: number): void {
    this.confirmationService.confirm({
      message: `¿Desea eliminar el permiso ${name}?`,
      header: 'Notificación del sistema',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',
      accept: () => {
        this.roleService
          .deleteRole(id)
          .pipe(takeUntil(this.unsubscribe))
          .subscribe({
            next: (resp) => {
              if (resp.code === CODE.OK) {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Notificación del sistema',
                  detail: 'Permiso eliminado.',
                });
                this.getAllRoles();
              }
            },
            error: (error) => {
              console.error(error);
              this.messageService.add({
                severity: 'error',
                summary: 'Notificación del sistema',
                detail: 'Error al elminar permiso.',
              });
            },
          });
      },
    });
  }

  private getAllRoles(): void {
    this.loading = true;
    this.roleService
      .getAllRoles()
      .pipe(delay(1500))
      .subscribe({
        next: (resp) => {
          this.loading = false;
          this.data = resp;
        },
        error: (error) => {
          this.loading = false;
          this.data = [];
          console.log(error);
        },
      });
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
