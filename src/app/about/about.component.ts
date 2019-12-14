import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() childMessage:string;
  data:any;
  oldMessage: string;

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

  }

  langdata(){
    this.http.post('https://us-central1-camvazweb.cloudfunctions.net/widgets/lang',
                    {object:{lang:this.childMessage,component:'portfolio'}})
                      .subscribe(res => {
                        this.data = res; 
                      })
  }

}
