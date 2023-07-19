import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { CommonApiService } from 'src/app/_service/common-api.service';
import { RequestLessonPlan } from "./lesson-plan";
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-lesson-plan',
  templateUrl: './lesson-plan.component.html',
  styleUrls: ['./lesson-plan.component.scss']
})
export class LessonPlanComponent implements OnInit {
  loading = false;
  error: string | null = null;
  data: any = null;
  displayedColumns: string[] = ['title', 'description', 'type', 'created_date', 'action'];
  page: number = 1;
  limit: number = 20;


  addIsLoading = false;
  addError: string | null = null;
  isOpenDialog: boolean = false;

  constructor(
    private commonApi: CommonApiService,
    public cookieService: CookieService

  ) { }

  getUser() {
    // console.log(this.cookieService.get('teacher-plus-user'));
    return JSON.parse(this.cookieService.get('teacher-plus-user'));
  }
  user: any = this.getUser();
  dialogOpenClosed() {
    this.isOpenDialog = !this.isOpenDialog;
  }

  blockDialogBoxClosed(event: Event) {
    event.stopPropagation();
  }


  ngOnInit(): void {
    this.loading = true;
    this.error = null;
    this.commonApi.allLessonPlanApi(this.page, this.limit).subscribe({
      next: response => {
        this.loading = false;
        this.error = null;
        this.data = response
      }, error: err => {
        this.loading = false;
        this.error = 'Something went wrong..'
        console.log(err);
      }
    })
  }

  dateFormat(date: string, format: string) {
    return moment(date).format(format || "ll")
  }



  newLessonPlanAdd = new FormGroup({
    title: new FormControl('', [Validators.required]),
    resource_type: new FormControl('', [Validators.required]),
    resource: new FormControl('', [Validators.required]),
    expiry_date: new FormControl(''),
    description: new FormControl('')
  });


  newLessonPlanAddSubmit() {
    if (!this.newLessonPlanAdd.invalid || this.user.role === 1 || this.user.role === 2) {
      let request = {
        title: this.newLessonPlanAdd.value.title,
        resource_type: this.newLessonPlanAdd.value.resource_type,
        resource: this.newLessonPlanAdd.value.resource,
        expiry_date: this.newLessonPlanAdd.value.expiry_date,
        description: this.newLessonPlanAdd.value.description
      };
      this.commonApi.createNewLessonPlan(request).subscribe({
        next: (response) => {
          this.addIsLoading = false;
          this.ngOnInit();
          this.dialogOpenClosed();
          this.addError = null;
          this.newLessonPlanAdd.reset();
        }, error: err => {
          this.addIsLoading = false;
          this.addError = err.error.message;
          console.log(err, 'this is error');
        }
      })
    } else {
      console.log('Something went wrong..')
    }
  }


  paginatorFn(event: any) {
    this.page = event.pageIndex + 1;
    this.ngOnInit();
  }
}
