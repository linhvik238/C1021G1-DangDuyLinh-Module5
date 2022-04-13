import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.service.getAll().subscribe((products) => {
      this.productList = products;
    });
  }

  delete(id: number) {
    this.service.delete(id).subscribe(() => console.log('od'));
    this.getAll();
  }
}
