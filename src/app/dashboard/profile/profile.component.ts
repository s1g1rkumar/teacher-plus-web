import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CommonApiService } from 'src/app/_service/common-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  loading = false;
  error: string | null = null;
  data: any;
  roleDetails: string[] = ['Super admin', 'Admin', 'Teacher'];
  role: string = "";

  constructor(
    private commonApi: CommonApiService,
    private cookieService: CookieService,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.error = null
    this.commonApi.getProfile().subscribe({
      next: response => {
        this.loading = false;
        this.error = null;
        this.data = response.userDetails;
      },
      error: err => {
        this.loading = false;
        this.error = 'Something went wrong...';
        console.log(err);
      }
    })
  }

  roleFormat(role: number) {
    return this.roleDetails[Number(role) - 1];
  }


  profileUpdate(event: any) {
    const file: File = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('profile_pic', file, file.name);
    this.commonApi.updateProfilePicApi(formData).subscribe({
      next: res => {
        console.log(res);
      },
      error: err => {
        console.log(err);
      }
    })

  }




}
