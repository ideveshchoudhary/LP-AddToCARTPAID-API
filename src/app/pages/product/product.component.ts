import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  cstCartAdd: any[] = [];
  subTotal: number = 0;
  constructor(private allProductAPI: ProductService) {

  }

  showCstPro() {
    this.allProductAPI.getSingleCstId(1).subscribe((res: any) => {
      this.cstCartAdd = res.data;
      this.cstCartAdd.forEach(element => {
        this.subTotal += element.productPrice
      });
    })
  }
}
