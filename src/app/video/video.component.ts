import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  mobile: boolean;
  constructor() { }

  ngOnInit() {

    this.mobile = window.innerWidth <= 768 ? true : false;
    
    // $("#myVideo").play();
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mobile = window.innerWidth <= 768 ? true : false;
  }

}
