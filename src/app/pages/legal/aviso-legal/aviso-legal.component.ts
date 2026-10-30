import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aviso-legal',
  templateUrl: './aviso-legal.component.html',
  styleUrls: ['./aviso-legal.component.css']
})
export class AvisoLegalComponent implements OnInit{

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
