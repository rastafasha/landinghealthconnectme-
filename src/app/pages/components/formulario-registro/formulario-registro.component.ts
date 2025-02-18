import { Component, Input, OnInit } from '@angular/core';
import {TypeService} from '../../../services/type-service.service';
import { Type } from 'src/app/models/type';
import { PaisService } from 'src/app/services/pais.service';
import { Pais } from 'src/app/models/pais';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { RegistroLandingService } from 'src/app/services/registro-landing.service';

@Component({
    selector: 'app-formulario-registro',
    templateUrl: './formulario-registro.component.html',
    styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
    // @Input() appregistroForm
    // @Input() guardarPerfil;
    public types :Type;
    public paises :Pais;
    public error: string;

    public appregistroForm!: FormGroup;
      public doctor: any;
      public errors: any;
      public facebook: any;
      public instagram: any;
    
      email = new FormControl();
      submitted = false;
      username: FormControl<any>;

    constructor (
        public typeServiceService: TypeService,
        public paisService: PaisService,
        private fb: FormBuilder,
        private registrolService: RegistroLandingService,
    ) {}

    ngOnInit(): void {
        this.getTypesList();
        this.getPaisesList();

    this.validarFormularioPerfil();
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

      validarFormularioPerfil(){
        this.appregistroForm = this.fb.group({
          id: [''],
          nombre: ['', Validators.required],
          apellido: ['', Validators.required],
          speciality: [''],
          ciudad: ['', Validators.required],
          pais_id: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          phone: ['', Validators.required],
          facebook: [''],
          rrss: [''],
          address: ['', Validators.required],
          instagram: [''],
          type_id: [''],
          dondeSeEntero: ['', Validators.required],
          terminos: ['', Validators.required],
          status: ['PENDING'],
        });
      }
    
    
      guardarPerfil() {
        const formData = new FormData();
        
          formData.append('name', this.appregistroForm.get('name')?.value);
          formData.append('apellido', this.appregistroForm.get('apellido')?.value);
          formData.append('email', this.appregistroForm.get('email')?.value);
          formData.append('speciality', this.appregistroForm.get('speciality')?.value);
          formData.append('type_id', this.appregistroForm.get('type_id')?.value);
          formData.append('ciudad', this.appregistroForm.get('ciudad')?.value);
          formData.append('pais_id', this.appregistroForm.get('pais_id')?.value);
          formData.append('phone', this.appregistroForm.get('phone')?.value);
          formData.append('rrss', this.appregistroForm.get('rrss')?.value);
          formData.append('address', this.appregistroForm.get('address')?.value);
          formData.append('terminos', this.appregistroForm.get('terminos')?.value);
          // formData.append('instagram', this.appregistroForm.get('instagram')?.value);
          formData.append('dondeSeEntero', this.appregistroForm.get('dondeSeEntero')?.value);
          formData.append('status', 'PENDING');
          
          if(this.facebook){
            formData.append('facebook', this.appregistroForm.get('facebook')?.value);
            
          }
          if(this.instagram){
            
            formData.append('instagram', this.appregistroForm.get('instagram')?.value);
          }
      
          const id = this.appregistroForm.get('id').value;
          const data = {
            ...this.appregistroForm.value,
            status: 'PENDING'
          }
    
          // console.log(data);
          this.registrolService.createRegistroLanding(data).subscribe(
            (res:any) => {
              this.doctor = res;
                // this.router.navigateByUrl('/gracias');
                Swal.fire('Registrado!', `Gracias por Registrarte!, estaremos comunicandonos pronto`, 'success');
                this.ngOnInit();
                // location.reload();

            },
            error => this.errors = error
          );
          return false;
        }
}