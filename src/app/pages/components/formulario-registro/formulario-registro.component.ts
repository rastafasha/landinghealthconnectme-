import { Component, Input, OnInit } from '@angular/core';
import { TypeService } from '../../../services/type-service.service';
import { Type } from 'src/app/models/type';
import { PaisService } from 'src/app/services/pais.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { RegistroLandingService } from 'src/app/services/registro-landing.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { Pais } from 'src/app/models/pais.model';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
  // @Input() appregistroForm
  // @Input() guardarPerfil;
  public types: Type;
  public paises: Pais;
  public error: string;

  public appregistroForm!: FormGroup;
  public doctor: any;
  public errors: any;
  public facebook: any;
  public instagram: any;

  email = new FormControl();
  submitted = false;
  username: FormControl<any>;

  constructor(
    public typeServiceService: TypeService,
    public paisService: PaisService,
    private fb: FormBuilder,
    private doctorService: DoctorService,
  ) { }

  ngOnInit(): void {
    this.getPaisesList();
    this.validarFormularioPerfil();
  }


  getPaisesList(): void {
    this.paisService.getPaises().subscribe(
      (res: any) => {
        this.paises = res.paises;
        console.log(res);
        error => this.error = error;
      }
    );
  }

  validarFormularioPerfil() {
    this.appregistroForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      ciudad: ['', Validators.required],
      pais: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      speciality: [''],
      rrss: [''],
      address: ['', Validators.required],
      dondeSeEntero: ['', Validators.required],
      terminos: ['', Validators.required],
      statusapp: ['PENDIENTE'],
    });
  }


  guardarPerfil() {
    const formData = new FormData();

    formData.append('nombre', this.appregistroForm.get('nombre')?.value);
    formData.append('apellido', this.appregistroForm.get('apellido')?.value);
    formData.append('email', this.appregistroForm.get('email')?.value);
    formData.append('speciality', this.appregistroForm.get('speciality')?.value);
    formData.append('ciudad', this.appregistroForm.get('ciudad')?.value);
    formData.append('pais', this.appregistroForm.get('pais')?.value);
    formData.append('phone', this.appregistroForm.get('phone')?.value);
    formData.append('rrss', this.appregistroForm.get('rrss')?.value);
    formData.append('address', this.appregistroForm.get('address')?.value);
    formData.append('terminos', this.appregistroForm.get('terminos')?.value);
    formData.append('dondeSeEntero', this.appregistroForm.get('dondeSeEntero')?.value);
    formData.append('statusapp', 'PENDIENTE');

    

    const id = this.appregistroForm.get('id').value;
    const data = {
      ...this.appregistroForm.value,
      status: 'PENDIENTE'
    }

    // console.log(data);
    this.doctorService.createDoctor(data).subscribe(
      (res: any) => {
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