import {Component, OnInit} from '@angular/core';
import {IProduct} from '../iproduct';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  product: IProduct = {
    id: 0,
    name: '',
    description: ''
  };

  constructor(private router: Router,
              private  productService: ProductService) {
  }

  ngOnInit(): void {
  }

  createNewProduct() {
    this.productService.addNewProduct(this.product);
    this.router.navigate(['/']);
  }
}
