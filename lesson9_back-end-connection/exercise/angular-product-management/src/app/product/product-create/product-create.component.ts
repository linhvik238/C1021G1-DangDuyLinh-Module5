import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categoryList: Category[];
  createForm: FormGroup;
  category: Category;
  product: Product;
  currentProductArray: Product[];
  constructor(private service: CategoryService, private productService: ProductService){}

  ngOnInit(): void {
    this.getAll();
    this.createForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      category: new FormControl()
    });
  }
  getAll(){
    this.service.getAll().subscribe((par) => {
      this.categoryList = par;
    });
  }
  getById(id: number){
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.categoryList.length; i ++){
      // tslint:disable-next-line:triple-equals
      if (this.categoryList[i].id == id ){
        console.log(this.categoryList[i]);
        return this.categoryList[i];
      }
    }
  }
  add() {
    this.category = this.getById(this.createForm.value.category);
    console.log(this.category);
    this.product = Object.assign({}, this.createForm.value);
    console.log(this.product);
    this.product.name = this.createForm.value.name;
    this.product.price = this.createForm.value.price;
    this.product.category = this.category;
    this.productService.saveProduct(this.product).subscribe(() => console.log('ok!'),
      (error) => console.log(error));
  }
}
