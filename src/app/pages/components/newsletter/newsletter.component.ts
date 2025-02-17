import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-newsletter',
    templateUrl: './newsletter.component.html',
    styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {
    @Input() registerForm
    @Input() crearUsuario
    constructor () {}
}