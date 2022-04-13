import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IProduct} from '../../model/IProduct';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  products: IProduct[] = [];
  editForm: FormGroup;
  id: number;

  constructor(private productService: ProductService,private router: Router,private  activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const product = this.getProduct(this.id);
      this.editForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      });
    });
  }

  ngOnInit(): void {

  }
  editProduct(id: number) {
    const productNew = this.editForm.value;
    this.productService.edit(id, productNew);
    this.router.navigateByUrl('');
  }

  private getProduct(id: number) {
    return this.productService.findById(id);
  }
}
