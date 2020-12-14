import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-fotter',
  templateUrl: './contact-fotter.component.html',
  styleUrls: ['./contact-fotter.component.scss']
})
export class ContactFotterComponent implements OnInit {

  formulario = {
    nombre:"",
    email:"",
    asunto:"",
    mensaje:""
  };

  constructor() { }

  ngOnInit(): void {
  }

  enviarFormulario() {
    console.log(`Nombre ${this.formulario.nombre} Email ${this.formulario.email} Asunto ${this.formulario.asunto} Mensaje ${this.formulario.mensaje}`)
  }

}
