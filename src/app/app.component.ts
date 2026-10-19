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
    // Se ejecuta una sola vez al cargar la aplicación
    inject();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Envía el evento de vista de página cada vez que cambie la URL
      fbq('track', 'PageView');
    });
  }

  
}
