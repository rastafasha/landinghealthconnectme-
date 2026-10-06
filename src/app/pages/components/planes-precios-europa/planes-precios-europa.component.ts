import { Component } from '@angular/core';

@Component({
  selector: 'app-planes-precios-europa',
  templateUrl: './planes-precios-europa.component.html',
  styleUrls: ['./planes-precios-europa.component.css']
})
export class PlanesPreciosEuropaComponent {
  public phone: string = '584241874370'; 
  public message: string = '';

 
  ngOnInit() {
    // 2. El texto que quieres recibir, convertido a formato seguro de URL
    const textoPlano = '¡Hola! Vi la página de Klyntic y quiero una demostración. ¿Cómo podemos iniciar la prueba gratis?';
    
    this.message = encodeURIComponent(textoPlano);
  }

}
