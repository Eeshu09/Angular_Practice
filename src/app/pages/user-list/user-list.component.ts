import { Component } from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';
import { UserService } from '../../Service/User/user.service';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-user-list',
  imports: [FooterComponent,CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  Users:any;
  fakeUser:any[]=[];

  constructor(private userService:UserService){

  }

  ngOnInit(){

//Call Api With the Help of Observable

    // this.userService.getFakeUser().subscribe({
    //   next:(data)=>
    //     {
    //       this.fakeUser=data;
    //       console.log("FakeUser",this.fakeUser);
    //     },
    //   error:(err)=>console.log("error",err)
    // });

//How to Use Filter


this.userService.getFakeUser()
  .pipe(
    map(users => users.filter(user => user.id > 5))
  )
  .subscribe((filtered) => {
    this.fakeUser = filtered,
    console.log(this.fakeUser);
  });

//How to Use  Map

// this.userService.getFakeUser().pipe(map(users=>users.map(u=>({...u,name:u.name.toUpperCase()})))).subscribe({
//   next:(data)=>{
//     this.fakeUser=data,
//     console.log("filterUser",this.fakeUser);
//   },
//   error:err=>console.log(err)
// });


//Handle Api Response with next or error 


// this.userService.getUser().subscribe({
//   next:(data)=>{
//     console.log('data',data);
//     this.Users=data.data;

//   },error:(err)=>{
//     console.log(err);
//     alert(err.message);
//   }
// })
    
  }
  deleteUser(id:any){
    this.userService.deleteUser(id).subscribe((data:any)=>{
      console.log("data",data);
    })
  }
  addUser(){
    
  }
}
