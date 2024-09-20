import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  // products = [
  //   {productId: 101, productName: 'Lenovo Laptop'},
  //   {productId: 102, productName: 'Asus Laptop'},
  //   {productId: 103, productName: 'HP Laptop'}
  // ]

  products!:any[];

  constructor(private productservice:ProductsService) {
    
    console.log('ProductListComponent');
    
  }
  ngOnInit(): void
   {
    console.log('init');
    //this.products=this.productservice.getProducts();
    this.productservice.getProducts().then((res:any)=>{
      this.products=res.data;
    })
    console.log(this.products);
  }
}
