import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-outputdecorator',
  imports: [],
  templateUrl: './outputdecorator.component.html',
  styleUrl: './outputdecorator.component.css'
})
export class OutputdecoratorComponent {
  @Output()getUser=new EventEmitter();
users=['zzz','vvv','eeee','eeee']
// ngOnInit(){
//   this.getUser.emit(this.users);
// }
loadData(){
  this.getUser.emit(this.users);
}
}
