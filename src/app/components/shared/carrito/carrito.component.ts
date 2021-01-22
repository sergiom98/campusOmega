import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TiendaService } from '../../../services/tienda.service';
import { Curso } from '../../../curso';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  carro: Curso | undefined;

  constructor(private router:ActivatedRoute, private tiendaService : TiendaService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params)=>{
      const id = parseInt(params.id);
      this.carro=this.tiendaService.getCurso(id);
      this.añadirCarro();
    })
  }

  añadirCarro() {

  }

}
