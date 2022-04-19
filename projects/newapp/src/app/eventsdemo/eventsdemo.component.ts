import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventsdemo',
  templateUrl: './eventsdemo.component.html',
  styleUrls: ['./eventsdemo.component.css']
})
export class EventsdemoComponent {
  public msg:any;
  public txtInput:any;

  public onFocus(){
    this.msg = "Enter in Block Letters";
  }
  public onBlur(){
    this.msg = "";
    this.txtInput = this.txtInput.toUpperCase();
  }
  public msgColor = {
    "color" : "green",
  }

  public onCut(){
    this.msg = "Message cut to Clipboard";
  }
  public onCopy(){
    this.msg = "Message copied to Clipboard";
  }
  public onPaste(){
    this.msg = "Message pasted from Clipboard"
  }
  public onSubmit(){
    alert('Form Submitted..');
  }
  public onChange(e:any){
    if(e.target.value=="submit"){
      this.onSubmit();
    }else{
      alert('Form Reset...');
    }
    // this.onSubmit();
  }

  public onMultipleSubmit(e:any){
    // alert('Form Submitted..');

    for(var property in e.target.elements){
      console.log(property+':'+e.target.elements[property].id);
      // alert(e.target.elements[property].id);
    }
    // alert(e.target.elements[0].id)
  }

}
