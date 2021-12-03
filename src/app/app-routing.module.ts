import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChuckNorrisJokeComponent } from './chuck-norris-joke/chuck-norris-joke.component';

const routes: Routes = [
  { path: '', redirectTo: '/chuck-jokes', pathMatch: 'full' },
  { path: 'chuck-jokes', component: ChuckNorrisJokeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
