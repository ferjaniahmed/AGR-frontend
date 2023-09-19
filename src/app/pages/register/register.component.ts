import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Role } from "src/app/api/role";
import { User } from "src/app/api/user";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  newUser: User = new User();
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
      address: ["", Validators.required],
      dateOfBirth: [null],
      phone: ["", Validators.required, Validators.minLength(8)],
    });
  }

  onSubmit() {
    if (this.userForm.value.password === this.userForm.value.confirmPassword) {
      this.newUser.firstName = this.userForm.value.firstName;
      this.newUser.lastName = this.userForm.value.lastName;
      this.newUser.email = this.userForm.value.email;
      this.newUser.address = this.userForm.value.address;
      this.newUser.password = this.userForm.value.password;
      this.newUser.dateOfBirth = this.userForm.value.dateOfBirth;
      this.newUser.phone = this.userForm.value.phone;
      this.newUser.role = Role.CLIENT;
    }
    this.userService
      .create(this.newUser)
      .subscribe((data) => console.log(data));
  }
}
