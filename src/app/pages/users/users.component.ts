import { Component, OnInit } from '@angular/core';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CardComponent } from '../../common/card/card.component';
import { LeyendRoleNamePipe } from '../../pipes/leyend-role-name.pipe';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ListUsersComponent, CardComponent, LeyendRoleNamePipe],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
