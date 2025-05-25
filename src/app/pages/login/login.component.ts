import { Component } from '@angular/core';
import { loginUser } from '../../Interface/loginUser';
import { LoginserviceService } from '../../Service/Login/loginservice.service';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user:loginUser={
    firstName:'',
    lastName:'',
    age:null,
    email:'',
    location:'',
    gender:''
    
  }
  constructor(private loginUser:LoginserviceService,private route:Router){}
    OnSubmit(){
      console.log(this.user);
      this.loginUser.addUser(this.user);
      this.route.navigate(['product'])
    }

}
