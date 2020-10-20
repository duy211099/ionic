import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { OrderService } from '../../services/order.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  productForm: FormGroup;
  private products = [
    {
        name: 'carrot',
        productType: 'vegetable',
        price: 10000,
        description: 'Đà Lạt chất lượng cao',
        madeIn: 'Đà Lạt',
        images: ['https://i5.walmartimages.ca/images/Enlarge/686/686/6000198686686.jpg',],

    },
    {
        productType: 'vegetable',
        name: 'potato',
        price: 1230,
        images: ['https://api.time.com/wp-content/uploads/2020/04/Boss-Turns-Into-Potato.jpg'],
        madeIn: 'Đà Lạt',
        description: 'Đà Lạt chất lượng cao'
    },
    {
        productType: 'vegetable',
        name: 'tomato',
        price: 13120,
        images: ['https://upload.wikimedia.org/wikipedia/commons/a/a2/Tomato.jpg'],
        madeIn: 'Đà Lạt',
        description: 'Đà Lạt chất lượng cao'
    },
    {
        productType: 'vegetable',
        name: 'corn',
        price: 100,
        images: ['http://bayaderae.com/wp-content/uploads/2013/02/Corn.jpg'],
        madeIn: 'Đà Lạt',
        description: 'Đà Lạt chất lượng cao'
    },
    {
        productType: 'vegetable',
        name: 'pumpkin',
        price: 100,
        images: ['https://gamepedia.cursecdn.com/dayz_gamepedia/6/64/Pumpkin.png'],
        madeIn: 'Đà Lạt',
        description: 'Đà Lạt chất lượng cao'
    },
    {
        productType: 'fruit',
        name: 'apple',
        price: 100,
        images: ['https://mccutcheonsblog.files.wordpress.com/2011/09/red_delicious_apple.jpg'],
        madeIn: 'Đà Lạt',
        description: 'Đà Lạt chất lượng cao'
    },
    {
        productType: 'fruit',
        name: 'banana',
        price: 1230,
        images: ['https://www.pharmamirror.com/wp-content/uploads/2013/06/Banna-as-Hepatitis-Oral-Vaccine.jpg'],
        madeIn: 'Đà Lạt',
        description: 'Đà Lạt chất lượng cao'
    },
    {
        productType: 'fruit',
        name: 'watermelon',
        price: 13120,
        images: ['https://all-americaselections.org/wp-content/uploads/2019/06/Watermelon-Mambo.jpg'],
        madeIn: 'Đà Lạt',
        description: 'Đà Lạt chất lượng cao'
    },
    {
        productType: 'fruit',
        name: 'strawberry',
        price: 100,
        images: ['https://gamepedia.cursecdn.com/atlas_gamepedia_en/6/6d/Strawberry.png'],
        madeIn: 'Đà Lạt',
        description: 'Đà Lạt chất lượng cao'
    },
    {
        productType: 'fruit',
        name: 'grapes',
        price: 100,
        images: ['https://gamepedia.cursecdn.com/atlas_gamepedia_en/6/6d/Strawberry.png'],
        madeIn: 'Đà Lạt',
        description: 'Đà Lạt chất lượng cao'
    }
];

  constructor(
    private orderService:OrderService,
    private router: Router,
    private fb:FormBuilder
  ) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      name: [''],
      productType: [''],
      price: [''],
      description: [''],
      madeIn: ['']
    })
  }

  formSubmit() {
    console.log('submit');
    if (!this.productForm.valid) {
      console.log('fail');
      return false;
    } else {
      console.log(this.productForm.value);
      this.orderService.createProduct(this.productForm.value).then(res => {
        console.log('success');
        console.log(res)
        this.productForm.reset();
        this.router.navigate(['/tabs']);
      })
        .catch(error => console.log(error));
    }
  }
  post(){
    console.log('post');
    this.products.forEach(product => this.orderService.createProduct(product));
    console.log('post done');
  }
}
