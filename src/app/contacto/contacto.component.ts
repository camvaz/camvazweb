import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  validatingForm: FormGroup;

  constructor(private router:Router,
              private toastr:ToastrService
             ) { }

  ngOnInit() {
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
