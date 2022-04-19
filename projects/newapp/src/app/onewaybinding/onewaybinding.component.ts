import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onewaybinding',
  templateUrl: './onewaybinding.component.html',
  styleUrls: ['./onewaybinding.component.css']
})
export class OnewaybindingComponent implements OnInit {
  public product = {
    Name: 'Samsung TV',
    Price: 45000.55
  };
  public disableButton = true;
  
  public tableWidth = 300;
  public tableHeight = 100;
  
  constructor() { }

  ngOnInit(): void {
  }
  public showAlert(){
    alert('Welcome to Angular');
  }
}
