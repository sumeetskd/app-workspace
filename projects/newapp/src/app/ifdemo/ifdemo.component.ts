import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifdemo',
  templateUrl: './ifdemo.component.html',
  styleUrls: ['./ifdemo.component.css']
})
export class IfdemoComponent implements OnInit {

  public product = {
    Name: 'Nike Casuals',
    Price: 4500.50,
    Photo: 'assets/nike-shoes.png'
  };
  public showImage = false;
  public instock = false;
  public TogglePreview() {
    this.showImage = !this.showImage;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
