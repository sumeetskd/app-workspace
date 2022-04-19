import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keybinding',
  templateUrl: './keybinding.component.html',
  styleUrls: ['./keybinding.component.css']
})
export class KeybindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public users = [
    {UserName: 'john'},
    {UserName: 'john12'},
    {UserName: 'john_nit'},
    {UserName: 'david'},

  ]
  public userName:any;
  public userMsg: any;

  public isValid = false;
  public isInvalid = false;

  public verfiyUserOnKeyUp(){
    for(let item of this.users){
      if(item.UserName==this.userName){
        this.userMsg="Username is already taken - Try Another"
        this.isInvalid = true;
        this.isValid = false;
        break;
      }else{
        this.userMsg = "Username is Available"
        this.isValid = true;
        this.isInvalid = false;
      }
    }
  }

  public password:any;
  public passMsg:any;
  public showCapsWarning=false;
  public VerifyPassword(e:any){
    console.log(e)
    if(e.keyCode>=65&&e.keyCode<=90){
      this.showCapsWarning = true;
    }else{
      this.showCapsWarning = false;
    }
  }
}
