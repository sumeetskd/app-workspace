import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productscatalog',
  templateUrl: './productscatalog.component.html',
  styleUrls: ['./productscatalog.component.css']
})
export class ProductscatalogComponent {
  public products = [
    { Name: 'JBL Speaker', Price: 4500.55, Photo: 'assets/jbl.png', Category: 'Electronics' },
    { Name: 'Earpods', Price: 3000.44, Photo: 'assets/earpod.png', Category: 'Electronics'},
    { Name: 'Nike Casuals', Price: 6000.44, Photo: 'assets/nike-shoes.png', Category: 'Footwear'},
    { Name: 'Lee Cooper Boot', Price: 2000.44, Photo: 'assets/leecooper.png', Category: 'Footwear'},
    { Name: 'Shirt', Price: 1000.44, Photo: 'assets/shirt.png', Category: 'Fashion'},
    { Name: 'Jeans', Price: 4000.44, Photo: 'assets/jeans.png', Category: 'Fashion'}
  ]; 
  public electronicCount = this.products.filter(x=>x.Category=='Electronics').length;
  public footwearCount = this.products.filter(x=>x.Category=='Footwear').length;
  public fashionCount = this.products.filter(x=>x.Category=='Fashion').length;

  public categoryName = 'All';

  public onCategoryChange(event:any){
    this.categoryName = event;
    // alert(event.target.allcount)
    // alert(event);
  }
}
