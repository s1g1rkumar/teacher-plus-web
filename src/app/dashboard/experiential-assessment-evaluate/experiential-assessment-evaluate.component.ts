import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { CookieService } from 'ngx-cookie-service';
import { CommonApiService } from 'src/app/_service/common-api.service';

@Component({
  selector: 'app-experiential-assessment-evaluate',
  templateUrl: './experiential-assessment-evaluate.component.html',
  styleUrls: ['./experiential-assessment-evaluate.component.scss']
})
export class ExperientialAssessmentEvaluateComponent {
  loading = false;
  error: string | null = null;
  data: any = null;
  form_id: string | null = this.activatedRoute.snapshot.paramMap.get('form_id');
  panelOpenState = false;
  assessmentData = {};
  totalScore = 0;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    public commonApi: CommonApiService,
    public cookieService: CookieService

  ) { }


  getUser() {
    // console.log(this.cookieService.get('teacher-plus-user'));
    return JSON.parse(this.cookieService.get('teacher-plus-user'));
  }


  user: any = this.getUser();

  back(): void {
    this.location.back();
  }

  assessmentForm = new FormGroup({
    "Planning & Organizing Skills": new FormGroup({
      '1.1': new FormControl('', [Validators.required]),
      '1.2': new FormControl('', [Validators.required]),
      '1.3': new FormControl('', [Validators.required]),
      '1.4': new FormControl('', [Validators.required]),
      '1.5': new FormControl('', [Validators.required]),
      '1.6': new FormControl('', [Validators.required]),
      '1.7': new FormControl('', [Validators.required]),
      '1.8': new FormControl('', [Validators.required])
    }),
    'Time Management Skill': new FormGroup({
      '2.1': new FormControl('', [Validators.required]),
      '2.2': new FormControl('', [Validators.required]),
      '2.3': new FormControl('', [Validators.required]),
      '2.4': new FormControl('', [Validators.required]),
      '2.5': new FormControl('', [Validators.required]),
      '2.6': new FormControl('', [Validators.required]),
    }),
    'Language Skill': new FormGroup({
      '3.1': new FormControl('', [Validators.required]),
      '3.2': new FormControl('', [Validators.required]),
      '3.3': new FormControl('', [Validators.required]),
      '3.4': new FormControl('', [Validators.required]),
      '3.5': new FormControl('', [Validators.required]),
    }),
    'ICT Skills': new FormGroup({
      '4.1': new FormControl('', [Validators.required]),
      '4.2': new FormControl('', [Validators.required]),
      '4.3': new FormControl('', [Validators.required]),
      '4.4': new FormControl('', [Validators.required]),
    })
  });

  ngOnInit() {
    this.loading = true;
    this.error = null;
    if (this.form_id) {
      this.commonApi.getExperientialApi(this.form_id).subscribe({
        next: response => {
          this.loading = false;
          this.error = null;
          this.data = response;
          
          if (response.assessment_status) {

            this.assessmentData = response.assessment.score.reduce((group: any, arr: any) => {
              const { skill_title } = arr;
              group[skill_title] = group[skill_title] ?? [];
              group[skill_title].push(arr);
              return group
            }, {});
            this.totalScore = response.assessment.score.reduce((sum: number, obj: any) => sum + obj.remark, 0);

          }
        }, error: err => {
          this.loading = false;
          this.error = 'Something went wrong..';
          console.log(err, "Something went wrong..")
        }
      })
    } else {
      this.back()
    }
  }


  dateFormat(date: string, format: string) {
    return moment(date).format(format || "ll")
  }


  // add new assessment
  onSubmitNewAssessment() {
    if (!this.assessmentForm.invalid || this.user.role === 1 || this.user.role === 2) {
      this.loading = true;
      this.error = null;
      let data = [];
      for (const [key, value] of Object.entries(this.assessmentForm.value)) {
        for (let [key1, value1] of Object.entries(value)) {
          let skill_type: any = '';
          let remark_description;
          this.commonApi.assessmentFormDataValue.map((d) => {
            if (d.key === key) {
              let k: any = key1.split('.')[1];
              skill_type = d.value[k - 1].skill_type;
              d.value[k - 1].selectOption.map((r) => {
                if (r.remark === Number(value1)) {
                  remark_description = r.remark_description;
                }
              })
            }
          });
          data.push(
            {
              skill_title: key,
              remark: Number(value1),
              remark_description: remark_description,
              skill_type
            }
          )
        }
      }

      if (data.length > 0) {
        let request = {
          form_created_id: this.data.created_by._id,
          form_id: this.data._id,
          form_type: 'experiential',
          score: data
        }
        this.commonApi.createAssessmentApi(request).subscribe({
          next: response => {
            this.ngOnInit();
            this.loading = false;
            this.error = null;
          }, error: err => {
            this.loading = false;
            this.error = 'Something went wrong..';
            console.log(err)
          }
        })
      }
    } else {
      console.log('Something went wrong..', this.assessmentForm.invalid);
    }
  }

}
