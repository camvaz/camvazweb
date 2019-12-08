import { Component, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'camvaz';
  contact: boolean = false;
  validatingForm:FormGroup;
  innerWidth: number;
  yaxis: number;
  botonUp: boolean;

  constructor(private router: Router){

  }
  
  ngOnInit() {
    // this.router.navigate(['index']);
    this.validatingForm = new FormGroup({
      email: new FormControl(null, [Validators.required,Validators.email])
    })
    // $("#myVideo").play();
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth <= 768){
      console.log('movil');
    }
  }
  
  // }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
      this.yaxis = window.pageYOffset;
      if(this.yaxis != 0){
        // $(".navcontainer").css('background','rgba(0,0,0,0)');
        this.botonUp = true;
        $('.navcontainer').removeClass('fadeIn')
        $(".navcontainer").addClass('fadeOut');
      } else {
        this.botonUp = false;
        $(".navcontainer").removeClass('fadeOut');
        $('.navcontainer').addClass('fadeIn')
      }
  }

  get inputemail() {
    return this.validatingForm.get('email')
  }

  contacto() {
    $(".appdim").css('opacity','0.5')
    // $("#contactcard").css('opacity','0')
    this.contact = true;
  }

  aceptarcontacto() {

  }

  cancelarcontacto() {
    $(".appdim").css('opacity','');
    $("#contactcard").addClass('fadeOutUp faster');
    setTimeout(()=>{
      this.contact = false;
    }, 1000)
  }
}
