import { Component, Input, OnInit } from '@angular/core';
import {TypeService} from '../../../services/type-service.service';
import { Type } from 'src/app/models/type';
import { PaisService } from 'src/app/services/pais.service';
import { Pais } from 'src/app/models/pais';

@Component({
    selector: 'app-formulario-registro',
    templateUrl: './formulario-registro.component.html',
    styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
    @Input() appregistroForm
    @Input() guardarPerfil;
    public types :Type;
    public paises :Pais;
    public error: string;

    constructor (
        public typeServiceService: TypeService,
        public paisService: PaisService,
    ) {}

    ngOnInit(): void {
        this.getTypesList();
        this.getPaisesList();
    }
    

    getTypesList(): void {
        this.typeServiceService.getTypes().subscribe(
          (res:any) =>{
            this.types = res.types;
            console.log(res);
            error => this.error = error;
          }
        );
      }
    getPaisesList(): void {
        this.paisService.getPaises().subscribe(
          (res:any) =>{
            this.paises = res.paises;
            console.log(res);
            error => this.error = error;
          }
        );
      }
}