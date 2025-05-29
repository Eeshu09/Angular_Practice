import { CurrencyPipe, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { InputdecoratorsComponent } from '../../component/inputdecorators/inputdecorators.component';
import { ButtonComponent } from '../../component/button/button.component';

@Component({
  selector: 'app-pipe',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,CurrencyPipe,InputdecoratorsComponent,ButtonComponent],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  name:string="eeshu";
  price=100;
  date=new Date();
  amount=100;

  fullName:string="Kalash Tyagi";
  buttonName:string="Submit";


}
