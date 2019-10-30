import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  public now: Date = new Date();
  constructor() { 
    setInterval(() => {
      this.now = new Date();
    }, 1);
  }

  ngOnInit() {
  }

}
