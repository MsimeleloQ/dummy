import { Router } from '@angular/router';
import { Product } from './../models/product.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  ngOnInit(): void {
  }

  addProduct() {
    this._httpClient.post('http://localhost:3000/products', this.product).subscribe(result => {
      alert("Product Added Successfully");
      console.log(result);
      this._router.navigate(['/products']);
    }, (error) => {
      console.log(error);
    })
  }

}
