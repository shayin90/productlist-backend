import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { AddProductComponent } from './products/add-product/add-product.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path: 'products', component:ProductListComponent},
    {path: 'viewproduct/:id',component:ViewProductComponent},
    {path:'addproducts',component:AddProductComponent},
    {path:'',redirectTo:'/home', pathMatch:'full'}

];
