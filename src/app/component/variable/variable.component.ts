import { Component } from '@angular/core';

@Component({
  selector: 'app-variable',
  imports: [],
  templateUrl: './variable.component.html',
  styleUrl: './variable.component.css'
})
export class VariableComponent { 
  firstName:string="Eeshu";
  lastName="Pratap";
  age:number=24;
  isActive:boolean=true;

  constructor(){
    this.age=25
  }

}
