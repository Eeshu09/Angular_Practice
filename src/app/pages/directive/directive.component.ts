import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  flag:boolean=true;

  isStructural:boolean=false;

name:any []=["sunny","eeshu"]

isLogin(){
  this.flag=!this.flag;
  this.isStructural=!this.isStructural
}
}
