import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styledemo',
  templateUrl: './styledemo.component.html',
  styleUrls: ['./styledemo.component.css']
})
export class StyledemoComponent {
  public styleObj = {};
  
  //Ex1:-
  // public onMouseMove(e:any){
  //   this.styleObj = {
  //     'position':'fixed',
  //     'top': e.clientY+'px',
  //     'left': e.clientX+'px'
  //   }
  // }

  //Ex2:
  public bgColor:any;
  public forecolor: any;
  public align:any;

  public ApplyStyleChange(){
    this.styleObj = {
      'background-color':this.bgColor,
      'color':this.forecolor,
      'text-align': this.align,
    }
  }
}
