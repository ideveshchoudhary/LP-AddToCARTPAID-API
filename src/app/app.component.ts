import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cstCartAdd: any[] = [];
  title = 'MovieRevies';
  constructor(private productService: ProductService) {
    this.productService.cartAddedSubject.subscribe(res => {

    })
  }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.productService.getSingleCstId(1).subscribe((res: any) => {
      this.cstCartAdd = res;
      debugger
    })
  }
}
