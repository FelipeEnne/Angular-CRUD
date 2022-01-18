import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-products-read',
  templateUrl: './products-read.component.html',
  styleUrls: ['./products-read.component.css']
})
export class ProductsReadComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<Product>;
  products: Product[] = [];
  
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
    })
  }

}
