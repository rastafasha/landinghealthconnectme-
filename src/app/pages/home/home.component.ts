import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  year: number = new Date().getFullYear();

  constructor() { }
  
  ngOnInit(): void {
    window.scrollTo(0,0);
  }

 


    
}

