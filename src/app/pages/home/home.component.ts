import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productList: any[] = [];
  cartPro: any = {
    "CartId": 0,
    "CustId": 1,
    "ProductId": 0,
    "Quantity": 0,
    "AddedDate": "2024-03-07T15:54:56.570Z"
  }
  constructor(private allProduct: ProductService) {

  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.allProduct.getAllProducts().subscribe((res: any) => {
      this.productList = res.data;
      console.log('api called', this.productList);
    })
  }

  addToCart(productids: number) {
    // debugger
    this.cartPro.ProductId = productids;
    this.allProduct.addToCart(this.cartPro).subscribe((res: any) => {
      if (res.result) {
        this.allProduct.cartAddedSubject.next(true);
      }
    })
  }
}
