import { Component, OnInit } from '@angular/core';
import { ListRolesComponent } from './components/list-roles/list-roles.component';
import { CardComponent } from '../../common/card/card.component';
import { PrimeNgComponentsModule } from '../../prime-ng-components/prime-ng-components.module';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [PrimeNgComponentsModule, CardComponent, ListRolesComponent],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  ngOnInit(): void {

  }
}
