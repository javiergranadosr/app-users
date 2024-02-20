import { ListRoles } from './list-roles';

export interface ListUsers {
  id: number;
  name: string;
  lastname: string;
  username: string;
  email: string;
  telephone: string;
  roles: ListRoles[];
  image: string;
  createdAt: string;
  updatedAt: string;
}
