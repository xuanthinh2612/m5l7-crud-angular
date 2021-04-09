import {Component, OnInit} from '@angular/core';
import {IProduct} from '../iproduct';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  sub: Subscription;
  product: IProduct = {
    id: 0,
    name: '',
    description: ''
  };

  constructor(private router: Router,
              private productService: ProductService,
              private activatedRouter: ActivatedRoute
  ) {
    this.sub = this.activatedRouter.paramMap.subscribe((paraMap: ParamMap) => {
      this.product.id = +paraMap.get('id');
      this.getProductById(this.product.id);
    });
  }

  ngOnInit(): void {
  }

  private getProductById(id: number) {
   this.product =  this.productService.getProductById(id);
  }

  updateProduct() {
    this.productService.updateProduct(this.product);
    this.router.navigate(['/']);
  }
}
