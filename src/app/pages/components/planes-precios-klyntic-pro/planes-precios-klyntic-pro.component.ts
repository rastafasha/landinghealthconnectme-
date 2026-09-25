import { Component } from '@angular/core';

@Component({
  selector: 'app-planes-precios-klyntic-pro',
  templateUrl: './planes-precios-klyntic-pro.component.html',
  styleUrls: ['./planes-precios-klyntic-pro.component.css']
})
export class PlanesPreciosKlynticProComponent {

  public phone: string = '584241874370'; 
  public message: string = '';

  ngOnInit() {
    // 2. El texto que quieres recibir, convertido a formato seguro de URL
    const textoPlano = '¡Hola! Vi la página de Klyntic y quiero tener Klyntic Pro. ¿Cómo podemos iniciar la prueba gratis?';
    
    this.message = encodeURIComponent(textoPlano);
  }

}
