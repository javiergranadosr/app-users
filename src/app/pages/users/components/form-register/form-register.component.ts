import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../../common/card/card.component';
import { PrimeNgComponentsModule } from '../../../../prime-ng-components/prime-ng-components.module';
import { BackBottonComponent } from '../../../../common/back-botton/back-botton.component';
import { CommonModule } from '@angular/common';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [
    CommonModule,
    PrimeNgComponentsModule,
    CardComponent,
    BackBottonComponent,
  ],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css',
})
export class FormRegisterComponent implements OnInit {
  public url: string =
    'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg';

  public cities: City[] | undefined;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  public onPreviewImage(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.url = event.target!.result as string;
      };
    }
  }
}
