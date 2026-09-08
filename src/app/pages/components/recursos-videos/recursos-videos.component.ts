import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RecursoService } from 'src/app/services/recurso.service';
// import { Recurso } from 'src/app/models/recurso';

declare var bootstrap: any;

interface Recurso {
  titulo: string;
  descripcion: string;
  tipo: 'video' | 'banner';
  urlMedia: string;
  categoria: 'general' | 'odontologia' | 'asistentes' | 'whatsapp';
}

@Component({
  selector: 'app-recursos-videos',
  templateUrl: './recursos-videos.component.html',
  styleUrls: ['./recursos-videos.component.css']
})
export class RecursosVideosComponent {
  recursos: Recurso[] = []; // Aquí inyectas lo que viene de tu API de Node.js
  recursosFiltrados: Recurso[] = [];
  categoriaActiva: string = 'todos';

  isLoading: boolean = false; // Para mostrar un spinner mientras se cargan los recursos

   // Guardará temporalmente el video que el médico quiere ver
  videoSeleccionado: Recurso | null = null;
  private modalInstancia: any;

  categorias = [
    { label: 'Todos', value: 'todos' },
    { label: 'General', value: 'general' },
    { label: 'Odontología', value: 'odontologia' },
    { label: 'WhatsApp', value: 'whatsapp' },
    { label: 'Asistentes', value: 'asistentes' }
  ];

  constructor(
    private sanitizer: DomSanitizer,
    private recursosService: RecursoService,

  ) {}

  ngOnInit(): void {
    // this.obtenerRecursosDeApi();
    this.getRecursos();
  }

  getRecursos(){
    this.isLoading = true;
    this.recursosService.getRecursos().subscribe((resp:any)=>{
      this.recursos = resp;
      this.isLoading = false;
    })
  }

  obtenerRecursosDeApi() {
    // Simulando el fetch a tu backend de Node/Mongo
    // Aquí puedes meter los enlaces que me pasaste arriba
    this.recursos = [
      {
        titulo: 'Introducción a Klyntic AI',
        descripcion: 'Descubra cómo funciona el asistente de voz principal para la automatización médica.',
        tipo: 'video',
        urlMedia: 'https://screenpal.com',
        categoria: 'general'
      },
      {
        titulo: 'Odontograma Inteligente por Voz',
        descripcion: 'Dicte los hallazgos directamente en la ficha dental sin usar las manos ni pausar la consulta.',
        tipo: 'video',
        urlMedia: 'https://screenpal.com',
        categoria: 'odontologia'
      },
      {
        titulo: 'Automatización de Citas por WhatsApp',
        descripcion: 'Conecte su canal de WhatsApp y permita que la IA agende, mueva y confirme citas de forma autónoma.',
        tipo: 'video',
        urlMedia: 'https://screenpal.com',
        categoria: 'whatsapp'
      }
    ];
    this.recursosFiltrados = [...this.recursos];
  }

  filtrarPor(categoria: string) {
    this.isLoading = true;
    this.categoriaActiva = categoria;
    if (categoria === 'todos') {
      this.recursosFiltrados = [...this.recursos];
    } else {
      this.recursosFiltrados = this.recursos.filter(item => item.categoria === categoria);
    }
    this.isLoading = false;
  }

  // MODIFICADA: Ahora le pasamos autoplay=1 para el formato Modal
  transformarUrl(url: string): SafeResourceUrl {
    let urlEmbebida = url;
    if (url.includes('/watch/')) {
      urlEmbebida = url.replace('/watch/', '/player/');
      // Le clavamos el autoplay=1 para que inicie solo al abrir el modal
      urlEmbebida = `${urlEmbebida}?sideBar=0&title=0&autoplay=1`;
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(urlEmbebida);
  }

  // Lógica para abrir el Modal e inicializar el video
  abrirModalVideo(video: Recurso) {
    this.videoSeleccionado = video;
    const modalElement = document.getElementById('videoModal');
    if (modalElement) {
      this.modalInstancia = new bootstrap.Modal(modalElement);
      this.modalInstancia.show();
    }
  }

  // Crucial: Si cerramos el modal, destruimos el video seleccionado para apagar el audio de fondo
  cerrarModalVideo() {
    if (this.modalInstancia) {
      this.modalInstancia.hide();
    }
    this.videoSeleccionado = null;
  }



}
