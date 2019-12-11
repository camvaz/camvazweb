import { Component, OnInit, Injectable } from '@angular/core';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  validatingForm: FormGroup;

  constructor(private router:Router,
              private toastr:ToastrService,
              private http:HttpClient) { }

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

  sendContactInfo(){
    console.log(this.validatingForm.valid);
    if(!this.validatingForm.valid){
      this.toastr.warning('Email invalido.','Error.');
      return;
    } else {
      let data = {
        nombre: $("#nombre").val(),
        email: $("#email").val(),
        descripcion: $("#descripcion").val()
      }
  
      $("#sendbtn").attr('disabled',true);
  
      this.http.post('https://us-central1-camvazweb.cloudfunctions.net/widgets/contacto',
                      {object:data},
                      {responseType:'text'})
               .subscribe(res => {
                this.toastr.success('Espere un mensaje en su bandeja de entrada pronto.',
                                     'Informacion enviada, gracias.')
  
                $("#sendbtn").attr('disabled',false);
               })

    }

  }
}
