import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CommonApiService } from 'src/app/_service/common-api.service';

@Component({
  selector: 'app-experiential-create',
  templateUrl: './experiential-create.component.html',
  styleUrls: ['./experiential-create.component.scss']
})
export class ExperientialCreateComponent {




  constructor(
    private location: Location,
    public commonApi: CommonApiService,
    private _snackBar: MatSnackBar,
    public router: Router,
  ) { }


  addForm = new FormGroup({
    school: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    book: new FormControl('', [Validators.required]),
    classNumber: new FormControl(null),
    subject: new FormControl('', [Validators.required]),
    topic: new FormControl('', [Validators.required]),
    apply: new FormControl('', [Validators.required]),
    conceptFormation: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    experienceEngageExplore: new FormControl('', [Validators.required]),
    extendedActivity: new FormControl('', [Validators.required]),
    learningContext: new FormControl('', [Validators.required]),
    learningOutcome: new FormControl('', [Validators.required]),
    learningResourcesICTTool: new FormControl('', [Validators.required]),
    prerequisiteKnowledge: new FormControl('', [Validators.required]),
    reflectShare: new FormControl('', [Validators.required]),
    teachingLearningProcess: new FormControl('', [Validators.required])
  });

  addFormSubmit() {
    if (!this.addForm.invalid) {
      let data = {
        ...this.addForm.value,
        classNumber: Number(this.addForm.value.classNumber),
        learningOutcome: this.addForm.value.learningOutcome?.split(','),
        content: this.addForm.value.content?.split(','),
        date: this.dateFormat(new Date(), 'DD-MMM-YY')
      }
      if (data) {
        this.commonApi.createExperientialApi(data).subscribe({
          next: response => {
            this._snackBar.open('Successfully add new record', 'closed');
            this.addForm.reset();
            this.router.navigate(['/evaluate']);
          }, error: err => {
            console.log(err);
          }
        })
      }
    } else {
      console.log('Something went wrong');
    }
  }


  dateFormat(date: any, format: string) {
    return moment(date).format(format || "ll")
  }

  back(): void {
    this.location.back();
  }
}
