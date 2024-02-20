import { Routes } from '@angular/router';
import { RolesComponent } from './roles.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
export const ROLES_ROUTES: Routes = [
  {
    path: '',
    component: RolesComponent,
    title: 'Permisos',
  },
  {
    path: 'create',
    component: FormRegisterComponent,
    title: 'Nuevo permiso',
  },
  {
    path: 'edit/:id',
    component: FormRegisterComponent,
    title: 'Editar permiso',
  },
];
