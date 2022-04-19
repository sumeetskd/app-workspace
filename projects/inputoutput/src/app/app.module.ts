import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { HtmlMarqueInputOutputComponent } from './html-marque-input-output/html-marque-input-output.component';
import { ProductlistsComponent } from './productlists/productlists.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { ProductscatalogComponent } from './productscatalog/productscatalog.component';
import { ProductfilterComponent } from './productfilter/productfilter.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    HtmlMarqueInputOutputComponent,
    ProductlistsComponent,
    FilterComponent,
    ProductscatalogComponent,
    ProductfilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ProductscatalogComponent]
})
export class AppModule { }
