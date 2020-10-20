import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  productList: any;

  constructor(private orderService : OrderService ) {
  }

  ngOnInit(){
    let temp = this.orderService.getProductList();
    temp.snapshotChanges().subscribe(res => {
      this.productList = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.productList.push(a as Product);
      })
      console.log(this.productList);
    })
  }

  fetchProductList() {
    this.orderService.getProductList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

}
