import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-productfilter',
  templateUrl: './productfilter.component.html',
  styleUrls: ['./productfilter.component.css']
})
export class ProductfilterComponent {

  @Input() public allcount = 0;
  @Input() public electronicscount = 0;
  @Input() public footwearcount = 0;
  @Input() public fashioncount = 0;
  
  public selectedCategoryName = 'All';

  @Output() emitCount:EventEmitter<string> = new EventEmitter<string>();
  public onSelectedCategoryChange(){
    // this.emitCount.emit(this.selectedCategoryName);
    this.emitCount.emit(this.selectedCategoryName);

  }
}
