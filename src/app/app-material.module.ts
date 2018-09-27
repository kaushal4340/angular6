import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule } from '@angular/material'



@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: []
})
export class AppMaterialModule { }
