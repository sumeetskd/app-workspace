import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackdemo',
  templateUrl: './trackdemo.component.html',
  styleUrls: ['./trackdemo.component.css']
})
export class TrackdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public products = [
    {ProductId: 1, Name: 'Samsung TV', Price: 45000.55},
    {ProductId: 2, Name: 'Nokia', Price: 15000.45},
    {ProductId: 3, Name: 'Jeans', Price: 1000.00}

  ];
  public productid:number=this.products.length+1;
  public productname:string='';
  public productprice=0;

  public newProduct = {
    ProductId:0,
    Name:'',
    Price:0
  };

  public addProduct(){
    this.newProduct = {
      ProductId: this.products.length+1,
      Name: this.productname,
      Price: this.productprice
    };
    this.products.push(this.newProduct);
    alert('Record Inserted');
    this.productname='';
    this.productprice=0;
  }

  public addProductUsingApi(){
    this.products = [
      {ProductId: 1, Name: 'Samsung TV', Price: 45000.55},
      {ProductId: 2, Name: 'Nokia', Price: 15000.45},
      {ProductId: 3, Name: 'Jeans', Price: 1000.00},
      {ProductId: 4, Name: 'Watch', Price: 1400.00}

    ]
  }
  public TrackChange(index:any,product:any){
    return product.ProductId;
  }
  // TrackChange() will identify if their is any change in the index
  

}
