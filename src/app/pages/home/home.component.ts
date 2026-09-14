import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  
  ngOnInit(): void {
    // 1. Aseguramos el inicio de la pantalla arriba estilo Apple
    window.scrollTo(0, 0);

    // 2. Creamos el observador nativo de alta velocidad para los hijos
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 🚀 Inyectamos las clases de tu archivo animate.css SOLO al hijo que entró en pantalla
          this.renderer.addClass(entry.target, 'animated');
          this.renderer.addClass(entry.target, 'fadeInUp');
          
          // Desconectamos este hijo específico para liberar memoria RAM
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1, // Se activa cuando asoma el 10% de la sección
      rootMargin: '0px 0px -40px 0px' // Dispara un poco antes de que toque el borde visual
    });

    // 3. ⚠️ CRUCIAL: Esperamos un milisegundo a que Angular dibuje el HTML y buscamos los bloques
    setTimeout(() => {
      const seccionesANimar = this.el.nativeElement.querySelectorAll('.animar-scroll');
      seccionesANimar.forEach((seccion: HTMLElement) => {
        observer.observe(seccion);
      });
    }, 50);
  }
}
