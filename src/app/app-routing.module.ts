import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
 { path: 'index', component: IndexComponent },
 { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
