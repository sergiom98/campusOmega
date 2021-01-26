import { Component, OnInit } from '@angular/core';

import { Curso } from '../../curso';
import { TiendaService } from '../../services/tienda.service';
@Component({
  selector: 'app-pagina-cursos',
  templateUrl: './pagina-cursos.component.html',
  styleUrls: ['./pagina-cursos.component.scss']
})
export class PaginaCursosComponent implements OnInit {
  mostrarmodal = false;
  PrecioTotal!: number;
  FacturaTotal!: number;
  TotalIva!: number;
  cesta: Curso[] = [];
  cursoo: Curso[] = [];


  constructor(private tiendaService: TiendaService) {
    if(localStorage.getItem('cesta')){
      this.recuperarCurso();
    }
  }
  // constructor(private tiendaService: TiendaService, PrecioTotal: number, FacturaTotal: number, TotalIva: number) {
  //   this.FacturaTotal = FacturaTotal;
  //   this.PrecioTotal = PrecioTotal;
  //   this.TotalIva = TotalIva;
  //   if(localStorage.getItem('cesta')){
  //     this.recuperarCurso();
  //   }
  // }
  ngOnInit(): void{
    this.cursoo=this.tiendaService.getAllCursos();
  }



  recuperarCurso(){
    this.cesta= JSON.parse(localStorage.getItem('cesta')!);
  }

  recibir(objeto:Curso){
    this.cesta.push(objeto);
    localStorage.setItem("cesta", JSON.stringify(this.cesta));
  }
  abrirModal(){
    this.mostrarmodal=true;
    this.PrecioTotal=this.precioTotal();
    this.TotalIva=this.iva();
    this.FacturaTotal=this.factura();
  }

  precioTotal(){
    let total=0;
    for(let i=0;i<this.cesta.length;i++){
      total += this.cesta[i].precio;
    }
    return total;
  }

  borrarCurso(index: number){
    this.cesta.splice(index, 1);
    this.PrecioTotal=this.precioTotal();
    this.TotalIva=this.iva();
    this.FacturaTotal=this.factura();
    localStorage.setItem("cesta", JSON.stringify(this.cesta));
  }

  iva(){
    let facturaIva=0;
    facturaIva=this.precioTotal()*0.21;
    return facturaIva;
  }

  factura(){
    let factura=0;
    factura = this.precioTotal()+this.iva();
    return factura;
  }

}



 /* ANTIGUO
  cursos= [
    {
      id:1,
      imagen: "/assets/img/angular.png",
      titulo: "CURSO ANGULAR 10",
      descripcion: "Desarrollo web",
      link:"+ más información",
      precio: 50,
      tiempo: 40
    },
    {
      id:2,
      imagen: "/assets/img/php-2.png",
      titulo: "CURSO PHP 8",
      descripcion: "Back-end",
      link:"+ más información ",
      precio: 30,
      tiempo: 15
    },
    {
      id:3,
      imagen: "/assets/img/spring.png",
      titulo: "CURSO JAVA SPRING FRAMEWORK",
      descripcion: "Desarrollo web",
      link:"+ más información",
      precio: 40,
      tiempo: 100
    },
    {
      id:4,
      imagen: "/assets/img/wordpress.png",
      titulo: "CURSO WORDPRESS",
      descripcion: "Desarrollo web",
      link:"+ más información",
      precio: 25,
      tiempo: 45
    },
    {
      id:5,
      imagen: "/assets/img/js.png",
      titulo: "CURSO JAVASCRIPT",
      descripcion: "Desarrollo web",
      link:"+ más información",
      precio: 60,
      tiempo: 20
    },
    {
      id:6,
      imagen: "/assets/img/jquery.jpg",
      titulo: "CURSO JQUERY",
      descripcion: "Desarrollo web",
      link:"+ más información",
      precio: 70,
      tiempo: 116
    },
    {
      id:7,
      imagen: "/assets/img/react.png",
      titulo: "CURSO REACT",
      descripcion: "Desarrollo web",
      link:"+ más información",
      precio: 25,
      tiempo: 45
    }
  ]

  abrirCurso(id: number) {
    console.log(id);
  };
  */
