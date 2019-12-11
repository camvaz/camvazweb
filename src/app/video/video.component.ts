import { Component, OnInit, HostListener, Input } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  mobile: boolean;
  public map: any = { lat:19.0420883, lng: -98.1973028 };
  icons: string[];
  // vid: HTMLVideoElement;

  constructor(private router:Router) { 

    this.mobile = window.innerWidth <= 1419 ? true : false;
  }

  ngOnInit() {

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
        
    this.router.navigate(['/index']);

    this.mobile = window.innerWidth <= 1419 ? true : false;
    
    // $("#myVideo").play();
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mobile = window.innerWidth <= 1419 ? true : false;
    $(".col")
  }

}
