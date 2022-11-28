import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdoptionsComponent } from './adoptions/adoptions.component';
import { AppComponent } from './app.component';
import { RescuersComponent } from './rescuers/rescuers.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'adoptions',
    component: AdoptionsComponent
  },
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'rescuers',
    component: RescuersComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
