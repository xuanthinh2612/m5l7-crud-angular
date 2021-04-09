import {Injectable} from '@angular/core';
import {IProduct} from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: Array<IProduct> = [
    {
      id: 1,
      name: 'SP1',
      description: 'MT1'
    },
    {
      id: 2,
      name: 'SP2',
      description: 'MT2'
    },
    {
      id: 3,
      name: 'SP3',
      description: 'MT3'
    }
  ];

  getAllProduct(): Array<IProduct> {
    return this.productList;
  }

  getProductById(id: number): IProduct {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == id) {
        return this.productList[i];
      }
    }
    return null;
  }

  addNewProduct(product: IProduct) {
    let id = 0;
    for (let i = 0; i < this.productList.length; i++) {
      let max = 0;
      if (this.productList[i].id >= max) {
        max = this.productList[i].id;
        id = max + 1;
      }
    }
    product.id = id;
    this.productList.push(product);
  }

  updateProduct(p: IProduct): void {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == p.id) {
        this.productList[i] = p;
      }
    }

  }

  deleteProduct(id: number) {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == id) {
        this.productList.splice(i, 1);

      }
    }
  }

  constructor() {
  }
}
