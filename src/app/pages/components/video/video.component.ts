import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css']
})
export class VideoComponent {
    @Input() appregistroForm
    @Input() guardarPerfil
    constructor () {}
}