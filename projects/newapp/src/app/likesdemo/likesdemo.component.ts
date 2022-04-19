import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likesdemo',
  templateUrl: './likesdemo.component.html',
  styleUrls: ['./likesdemo.component.css']
})
export class LikesdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public products = [
    { Name: 'JBL Speaker', Photo: 'assets/jbl.png', Likes: 0, Dislikes: 0 },
    { Name: 'Earpods', Photo: 'assets/earpod.png', Likes: 0, Dislikes: 0 },
    { Name: 'Nike Casuals', Photo: 'assets/nike-shoes.png', Likes: 0, Dislikes: 0 },
    { Name: 'Lee Cooper Boot', Photo: 'assets/leecooper.png', Likes: 0, Dislikes: 0 },
    { Name: 'Shirt', Photo: 'assets/shirt.png', Likes: 0, Dislikes: 0 },
    { Name: 'Jeans', Photo: 'assets/jeans.png', Likes: 0, Dislikes: 0 }
  ];
  public likeCounter(item:any){
    item.Likes++;
  }
  public dislikeCounter(item:any){
    item.Dislikes++;
  }
}
