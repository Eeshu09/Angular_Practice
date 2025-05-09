import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule,RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product:any;

 constructor(private http:HttpClient,private router:Router){

 }
 ngOnInit(){
  this.http.get("https://fakestoreapi.com/products").subscribe((data:any)=>{
    console.log("product",data);
    this.product=data;
  })
 }
 moreDetails(id:number){
    this.router.navigate(['productDetails',id])
 }
  
}
