import { Component, Input } from '@angular/core';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import { SubcripcionService } from 'src/app/services/subcripcion.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-newsletter',
    templateUrl: './newsletter.component.html',
    styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent  {
    // @Input() registerForm
    // @Input() crearUsuario
    public errors: any;
    public registerForm = this.fb.group({
        id: [''],
        email: [ '', [Validators.required, Validators.email] ],
    
      });
    email = new FormControl();
      submitted = false;
      error = null;
    constructor (
        private fb: FormBuilder,
         private subcripcionService: SubcripcionService,
    ) {}

    crearUsuario(){
      
        this.subcripcionService.crearSubscripcion(this.registerForm.value).subscribe(
          (resp:any) =>{
            Swal.fire('Registrado!', `Gracias por Seguirnos!`, 'success');
          },(error) => {
            Swal.fire('Error', error.error.msg, 'error');
            this.errors = error.error;
          }
        );
    
      }

    
}