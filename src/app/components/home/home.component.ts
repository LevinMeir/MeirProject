import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  intern = true;
  supervisor = false;

  constructor() {
    
   }

  ngOnInit(): void {
  }
  onClick(){
    this.intern=false
    this.supervisor=true
  }
  onClick1(){
    this.intern=true
    this.supervisor=false
  }

}
