import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';




@NgModule({
  declarations: [],
  imports: [
    MenubarModule,
    ButtonModule,
    TableModule,
    CardModule,
    BadgeModule,
    AvatarModule,
    ImageModule,
    InputTextModule,
    InputMaskModule,
    DropdownModule,
    MultiSelectModule,
    InputTextareaModule,
    ProgressBarModule,
    ToastModule,
    ConfirmDialogModule

  ],
  exports: [
    MenubarModule,
    ButtonModule,
    TableModule,
    CardModule,
    BadgeModule,
    AvatarModule,
    ImageModule,
    InputTextModule,
    InputMaskModule,
    DropdownModule,
    MultiSelectModule,
    InputTextareaModule,
    ProgressBarModule,
    ToastModule,
    ConfirmDialogModule
  ],
})
export class PrimeNgComponentsModule {}
