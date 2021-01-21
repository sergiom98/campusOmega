import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

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
