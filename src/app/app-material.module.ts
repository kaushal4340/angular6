import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSnackBarModule,
  MatIconModule,
  MatToolbarModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: []
})
export class AppMaterialModule { }
