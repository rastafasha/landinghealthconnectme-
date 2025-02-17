import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DoctorService } from '../../services/doctor.service';
import { Route, Router } from '@angular/router';
import { SubcripcionService } from 'src/app/services/subcripcion.service';
import Swal from 'sweetalert2';
import { RegistroLandingService } from 'src/app/services/registro-landing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public appregistroForm!: FormGroup;
  public doctor: any;
  public errors: any;
  public facebook: any;
  public instagram: any;

  email = new FormControl();
  submitted = false;
  error = null;
  username: FormControl<any>;

  public registerForm = this.fb.group({
    id: [''],
    email: [ '', [Validators.required] ]

  });
  
  constructor(
    private doctorService: DoctorService,
    private registrolService: RegistroLandingService,
    private fb: FormBuilder,
    private router: Router,
    private subcripcionService: SubcripcionService,
  ) { }
  
  ngOnInit(): void {
    window.scrollTo(0,0);
    this.validarFormularioPerfil();
  }

  validarFormularioPerfil(){
    this.appregistroForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      speciality: [''],
      ciudad: ['', Validators.required],
      pais: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      facebook: [''],
      rrss: [''],
      address: ['', Validators.required],
      instagram: [''],
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
      formData.append('ciudad', this.appregistroForm.get('ciudad')?.value);
      formData.append('pais', this.appregistroForm.get('pais')?.value);
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
        },
        error => this.errors = error
      );
      return false;
    }


    crearUsuario(){
      
      this.subcripcionService.crearSubscripcion(this.registerForm.value).subscribe(
        resp =>{
          Swal.fire('Registrado!', `Gracias por Seguirnos!`, 'success');
          this.ngOnInit();
        },(error) => {
          Swal.fire('Error', error.error.msg, 'error');
          this.errors = error.error;
        }
      );
  
    }
}

