import { Component } from '@angular/core';
import { User } from '../../Interface/user';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../Service/User/user.service';
@Component({
  selector: 'app-add-user',
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  user:User={
    name:'',
    email:'',
    password:'',
    companyName:'',
    department:'',
    salary:0
    

  }
  constructor(private userService:UserService){}
  addUser(){
    debugger
    this.userService.addUser(this.user).subscribe((data:any)=>{
      console.log(data);
    })
  //  console.log(this.user);
  }
}
