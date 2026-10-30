import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { inject } from '@vercel/analytics';
import { filter } from 'rxjs/operators';

declare let fbq: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'klyntic';

  constructor(private router: Router) {}
  ngOnInit() {
    // Si tienes alguna otra función de analíticas como inject(), ejecútala aquí
    // inject(); 

    // Escuchamos el cambio de rutas en Angular
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.enviarPageViewSeguro();
    });

    // Escuchamos el evento que lanza el banner si el usuario acepta las cookies en ese preciso momento
    window.addEventListener('cookies_inicializadas', () => {
      this.enviarPageViewSeguro();
    });
  }

  private enviarPageViewSeguro() {
    const win = window as any;
    const consentimiento = localStorage.getItem('klyntic_cookies_consent');

    // Solo disparamos el PageView si existe el objeto fbq y se guardó el consentimiento del médico
    if (consentimiento === 'aceptado' && typeof win.fbq === 'function') {
      win.fbq('track', 'PageView');
    }
  }

  
}
