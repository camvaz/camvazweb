import { Component, OnInit, Injectable, Input } from '@angular/core';
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
  @Input() childMessage:string;
  data: any;
  datacontacto: any;

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
    this.http.post('https://us-central1-camvazweb.cloudfunctions.net/widgets/lang',
                    {object:{lang:this.childMessage,component:'navbar'}})
                      .subscribe(res => {
                        this.data = res;
                      })

    this.http.post('https://us-central1-camvazweb.cloudfunctions.net/widgets/lang',
                    {object:{lang:this.childMessage,component:'contacto'}})
                      .subscribe(res => {
                        this.datacontacto = res;
                      })
  
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

  langswitch(){
    this.childMessage = this.childMessage === 'es' ? 'en' : 'es';
  
    this.http.post('https://us-central1-camvazweb.cloudfunctions.net/widgets/lang',
                    {object:{lang:this.childMessage,component:'navbar'}})
                      .subscribe(res => {
                        this.data = res;
                      })

    this.http.post('https://us-central1-camvazweb.cloudfunctions.net/widgets/lang',
                    {object:{lang:this.childMessage,component:'contacto'}})
                      .subscribe(res => {
                        this.datacontacto = res;
                      })
  }
}
