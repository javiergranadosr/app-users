import { Component, Input, inject } from '@angular/core';
import { PrimeNgComponentsModule } from '../../prime-ng-components/prime-ng-components.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-botton',
  standalone: true,
  imports: [PrimeNgComponentsModule],
  templateUrl: './back-botton.component.html',
  styleUrl: './back-botton.component.css'
})
export class BackBottonComponent {
  public router: Router = inject(Router);
  @Input() public url: string = '';

  public back(): void {
    console.log(`URL: ${this.url}`);
    this.router.navigateByUrl(this.url);
  }
}
