import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cstCartAdd: any[] = [];
  subTotal: number = 0;
  title = 'MovieRevies';

  constructor(private allProductAPI: ProductService, private router: Router) {
    this.allProductAPI.cartAddedSubject.subscribe(res => {
      this.showCstPro();

    })
  }

  ngOnInit(): void {
    this.showCstPro();
  }

  showCstPro() {
    this.allProductAPI.getSingleCstId(1).subscribe((res: any) => {
      this.cstCartAdd = res.data;
      this.cstCartAdd.forEach(element => {
        this.subTotal += element.productPrice
      });
    })
  }
  navigate() {
    this.router.navigateByUrl('product');
  }


}
