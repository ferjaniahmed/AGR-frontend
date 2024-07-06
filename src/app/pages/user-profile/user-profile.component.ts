import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/api/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  currentUser : User

    firstName= new FormControl("");
    lastName=new FormControl("")
    email =new FormControl("")
    address= new FormControl("")
    image= new FormControl("")
    user: User
  constructor(private userService : UserService) {
    this.currentUser = JSON.parse(localStorage.getItem("user")) as unknown as User
   }

  ngOnInit() {
  }

  editProfile(){
  
    console.log(this.currentUser)
    this.user = {...this.currentUser ,
       firstName: this.firstName.value ? this.firstName.value : this.currentUser.firstName  ,
       lastName: this.lastName.value ? this.lastName.value : this.currentUser.lastName ,
       address: this.address.value  ? this.address.value : this.currentUser.address,
       email: this.email.value? this.email.value : this.currentUser.email ,
       image : this.image ? this.image.value : this.currentUser.image
      }
      console.log(this.user)
    this.userService.update(this.currentUser._id , this.user).subscribe(data => console.log(data))
    
  }

}
