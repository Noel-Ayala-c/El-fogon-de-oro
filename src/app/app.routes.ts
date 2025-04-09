import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartaComponent } from './carta/carta.component';
import { MesasComponent } from './mesas/mesas.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { PostreComponent } from './postre/postre.component';
import { BoletaComponent } from './boleta/boleta.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'carta' , component: CartaComponent},
    { path: 'mesas' , component: MesasComponent},
    { path: 'bebidas' , component: BebidasComponent},
    { path: 'postre' , component: PostreComponent},
    { path: 'boleta' , component: BoletaComponent}
];
