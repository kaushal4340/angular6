import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component'
import { ButtonComponent } from '../components/button/button.component'
import { LayoutComponent } from '../components/layout/layout.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'buttons', component: ButtonComponent },
  { path: 'homelayout', component: LayoutComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
