import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  productList: AngularFireList<any>;
  product: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { 
    this.productList=this.getProductList();
  }

  createProduct(prd: Product){
    console.log(prd);
    return this.productList.push({
      name: prd.name,
      productType: prd.productType,
      price: prd.price,
      description: prd.description,
      madeIn: prd.madeIn,
      images: prd.images
    })
  }

  getProduct(id: string){
    this.product = this.db.object('/product/'+id);
    return this.product;
  }

  getProductList(){
    this.productList=this.db.list('/product');
    return this.productList;
  }

  updateProduct(id, prd: Product){
    return this.product.update({
      name: prd.name,
      productType: prd.productType,
      price: prd.price,
      description: prd.description,
      madeIn: prd.madeIn
    })
  }
  
  deleteProduct(id: string){
    this.product = this.db.object('/product/'+id);
    this.product.remove();
  }
}
