import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { AccedeComponent } from './accede/accede.component';
import { DescubreComponent } from './descubre/descubre.component';
import { InterfazComponent } from './interfaz/interfaz.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { VideoComponent } from './video/video.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonalComponent } from './personal/personal.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { SpaningComponent } from './spaning/spaning.component';



@NgModule({
  declarations: [
    ComentariosComponent,
    AccedeComponent,
    DescubreComponent,
    InterfazComponent,
    NewsletterComponent,
    VideoComponent,
    PersonalComponent,
    FormularioRegistroComponent,
    SpaningComponent
  ],
  exports: [
    ComentariosComponent,
    AccedeComponent,
    DescubreComponent,
    InterfazComponent,
    NewsletterComponent,
    VideoComponent,
    PersonalComponent,
    FormularioRegistroComponent,
    SpaningComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class ComponentsModule { }
