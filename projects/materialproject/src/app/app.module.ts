import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingdemoComponent } from './scrollingdemo/scrollingdemo.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'
import {MatAutocompleteModule} from '@angular/material/autocomplete'


import { FormfieldComponent } from './formfield/formfield.component';
import { MaterialautocompleteComponent } from './materialautocomplete/materialautocomplete.component';



@NgModule({
  declarations: [
    AppComponent,
    ScrollingdemoComponent,
    FormfieldComponent,
    MaterialautocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [MaterialautocompleteComponent]
})
export class AppModule { }
