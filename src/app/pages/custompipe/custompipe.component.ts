import { Component } from '@angular/core';
import { CustompipesPipe } from '../../pipes/custompipes.pipe';
import { OutputdecoratorComponent } from '../../component/outputdecorator/outputdecorator.component';

@Component({
  selector: 'app-custompipe',
  imports: [CustompipesPipe,OutputdecoratorComponent],
  templateUrl: './custompipe.component.html',
  styleUrl: './custompipe.component.css'
})
export class CustompipeComponent {
  amout=5;
   Users:any;
  handleUser(user:string[]){
    console.log("users",user)
    this.Users=user;
    

  }

}
