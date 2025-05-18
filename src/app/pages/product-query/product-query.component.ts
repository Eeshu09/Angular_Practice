import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-query',
  imports: [],
  templateUrl: './product-query.component.html',
  styleUrl: './product-query.component.css'
})
export class ProductQueryComponent {

  productId:any=0;
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    this.route.queryParamMap.subscribe(param=>{
      this.productId=param.get('productId');
      console.log("query",this.productId)
    });
  }

}
