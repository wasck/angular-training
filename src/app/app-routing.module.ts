import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChuckNorrisJokesComponent } from './chuck-norris-joke/chuck-norris-jokes.component';

const routes: Routes = [
  { path: '', redirectTo: '/chuck-jokes', pathMatch: 'full' },
  { path: 'chuck-jokes', component: ChuckNorrisJokesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
