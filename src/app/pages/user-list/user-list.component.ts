import { Component } from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';
import { UserService } from '../../Service/User/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [FooterComponent,CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  Users:any;

  constructor(private userService:UserService){

  }
  ngOnInit(){
    this.userService.getUser().subscribe((data:any)=>{
      console.log(data);
      this.Users=data;
    })
  }
  deleteUser(id:any){
    this.userService.deleteUser(id).subscribe((data:any)=>{
      console.log("data",data);
    })
  }
  addUser(){
    
  }
}
