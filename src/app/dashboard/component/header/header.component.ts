import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CommonApiService } from 'src/app/_service/common-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: string = 'N/A';
  profilePic: string = "";
  roleDetails: string[] = ['Super admin', 'Admin', 'Teacher'];
  role: string = "";



  constructor(
    private commonApi: CommonApiService,
    public router: Router,
    private cookieService: CookieService,

  ) { }


  getUser() {
    return JSON.parse(this.cookieService.get('teacher-plus-user'));
  }

  user: any = this.getUser();


  ngOnInit() {
    this.commonApi.getProfile().subscribe({
      next: response => {
        this.userName = response.userDetails.profile.name;
        this.profilePic = response.userDetails.profile.picture;
        this.role = this.roleDetails[Number(response.userDetails.role) - 1];
      },
      error: err => {
        console.log(err);
      }
    })
  }

  logoutSubmit() {
    this.commonApi.logoutApi().subscribe({
      next: response => {
        this.cookieService.deleteAll();
        this.router.navigate(['/login']);
      },
      error: err => {
        console.log(err)
      }
    })
  }


}
