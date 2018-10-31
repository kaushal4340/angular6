import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './components/layout/filter.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component'
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CardComponent } from './components/card/card.component';

// root ng module
@NgModule({
  // The components, directives, and pipes that belong to this NgModule.
  declarations: [
    AppComponent,
    ButtonComponent,
    LoginComponent,
    LayoutComponent,
    CardComponent,
    FilterPipe
  ],

  // The subset of declarations that should be visible and usable in the component templates of other NgModules.
  exports: [],

  // Other modules whose exported classes are needed by component templates declared in this NgModule.
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  // Creators of services that this NgModule contributes to the global collection of services
  providers: [],

  // The main application view, called the root component, which hosts all other app views
  bootstrap: [AppComponent]
})

export class AppModule { }
