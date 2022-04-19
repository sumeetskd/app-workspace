import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrls: ['./fordemo.component.css']
})
export class FordemoComponent {

  public categories = ['Electronic','Footwear','Fashion'];
  public menuData = [
    {Category: 'Electronic', Products:['Samsung TV', 'JBL Speaker']},
    {Category:'Footwear', Products: ['Nike Casuals', 'Adidas']}
  ];
}
