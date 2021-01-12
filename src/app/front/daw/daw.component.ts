import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daw',
  templateUrl: './daw.component.html',
  styleUrls: ['./daw.component.scss']
})
export class DawComponent implements OnInit {

  // form = {
  //   nombre:"",
  //   email:"",
  //   asunto:""
  // };

  constructor() { }

  ngOnInit(): void {
  }

  // enviarFormulario() {
  //   console.log(`Nombre ${this.form.nombre} Email ${this.form.email} Asunto ${this.form.asunto}`)
  // }

}
