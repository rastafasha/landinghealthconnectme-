import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GraciasComponent } from './gracias/gracias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { CookiesComponent } from './legal/cookies/cookies.component';
import { PoliticasPrivacidadComponent } from './legal/politicas-privacidad/politicas-privacidad.component';
import { AvisoLegalComponent } from './legal/aviso-legal/aviso-legal.component';



@NgModule({
  declarations: [
    HomeComponent,
    GraciasComponent,
    CookiesComponent,
    PoliticasPrivacidadComponent,
    AvisoLegalComponent
  ],
  exports: [
    HomeComponent,
    GraciasComponent,
    CookiesComponent,
    PoliticasPrivacidadComponent,
    AvisoLegalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
