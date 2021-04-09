import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {IProduct} from '../iproduct';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  productList: Array<IProduct> = [];
  constructor(private productService: ProductService) {
    this.getAllProduct();
  }

  getAllProduct() {
   this.productList =  this.productService.getAllProduct();
  }

  ngOnInit(): void {
  }

  deleteProduct(id: number){
    this.productService.deleteProduct(id);
  }
}
