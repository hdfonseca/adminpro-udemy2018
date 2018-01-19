import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const appRoutes: Routes = [
  /* {    Estas rutas son las que se pasan como hijas en un archivo independiente
          que debe quedar en la carpeta proincilar del grupo de componentes asociado
     path: '',
     component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  // cualquier  ruta con caracter vacio redirecciona al dashboard

    ] },*/
   // esta ruta se crea para la pagina principal, creando 2 segmentos de la app
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
   { path: '**', component: NopagefoundComponent }  // cualquier otra ruta que no este definida, redirecciona a la pagina en blanco
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true });
// forRoot es para el arreglo proncipal de rutas, se utiliza forChild para rutas secundatrias
