import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { IfdemoComponent } from './ifdemo/ifdemo.component';
import { SwitchdemoComponent } from './switchdemo/switchdemo.component';
import { FordemoComponent } from './fordemo/fordemo.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { LikesdemoComponent } from './likesdemo/likesdemo.component';
import { TrackdemoComponent } from './trackdemo/trackdemo.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StyledemoComponent } from './styledemo/styledemo.component';
import { AngularcssComponent } from './angularcss/angularcss.component';
import { KeybindingComponent } from './keybinding/keybinding.component';
import { MeousedemoComponent } from './meousedemo/meousedemo.component';
import { EventsdemoComponent } from './eventsdemo/eventsdemo.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    OnewaybindingComponent,
    TwowaybindingComponent,
    IfdemoComponent,
    SwitchdemoComponent,
    FordemoComponent,
    ShoppingcartComponent,
    LikesdemoComponent,
    TrackdemoComponent,
    ConditionsComponent,
    ClassbindingComponent,
    StyledemoComponent,
    AngularcssComponent,
    KeybindingComponent,
    MeousedemoComponent,
    EventsdemoComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [EventsdemoComponent]
})
export class AppModule { }
