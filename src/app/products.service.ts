import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    {productId: 101, productName: 'Lenovo Laptop'},
    {productId: 102, productName: 'Asus Laptop'},
    {productId: 103, productName: 'HP Laptop'},
    {productId: 104, productName: 'Acer Laptop'}
  ]

  constructor() {

   }
   getProducts(){
    //return this.products;
    const url="http://localhost:3000/products";
    return axios.get(url);
   }
   addProducts(productId:number,productName:string){
   const product= {
    "id":productId,
    "productName":productName
   
   };
   console.log(product);
   //this.products.push(product);
   const url="http://localhost:3000/products";
   return axios.post(url,product);
   }

}

