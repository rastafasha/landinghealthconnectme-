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

  

  
  
  constructor(
    
    private fb: FormBuilder,
  ) { }
  
  ngOnInit(): void {
    window.scrollTo(0,0);
  }

 


    
}

