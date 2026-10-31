import { Component } from '@angular/core';

interface Superpower {
  iconClass: string;
  iconPath: string; // Para usar SVGs internos si lo deseas
  title: string;
  badge: string;
  badgeClass: string;
  description: string;
  benefit: string;
}

@Component({
  selector: 'app-superpowers',
  templateUrl: './superpowers.component.html',
  styleUrls: ['./superpowers.component.css']
})
export class SuperpowersComponent {

  superpowers: Superpower[] = [
    {
      iconClass: 'text-success-neon',
      iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z', // Check icon
      title: 'Klyntic Express',
      badge: 'Imán de Pacientes',
      badgeClass: 'badge-express',
      description: 'Transforma tu biografía de Instagram o TikTok en un recepcionista digital 24/7. Tu paciente agenda y paga de forma autónoma desde tus RRSS sin que tengas que responder un solo DM.',
      benefit: 'Citas agendadas en automático mientras atiendes.'
    },
    {
      iconClass: 'text-pro',
      iconPath: 'M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z', // Calendar icon
      title: 'Agenda Dinámica',
      badge: 'Multiconsultorio',
      badgeClass: 'badge-agenda',
      description: '¿Trabajas en diferentes sedes? Configura tu disponibilidad por día y hora. El sistema cambia automáticamente la ubicación y la tarifa de la cita según el consultorio elegido.',
      benefit: 'Cero confusiones de pacientes llegando a la sede equivocada.'
    },
    {
      iconClass: 'text-instagram',
      iconPath: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm5.5-9.25c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75z', // Bell/Alert style or custom
      title: 'Alertas en Tiempo Real',
      badge: 'Cero Fugas de Caja',
      badgeClass: 'badge-control',
      description: 'Recibe notificaciones instantáneas en tu teléfono cada vez que un paciente solicita cita o reporta un pago. Ideal para mantener control absoluto sobre el cuadre de caja diario.',
      benefit: 'Monitoreo absoluto de tus ingresos al momento.'
    },
    {
      iconClass: 'text-success-neon',
      iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z', // Info icon
      title: 'Klyntic Pacientes',
      badge: 'Historial Digital',
      badgeClass: 'badge-pacientes',
      description: 'Tus pacientes acceden a un portal privado donde ven recetas, presupuestos e indicaciones de medicinas. Además, resguarda y visualiza de forma ultra segura exámenes en PDF e imágenes.',
      benefit: 'Pacientes fidelizados y menos mensajes en tu WhatsApp.'
    }
  ];

}
