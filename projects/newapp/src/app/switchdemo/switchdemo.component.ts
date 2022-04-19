import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdemo',
  templateUrl: './switchdemo.component.html',
  styleUrls: ['./switchdemo.component.css']
})
export class SwitchdemoComponent  {

  public product={
    Name: 'Nike Casuals',
    Price: 4500.55,
    Photo: 'assets/nike-shoes.png',
    Description: 'Something about Nike Casuals..'
  }
  public selectedView = 'info';
  public views = ['info','preview','more'];
  public count = 0;
  public ChangeView(obj:any){
    this.selectedView = obj.target.name;
  }
  public NextClick(){
    if(this.count==this.views.length-1){
      return;
    }
    this.count++;
    this.selectedView = this.views[this.count];
  }
  public PrevClick(){
    if(this.count==0){
      return;
    }
    this.count--;
    this.selectedView = this.views[this.count];

  }
}
