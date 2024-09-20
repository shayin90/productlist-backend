import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
 productId!:number;
 productName!:string;
  constructor(private productservice:ProductsService){
  console.log('AddProductComponent');
  }
  onSubmit(){
    alert('button clicked');
    console.log('productId.thid.productId')
    console.log('productname.this.productName')
  this.productservice.addProducts(this.productId,this.productName).then((res:any)=>{
    console.log('added product');
    alert('add product');
    window.location.href="/products";
  })
  
}

}
