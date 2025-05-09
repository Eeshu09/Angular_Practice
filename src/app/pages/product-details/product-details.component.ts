import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  productId:any=0;
  productDetails:any={};

  constructor(private route:ActivatedRoute,private http:HttpClient){}
  
  ngOnInit(): void {
    this.productId=this.route.snapshot.paramMap.get('id');
    this.getProductDetails(this.productId);
    console.log(this.productId);
   // throw new Error('Method not implemented.');
  }
  getProductDetails(id:any){
const product=this.http.get(`https://fakestoreapi.com/products/${id}`).subscribe((data:any)=>{
  this.productDetails=data;
})
  }

}
