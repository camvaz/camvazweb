import { Component, OnInit, HostListener, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  mobile: boolean;
  public map: any = { lat: 51.678418, lng: 7.809007 };
  icons: string[];
  vid: HTMLVideoElement;

  constructor() { }

  ngOnInit() {
    this.vid = <HTMLVideoElement> document.getElementById("myVideo");
    this.vid.play();
    this.icons =["logos:firebase",
                 "logos:angular-icon",
                 "logos:nodejs",
                 "logos:typescript-icon",
                 "logos:java",
                 "logos:mongodb",
                 "logos:mysql",
                 "logos:c-plusplus",
                 "logos:c",
                 "logos:scala",
                 "logos:postgresql",
                 "logos:python",
                 "logos:php",
                 "logos:linux-tux",
                 "logos:figma"
                ];


    this.mobile = window.innerWidth <= 768 ? true : false;
    
    // $("#myVideo").play();
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mobile = window.innerWidth <= 768 ? true : false;
  }

}
