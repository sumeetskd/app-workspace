import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mousedemo',
  templateUrl: './meousedemo.component.html',
  styleUrls: ['./meousedemo.component.css']
})
export class MeousedemoComponent {
  // public styleObj = {
  //   color:'',
  // }
  // public onMouseOver(e:any){
  //   this.styleObj = {
  //     color: e.target.id
  //   }
  // }
  // public onMouseOut(){
  //   this.styleObj = {
  //     color: 'black'
  //   }
  // }
  public offerImg = 'assets/nike-banner.jpg';
  public adImage='assets/pepsi-banner.webp';
  public Ad1(){
    this.adImage='assets/nike-banner.jpg'
  }
  public Ad2(){
    this.adImage='assets/pepsi-banner.webp';
  }
  onMouseOver(e:any){
    e.target.stop();
  }
  onMouseOut(e:any){  
    e.target.start();

  }
  onMouseDown(){
    this.offerImg = 'assets/pepsi-banner.webp';
    // When mouse is pressed
  }
  onMouseUp(){
    this.offerImg = 'assets/nike-banner.jpg';
    // Trigger when mouse click is released
  }

}
