import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  collection = [];

  constructor() { 
    for(let i = 1; i <= 10654654; i++){
      this.collection.push(`Angular ${i}.0`);
    }
  }

  ngOnInit() {
  }

}
