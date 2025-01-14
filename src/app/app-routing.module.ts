import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraciasComponent } from './pages/gracias/gracias.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'gracias', component: GraciasComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
