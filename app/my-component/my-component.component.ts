import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  myDate : Date = new Date();
  num : number = 50;
  word : string = "Tammy";
  

  constructor() { }

  ngOnInit(): void {
  }

}
