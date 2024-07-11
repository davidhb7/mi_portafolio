import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

const routes: Routes = [
  {
    path : 'inicio',
    component: InicioComponent
  },
  {
    path:'perfil',
    component: PerfilComponent
  },
  {
    path: 'proyectos',
    component: ProyectosComponent
  },
  {
    path:'**',
    redirectTo: 'inicio'
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],


  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
