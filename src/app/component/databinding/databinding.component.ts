import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  name:string="Eeshu";
  age:number=23;
  lastName:string="Pratap";

  FirstName:string="Sunny";
  plsHolder:string="Enter your FirstName"

getUser():void{
  alert(this.name)
}
getUser1(msg:string):void{
  alert(msg)
}

}
