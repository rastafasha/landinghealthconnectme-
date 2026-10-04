import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-interfaz',
    templateUrl: './interfaz.component.html',
    styleUrls: ['./interfaz.component.css']
})
export class InterfazComponent {
// Guardamos el slide que está actualmente en pantalla (empieza en cero)
  currentSlide = 0;

  // Las 6 capturas de pantalla de Klyntic Paciente
  slides = [
    { img: 'assets/images/app/login.png', desc: 'Acceso rápido y seguro. Tu puerta de entrada a una gestión médica sin complicaciones.' },
    { img: 'assets/images/app/home.png', desc: 'Todo bajo control. Visualiza tus próximas citas, medicamentos y récipes desde una interfaz intuitiva.' },
    { img: 'assets/images/app/citas.png', desc: 'Seguimiento en tiempo real. Consulta el estado de tus citas y ubicaciones con total claridad.' },
    { img: 'assets/images/app/payments.png', desc: 'Historial transparente. Filtra, revisa y gestiona los recibos de tus consultas de forma digital.' },
    { img: 'assets/images/app/presupuestos.png', desc: 'Planes a tu alcance. Revisa y aprueba los presupuestos emitidos por tus especialistas al instante.' },
    { img: 'assets/images/app/profile.png', desc: 'Tu información contigo. Mantén actualizados tus datos de contacto, notificaciones y expediente.' }
  ];

  // Función nativa para cambiar de diapositiva
  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}