import { Component, OnInit, ElementRef } from '@angular/core';

import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { User } from 'src/app/api/user';
import { Role } from 'src/app/api/role';
import { ADMIN_ROUTES, CLIENT_ROUTES } from '../routes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  user  : User
  constructor(location: Location,  private element: ElementRef, private router: Router) {
    this.location = location;
    this.user = JSON.parse(localStorage.getItem("user")) as User
  }

  ngOnInit() {
    if(this.user.role == Role.CLIENT){
      this.listTitles = CLIENT_ROUTES.filter(listTitle => listTitle);
    }else{
      this.listTitles = ADMIN_ROUTES.filter(listTitle => listTitle);
    }
    console.log(this.listTitles)
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path()).substring(0,5);
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }
    console.log(titlee)
    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Home';
  }

}
