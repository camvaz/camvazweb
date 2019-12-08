
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//MAPS
import { AgmCoreModule } from '@agm/core';

// MODULOS TOASTR
import {CommonModule} from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//FORM VALIDATION
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//ROUTING
import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { VideoComponent } from './video/video.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    VideoComponent,
    AboutComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBsMJy4sS3dFOhp0R7WkjXmDnbbESROKAU'
    }),
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,  
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
