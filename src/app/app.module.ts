import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { PaginaCursosComponent } from './components/pagina-cursos/pagina-cursos.component';
import { ContactFotterComponent } from './components/shared/contact-fotter/contact-fotter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CajaCursoComponent } from './components/caja-curso/caja-curso.component';
import { DawComponent } from './components/daw/daw.component';
import { DamComponent } from './components/dam/dam.component';
import { CursoDetalleComponent } from './components/curso-detalle/curso-detalle.component';
import { CarritoComponent } from './components/shared/carrito/carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    PaginaCursosComponent,
    ContactFotterComponent,
    NavbarComponent,
    CajaCursoComponent,
    DawComponent,
    DamComponent,
    CursoDetalleComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
