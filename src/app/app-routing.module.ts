import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaPrincipalComponent } from './front/pagina-principal/pagina-principal.component';
import { PaginaCursosComponent } from './front/pagina-cursos/pagina-cursos.component';
import { ContactFotterComponent } from './shared/contact-fotter/contact-fotter.component';
import { DawComponent } from './daw/daw.component';
import { DamComponent } from './dam/dam.component';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';

const routes: Routes = [
  {path: '', component: PaginaPrincipalComponent},
  {path: 'cursos', component: PaginaCursosComponent},
  {path: 'daw', component: DawComponent},
  {path: 'dam', component: DamComponent},
  {path: 'cursos/:id',component:CursoDetalleComponent},
  {path: 'cursos/:id/:id',   redirectTo: '/cursos/:id', pathMatch: 'full'}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
