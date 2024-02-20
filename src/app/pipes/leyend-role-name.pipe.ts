import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leyendRoleName',
  standalone: true,
})
export class LeyendRoleNamePipe implements PipeTransform {
  transform(role: string): unknown {
    return {
      USER: 'Usuario',
      ADMIN: 'Administrador',
      GUEST: 'Invitado',
    }[role];
  }
}
