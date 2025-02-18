import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { RegistroLandingService } from 'src/app/services/registro-landing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  year: number = new Date().getFullYear();

  public appregistroForm!: FormGroup;
  public doctor: any;
  public errors: any;
  public facebook: any;
  public instagram: any;

  email = new FormControl();
  submitted = false;
  error = null;
  username: FormControl<any>;

  
  
  constructor(
    private registrolService: RegistroLandingService,
    private fb: FormBuilder,
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


    
}

