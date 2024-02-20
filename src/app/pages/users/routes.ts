import { Routes } from '@angular/router';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { UsersComponent } from './users.component';

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: UsersComponent,
    title: 'Usuarios',
  },
  {
    path: 'create',
    component: FormRegisterComponent,
    title: 'Nuevo usuario',
  }
];
