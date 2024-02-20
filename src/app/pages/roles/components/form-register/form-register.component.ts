import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { PrimeNgComponentsModule } from '../../../../prime-ng-components/prime-ng-components.module';
import { BackBottonComponent } from '../../../../common/back-botton/back-botton.component';
import { CardComponent } from '../../../../common/card/card.component';
import { RoleService } from '../../../../core/role.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { CODE } from '../../../../enum/code.enum';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-role',
  standalone: true,
  imports: [
    CommonModule,
    PrimeNgComponentsModule,
    BackBottonComponent,
    CardComponent,
    ReactiveFormsModule,
  ],
  providers: [MessageService],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css',
})
export class FormRegisterComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();
  private roleService: RoleService = inject(RoleService);
  private messageService: MessageService = inject(MessageService);
  private fb: FormBuilder = new FormBuilder();
  private activedRouter: ActivatedRoute = inject(ActivatedRoute);

  public formRole!: FormGroup;
  public loading: boolean = false;
  public title: string = '';
  public titleButton: string = '';
  private id: number = 0;

  ngOnInit(): void {
    this.formRole = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(100),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(255),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ],
    });
    this.getDetail();
  }

  public onSubmit(): void {
    if (this.formRole.valid) {
      this.loading = true;
      if (this.id > 0) {
        this.roleService.updateRole(this.id, this.formRole.value)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe({
          next: (resp) => {
            this.loading = false;
            if (resp.code === CODE.OK) {
              this.messageService.add({
                severity: 'success',
                summary: 'Notificación del sistema',
                detail: 'Permiso editado.',
              });
            }

          },
          error: (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Notificación del sistema',
              detail: 'Error al editar permiso.',
            });
            console.error(err);
          },
        })
      } else {
        this.roleService
          .createRole(this.formRole.value)
          .pipe(takeUntil(this.unsubscribe))
          .subscribe({
            next: (resp) => {
              this.loading = false;
              if (resp.code === CODE.CREATED) {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Notificación del sistema',
                  detail: 'Permiso creado.',
                });
                this.formRole.get('name')?.setValue('');
                this.formRole.get('description')?.setValue('');
              }
            },
            error: (err) => {
              this.messageService.add({
                severity: 'error',
                summary: 'Notificación del sistema',
                detail: 'Error al crear permiso.',
              });
              console.error(err);
            },
          });
      }
    } else {
      this.formRole.markAllAsTouched();
    }
  }

  private getDetail(): void {
    this.id = this.activedRouter.snapshot.paramMap.get('id')
      ? +this.activedRouter.snapshot.paramMap.get('id')!
      : 0;
    this.title = this.id > 0 ? 'Editar permiso' : 'Crear permiso';
    this.titleButton = this.id > 0 ? 'Editar permiso' : 'Guardar permiso';
    if (this.id > 0) {
      this.loading = true;
      this.roleService
        .getRoleById(this.id)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe({
          next: (resp) => {
            this.loading = false;
            this.formRole.get('name')?.setValue(resp.name);
            this.formRole.get('description')?.setValue(resp.description);
          },
          error: (err) => {
            this.loading = false;
            console.log(err);
            this.messageService.add({
              severity: 'error',
              summary: 'Notificación del sistema',
              detail: 'Error al obtener detalle del permiso.',
            });
          },
        });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
