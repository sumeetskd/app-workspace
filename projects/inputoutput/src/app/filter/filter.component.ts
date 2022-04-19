import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  public selectedCategoryName = 'All'
  @Input() public allCount = 0;
  @Input() public electronicCount = 0;
  @Input() public footwearCount = 0;
  @Input() public fashionCount = 0;

  @Output() public EmitCategoryName: EventEmitter<string> = new EventEmitter<string>();
// EventEmitter will emit the value<string>(in this case)

  public onCategoryChanged(){
    this.EmitCategoryName.emit(this.selectedCategoryName);
  }
}
