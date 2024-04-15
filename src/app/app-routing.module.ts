import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { DirectiveComponent } from './components/directive/directive.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'apropos', component: AProposComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
