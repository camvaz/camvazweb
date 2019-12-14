import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() childMessage:string;
  data: any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.post('https://us-central1-camvazweb.cloudfunctions.net/widgets/lang',
                    {object:{lang:this.childMessage,component:'footer'}})
                      .subscribe(res => {
                        this.data = res; 
                      })
  }

}
