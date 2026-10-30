import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraciasComponent } from './pages/gracias/gracias.component';
import { HomeComponent } from './pages/home/home.component';
import { CookiesComponent } from './pages/legal/cookies/cookies.component';
import { PoliticasPrivacidadComponent } from './pages/legal/politicas-privacidad/politicas-privacidad.component';
import { AvisoLegalComponent } from './pages/legal/aviso-legal/aviso-legal.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'politica-cookies', component: CookiesComponent },
  { path: 'privacidad', component: PoliticasPrivacidadComponent },
  { path: 'aviso-legal', component: AvisoLegalComponent },
  { path: 'gracias', component: GraciasComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
