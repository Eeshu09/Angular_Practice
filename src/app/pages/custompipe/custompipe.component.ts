import { Component } from '@angular/core';
import { CustompipesPipe } from '../../pipes/custompipes.pipe';

@Component({
  selector: 'app-custompipe',
  imports: [CustompipesPipe],
  templateUrl: './custompipe.component.html',
  styleUrl: './custompipe.component.css'
})
export class CustompipeComponent {
  amout=5;

}
