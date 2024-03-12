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

  constructor(private allProductAPI: ProductService) {
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
      debugger
    })
  }


}
