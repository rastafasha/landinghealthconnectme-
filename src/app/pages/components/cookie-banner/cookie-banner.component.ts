import { Component } from '@angular/core';

// 🚀 AÑADE ESTA LÍNEA AQUÍ PARA QUE TYPESCRIPT RECONOZCA DATALAYER:
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: any;
  }
}

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.css']
})
export class CookieBannerComponent {
  cookiesAceptadas: boolean = false;

  ngOnInit(): void {
    // Validamos si el médico ya aceptó las cookies previamente
    const consentimiento = localStorage.getItem('klyntic_cookies_consent');
    if (consentimiento === 'aceptado') {
      this.cookiesAceptadas = true;
      this.cargarScriptsSeguimiento();
    }
  }

  aceptarTodasCookies(): void {
    localStorage.setItem('klyntic_cookies_consent', 'aceptado');
    this.cookiesAceptadas = true;
    this.cargarScriptsSeguimiento();
  }

  irAConfiguracion(): void {
    // "Mínimo legal": lo redirigimos a la página donde explicamos cómo bloquearlas desde el navegador
    // evitando tener que programar un modal complejo con selectores individuales.
    window.location.href = '/politica-cookies';
  }

  private cargarScriptsSeguimiento(): void {
  // --- 1. Inicialización e inyección de Google Tag Manager ---
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  
  const gtmScript = document.createElement('script');
  gtmScript.async = true;
  gtmScript.src = 'https://googletagmanager.com';
  document.head.appendChild(gtmScript);


  // --- 2. Inicialización e inyección de Google Analytics 4 (GA4) ---
  window.gtag = window.gtag || function(...args: any[]) { window.dataLayer.push(args); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-D2FTY7G5FB');

  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://googletagmanager.com';
  document.head.appendChild(gaScript);


  // --- 3. Inicialización e inyección de Meta Pixel ---
  if (!window.fbq) {
    window.fbq = function(...args: any[]) {
      window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, args) : window.fbq.queue.push(args);
    };
    if (!(window as any)._fbq) (window as any)._fbq = window.fbq;
    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = '2.0';
    window.fbq.queue = [];

    const pixelScript = document.createElement('script');
    pixelScript.async = true;
    pixelScript.src = 'https://facebook.net';
    document.head.appendChild(pixelScript);
  }

  window.fbq('init', '2144425336154102');
  
  // Avisamos a AppComponent que las cookies ya están listas
  window.dispatchEvent(new Event('cookies_inicializadas'));
  console.log('Todos los scripts (GTM, GA4 y Meta Pixel) se han activado legalmente.');
}


}
