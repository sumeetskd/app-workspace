import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent {

  public categories = ['Select a Category', 'Electronics', 'Footwear', 'Fashion'];
  public electronics = ['Select Electronics', 'JBL Speaker', 'Earpods'];
  public footwear = ['Select Footwear', 'Nike Casuals', 'Lee Cooper Boot'];
  public fashion = ['Select Fashion', 'Shirt', 'Jeans'];

  public data = [
    { Name: 'JBL Speaker', Price: 4500.55, Photo: 'assets/jbl.png' },
    { Name: 'Earpods', Price: 3000.44, Photo: 'assets/earpod.png' },
    { Name: 'Nike Casuals', Price: 6000.44, Photo: 'assets/nike-shoes.png' },
    { Name: 'Lee Cooper Boot', Price: 2000.44, Photo: 'assets/leecooper.png' },
    { Name: 'Shirt', Price: 1000.44, Photo: 'assets/shirt.png' },
    { Name: 'Jeans', Price: 4000.44, Photo: 'assets/jeans.png' }
  ];

  public products: Array<string> = [];
  public selectedCategoryName = 'Select a Category';
  public selectedProductName = 'Select a Product';
  public searchResults:any;
  public searchedProduct = {
    Name: '',
    Price: 0,
    Photo: ''
  };

  public cartItems:any = [];
  public cartItemsCount = 0;

  public showCart = false;
  public totalPrice = 0;
  
  public GetCartItemCount(){
    this.cartItemsCount = this.cartItems.length;
  }

  public onCategoryChange(){
    switch(this.selectedCategoryName){
      case 'Electronics':
       this.products = this.electronics;
       break;
     case 'Footwear':
       this.products = this.footwear;
       break;
     case 'Fashion':
       this.products = this.fashion;
       break;
     default:
       this.products = ['Select a Category'];
       break;
    }
    console.log('onCategoryChange(): ',this.products);
  }
  public onProductChange(){
    let res = this.data.filter(item=>item.Name==this.selectedProductName);
    // console.log("onProductChange:",res[0]);
    this.searchResults = res;
    this.searchedProduct = {
      Name : <string>this.searchResults[0].Name,
      Price: <number>this.searchResults[0].Price,
      Photo: <string>this.searchResults[0].Photo
    };
    // console.log("onProductChange:searchedProduct",this.searchedProduct);
  }
  public addToCartClick(){
    this.cartItems.push(this.searchedProduct);
    alert('Item Added to Cart');
    this.GetCartItemCount();
    this.TotalPriceCalculate();
  }

  public ToogleCartDisplay(){
    this.showCart=!this.showCart;
  }

  public deleteCartItem(index:number){
    let confirmDelete = confirm('Are you sure, want to delete?');
    //confirm box returns boolean value

    if(confirmDelete){
      this.cartItems.splice(index,1);
      this.GetCartItemCount();
      this.TotalPriceCalculate();

    }
  }
  public deleteAll(){
    this.cartItems.splice(0,this.cartItemsCount);
    this.GetCartItemCount();
    this.TotalPriceCalculate();

  }
  public TotalPriceCalculate(){
    let sum = 0;
    for(let i of this.cartItems){
      sum+=i.Price;
    }
    this.totalPrice = sum;
  }
}
