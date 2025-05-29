import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputdecorators',
  imports: [],
  templateUrl: './inputdecorators.component.html',
  styleUrl: './inputdecorators.component.css'
})
export class InputdecoratorsComponent {
 @Input()name:string | undefined
}
