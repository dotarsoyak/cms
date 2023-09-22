import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductService } from './services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  products: IProduct[] | undefined;
  sub!: Subscription;

  constructor(private productService: ProductService){}
  
  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => this.products = products
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
