import { Component } from '@angular/core';

@Component({
  selector: 'app-klyntic-express',
  templateUrl: './klyntic-express.component.html',
  styleUrls: ['./klyntic-express.component.css']
})
export class KlynticExpressComponent {

  public phone: string = '584241874370'; 
  public message: string = '';

  // 🚀 NUEVO: Almacenamos la URL de Cloudinary del video de Klyntic Express aquí
  public videoUrl: string = 'https://res.cloudinary.com/dmv6aukai/video/upload/v1790278825/crmklyntic/videos/recursos/94287d51-bed4-4932-af3b-264c33819d42.mp4';

  ngOnInit() {
    // 2. El texto que quieres recibir, convertido a formato seguro de URL
    const textoPlano = '¡Hola! Vi la página de Klyntic y quiero tener Klyntic Express en mi Perfil. ¿Cómo podemos iniciar la prueba gratis?';
    
    this.message = encodeURIComponent(textoPlano);
  }

}
