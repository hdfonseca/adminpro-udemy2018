import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


const appRoutes: Routes = [
   {
     path: '',
     component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  // cualquier  ruta con caracter vacio redirecciona al dashboard

    ] },
   // esta ruta se crea para la pagina principal, creando 2 segmentos de la app
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
   { path: '**', component: NopagefoundComponent }  // cualquier otra ruta que no este definida, redirecciona a la pagina en blanco
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true });
// forRoot es para el arreglo proncipal de rutas, se utiliza forChild para rutas secundatrias
