import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent {
  public products = [
    { Name: 'JBL Speaker', Price: 4500.55, Photo: 'assets/jbl.png', Category: 'Electronics'},
    { Name: 'Earpods', Price: 3000.44, Photo: 'assets/earpod.png', Category: 'Electronics'},
    { Name: 'Nike Casuals', Price: 6000.44, Photo: 'assets/nike-shoes.png', Category: 'Footwear'},
    { Name: 'Lee Cooper Boot', Price: 2000.44, Photo: 'assets/leecooper.png', Category: 'Footwear'},
    { Name: 'Shirt', Price: 1000.44, Photo: 'assets/shirt.png', Category:'Fashion'},
    { Name: 'Jeans', Price: 4000.44, Photo: 'assets/jeans.png', Category: 'Fashion'}
  ];
  public categories = ['All', 'Electronics', 'Footwear', 'Fashion']
  public selectedCategoryName = 'All';

  public MenuSelection(e:any){
    this.selectedCategoryName = e.target.name;
  }
}
