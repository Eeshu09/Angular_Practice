import { CurrencyPipe, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,CurrencyPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  name:string="eeshu";
  price=100;
  date=new Date();
  amount=100;
}
