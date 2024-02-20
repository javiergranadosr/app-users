import { Component, Input } from '@angular/core';
import { PrimeNgComponentsModule } from '../../prime-ng-components/prime-ng-components.module';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [PrimeNgComponentsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() public cardTitle: string = "";
  @Input() public cardDescription: string =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas';
}
