import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { WelcomeComponent } from './modules/welcome/welcome.component';


const routes: Routes = [

  { path: '', component: WelcomeComponent },
  // { path: '**', redirectTo: ''},
  {
    path: 'app',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./modules/review/review.module').then(m => m.ReviewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
