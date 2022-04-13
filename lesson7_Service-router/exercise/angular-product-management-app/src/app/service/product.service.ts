import { Injectable } from '@angular/core';
import {IProduct} from '../model/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: IProduct[] = [{
    id: 1,
    name: 'Benelli 302S',
    price: 4800,
    description: 'New'
  }, {
    id: 2,
    name: 'Kawasaki Z800',
    price: 13000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'Kawasaki Ninja 300',
    price: 8000,
    description: '97%'
  }, {
    id: 4,
    name: 'KTM Duke 390',
    price: 8500,
    description: '98%'
  }, {
    id: 5,
    name: 'Ducati Monster 795',
    price: 18000,
    description: 'New'
  }];

  constructor() { }

  getAll() {
    return this.products;
  }
  delete(id){
    this.products.splice(id - 1, 1);
  }
  findById(id: number){
    return this.products.find(product => product.id === id);
  }
  edit(id: number, product: IProduct){
    for (const index in this.products){
      if (this.products[index].id === id){
        this.products[index] = product;
      }
    }
  }

  save(product){
    this.products.push(product);
  }
}
