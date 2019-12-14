import { Component, OnInit, HostListener, Input } from '@angular/core';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public map: any = { lat:19.0420883, lng: -98.1973028 };
  icons: string[];
  mobile: boolean;
  oldMessage:string;
  @Input() childMessage:string;
  data:any;

  constructor(private http:HttpClient,
              private route:ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.oldMessage = this.childMessage;  
      this.childMessage = params['lang'];
    })
    
    if(this.data === undefined || this.childMessage !== this.oldMessage){
      console.log(this.data===undefined);
      console.log(this.childMessage === this.oldMessage);
      this.langdata();
    }

    this.mobile = window.innerWidth <= 1419 ? true : false;

    if(this.mobile == true ){
      $(".colcards").addClass('col-md-3');
    } else {
      $(".colcards").addClass('col-md-2');
    }

    this.icons =[
      "logos:angular-icon",
      "logos:nodejs",
      "logos:typescript-icon",
      "logos:firebase",
      "logos:aws",
      "logos:mongodb",
      "logos:mysql",
      "logos:postgresql",
      "logos:c-plusplus",
      "logos:c",
      "logos:qt",
      "logos:java",
      "logos:python",
      "logos:php",
      "logos:linux-tux",
      "logos:figma"
    ];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mobile = window.innerWidth <= 1419 ? true : false;
    if(this.mobile == true ){
      $(".colcards").removeClass('col-md-2');
      $(".colcards").addClass('col-md-3');
    } else {
      $(".colcards").removeClass('col-md-3');
      $(".colcards").addClass('col-md-2');
    }
  }

  langdata(){
    this.http.post('https://us-central1-camvazweb.cloudfunctions.net/widgets/lang',
                  {object:{lang:this.childMessage,component:'index'}})
                    .subscribe(res => {
                      this.data = res;
                    })
  }
}
