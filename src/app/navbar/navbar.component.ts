import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  validatingForm: any;

  constructor(private router:Router,
              private toastr:ToastrService) { }

  contacto(){
    $("#contacto").show();
  }

  ngOnInit() {
    $("#contacto").hide()
    this.router.navigate(['index']);
    this.validatingForm = new FormGroup({
      email: new FormControl(null, [Validators.required,Validators.email])
    })
    // $("#myVideo").play();
  
  }
  
  get inputemail() {
    return this.validatingForm.get('email')
  }
}
