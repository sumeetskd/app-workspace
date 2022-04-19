import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent{
  public effects:any;

  public onBorderEffect=false;
  public onBackgroundEffect=false;
  public onTextEffect=false;

  public txtEvent:any;
  public evenStyle=false;
  public oddStyle=false;

  public onBlur(){
    if(this.txtEvent%2==0){
      this.evenStyle=true;
      this.oddStyle=false;
    }else{
      this.oddStyle=true;
      this.evenStyle=false;
    }
  }
}
