import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ContaComponent } from './conta/conta.component';


export const routes: Routes = [
    {path:'',component:TelaInicialComponent},
    {path:'formulario',component:FormularioComponent},
    {path:'conta',component:ContaComponent}
    
];