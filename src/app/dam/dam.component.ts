import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dam',
  templateUrl: './dam.component.html',
  styleUrls: ['./dam.component.scss']
})
export class DamComponent implements OnInit {

  form = {
    nombre:"",
    email:"",
    asunto:""
  };

  constructor() { }

  ngOnInit(): void {
  }

  enviarFormulario() {
    console.log(`Nombre ${this.form.nombre} Email ${this.form.email} Asunto ${this.form.asunto}`)
  }

}
