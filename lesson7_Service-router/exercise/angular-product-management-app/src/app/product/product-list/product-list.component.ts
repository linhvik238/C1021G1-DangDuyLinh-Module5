import { Component, OnInit } from '@angular/core';
import {IProduct} from '../../model/IProduct';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  id: number;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll();

  }

  private getAll() {
    this.products = this.productService.getAll();
  }

  delete(id) {
    this.productService.delete(id);
    this.ngOnInit();
  }
}
