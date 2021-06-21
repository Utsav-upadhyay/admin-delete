import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DeletearticleComponent } from './main/deletearticle/deletearticle.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {
    path : 'login',
    pathMatch: 'full',
    component : LoginComponent
  },
  {
    path : 'home',
    component : MainComponent,
    canActivate:[AuthGuardService] ,
    children: [{
      path : 'deletearticle',
      component : DeletearticleComponent
    }]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
