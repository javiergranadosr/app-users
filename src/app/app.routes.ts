import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/routes').then((mod) => mod.USER_ROUTES),
  },
  {
    path: 'roles',
    loadChildren: () =>
      import('./pages/roles/routes').then((mod) => mod.ROLES_ROUTES),
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./pages/reports/reports.component').then(
        (r) => r.ReportsComponent
      ),
    title: 'Reportes',
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'users',
    pathMatch: 'full',
  },
];
