import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CommonApiService } from 'src/app/_service/common-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loading: boolean = false;
  error: string | null = null;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(
    private commonApi: CommonApiService,
    private cookieService: CookieService,
    public router: Router,
  ) { }

  loginSubmit() {
    if (!this.loginForm.invalid) {
      this.loading = true;
      this.error = null;
      this.commonApi.loginApi(this.loginForm.value.email as string, this.loginForm.value.password as string).subscribe({
        next: (response: any) => {
          this.loading = false;
          if (response.status === 200) {
            this.error = null;
            this.cookieService.set('teacher-plus-user', JSON.stringify(response.user), 1);
            console.log(response);
            this.router.navigate(['/home']);
          } else {
            this.error = response.message;
          }
        },
        error: (err: any) => {
          this.loading = false;
          this.error = 'Something went wrong...';
          console.log(err, "this is an error")
        }
      }
      )
    } else {
      console.log('Something went wrong');
    }
  }
}
