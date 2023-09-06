import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CsComponent } from './cs/cs.component';
import { PersonalComponent } from './personal/personal.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: '/', component: AppComponent },
  { path: 'cs', component: CsComponent },
  { path: 'personal', component: PersonalComponent },
  { path: '', component: HomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
