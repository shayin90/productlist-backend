import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent {

  id!: number;
  
  products = [
    {productId: 101, productName: 'Lenovo Laptop'},
    {productId: 102, productName: 'Asus Laptop'},
    {productId: 103, productName: 'HP Laptop'},
    {productId: 104, productName: 'Acer Laptop'}
  ]
  selectedProduct!: any;
  constructor(private route:ActivatedRoute) {
    console.log('constructor called');
    //this.id = 1;
    this.id = this.route.snapshot.params["id"];
    console.log('Id',this.id);

    //Filter the product by id
    this.selectedProduct=this.products.find(obj=>obj.productId==this.id)
  }
}
