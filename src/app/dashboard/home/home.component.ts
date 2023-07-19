import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CookieService } from 'ngx-cookie-service';
import { CommonApiService } from 'src/app/_service/common-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = false;
  error: string | null = null;
  total_user = 0;
  userData: any;
  total_behaviorist = 0;
  behaviorist: any;
  total_constructivist = 0;
  total_experiential = 0;
  total_lesson_plan = 0;
  lesson_plans: any;

  constructor(
    private commonApi: CommonApiService,
    public cookieService: CookieService

  ) { }


  getUser() {
    // console.log(this.cookieService.get('teacher-plus-user'));
    return JSON.parse(this.cookieService.get('teacher-plus-user'));
  }
  user: any = this.getUser();


  ngOnInit(): void {
    this.loading = true;
    if(this.user.role === 1 || this.user.role === 2){
      this.allUser();
    }
    this.allBehaviorist();
    this.allConstructivist();
    this.allExperiential();
    this.allLessonPlan();
    this.loading= false;
  }


  UserDisplayedColumns: string[] = ['pic', 'name', 'email', 'contact_number', 'gender', 'created_date'];

  allUser() {
    this.commonApi.allUsersApi(1, 50).subscribe({
      next: response => {
        if (response.data.length > 0) {
          this.total_user = response.total_count[0].count;
          this.userData = response.data;
        }

      },
      error: err => {
        console.log(err, "user");
      }
    })
  }

  allBehaviorist() {
    this.commonApi.allBehavioristApi(1, 1).subscribe({
      next: response => {
        if (response.data.length > 0) {
          this.total_behaviorist = response.total_count[0].count
        }
      },
      error: err => {
        console.log(err, "behaviorist");
      }
    })
  }

  allConstructivist() {
    this.commonApi.allModelConstructivistApi(1, 1).subscribe({
      next: response => {
        if (response.data.length > 0) {
          this.total_constructivist = response.total_count[0].count
        }
      },
      error: err => {
        console.log(err, "total_constructivist");
      }
    })
  }

  allExperiential() {
    this.commonApi.allExperientialApi(1, 1).subscribe({
      next: response => {
        if (response.data.length > 0) {
          this.total_experiential = response.total_count[0].count
        }
      },
      error: err => {
        console.log(err, "total_experiential");
      }
    })
  }

  allLessonPlan() {
    this.commonApi.allLessonPlanApi(1, 10).subscribe({
      next: response => {
        if (response.data.length > 0) {

          this.total_lesson_plan = response.total_count[0].count;
          this.lesson_plans = response.data;
        }
      },
      error: err => {
        console.log(err, "total_experiential");
      }
    })
  }


  dateFormat(date: string, format: string) {
    return moment(date).format(format || "ll")
  }
}
