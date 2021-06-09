import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  private auth:AuthService
  title = 'meirProject';

  show: any;
  ngOnInit(){
    this.show = false
  }

  showImage(){
    this.show=true;
  }
}
