import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { PaginaCursosComponent } from './components/pagina-cursos/pagina-cursos.component';
import { ContactFotterComponent } from './components/shared/contact-fotter/contact-fotter.component';
import { DawComponent } from './components/daw/daw.component';
import { DamComponent } from './components/dam/dam.component';
import { CursoDetalleComponent } from './components/curso-detalle/curso-detalle.component';

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
