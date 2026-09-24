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
import { RecursosVideosComponent } from './recursos-videos/recursos-videos.component';
import { LoadingComponent } from './loading/loading.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { AlianzasComponent } from './alianzas/alianzas.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { ApplepageComponent } from './applepage/applepage.component';
import { HerosectionComponent } from './herosection/herosection.component';
import { FooterComponent } from './footer/footer.component';
import { CuadrobeneficiosComponent } from './cuadrobeneficios/cuadrobeneficios.component';
import { KlynticExpressComponent } from './klyntic-express/klyntic-express.component';
import { KlynticHeroComponent } from './klyntic-hero/klyntic-hero.component';
import { KlynticProComponent } from './klyntic-pro/klyntic-pro.component';
import { KlynticEnterpriseComponent } from './klyntic-enterprise/klyntic-enterprise.component';
import { KlynticExpvschatbotComponent } from './klyntic-expvschatbot/klyntic-expvschatbot.component';
import { KlynticExpFunnelCrecimientoComponent } from './klyntic-exp-funnel-crecimiento/klyntic-exp-funnel-crecimiento.component';
import { PipesModule } from 'src/app/pipes/pipes.module';


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
    SpaningComponent,
    RecursosVideosComponent,
    LoadingComponent,
    TestimoniosComponent,
    AlianzasComponent,
    EnterpriseComponent,
    ApplepageComponent,
    HerosectionComponent,
    FooterComponent,
    CuadrobeneficiosComponent,
    KlynticExpressComponent,
    KlynticHeroComponent,
    KlynticProComponent,
    KlynticEnterpriseComponent,
    KlynticExpvschatbotComponent,
    KlynticExpFunnelCrecimientoComponent
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
    SpaningComponent,
    RecursosVideosComponent,
    LoadingComponent,
    TestimoniosComponent,
    AlianzasComponent,
    EnterpriseComponent,
     ApplepageComponent,
     HerosectionComponent,
     FooterComponent,
     CuadrobeneficiosComponent,
     KlynticExpressComponent,
    KlynticHeroComponent,
    KlynticProComponent,
    KlynticEnterpriseComponent,
    KlynticExpvschatbotComponent,
    KlynticExpFunnelCrecimientoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipesModule
  ]
})
export class ComponentsModule { }
