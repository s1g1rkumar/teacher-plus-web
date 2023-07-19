import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CommonApiService } from 'src/app/_service/common-api.service';

@Component({
  selector: 'app-behaviorist-create',
  templateUrl: './behaviorist-create.component.html',
  styleUrls: ['./behaviorist-create.component.scss']
})
export class BehavioristCreateComponent {
  message: string | null = null;
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
    pre_reading: new FormControl('', [Validators.required]),
    general_objective: new FormControl('', [Validators.required]),
    learning_objective: new FormControl('', [Validators.required]),
    testing_previous: new FormGroup({
      teacher_activity: new FormControl('', [Validators.required]),
      expected_student_activity: new FormControl('', [Validators.required]),
    }),
    listening_comprehension: new FormGroup({
      teacher_activity: new FormControl('', [Validators.required]),
      student_activity: new FormControl('', [Validators.required]),
      learner_outcome: new FormControl('', [Validators.required]),
    }),
    aloud_reading: new FormGroup({
      teacher_activity: new FormControl('', [Validators.required]),
      student_activity: new FormControl('', [Validators.required]),
      learner_outcome: new FormControl('', [Validators.required]),
    }),
    silent_reading: new FormGroup({
      teacher_activity: new FormControl('', [Validators.required]),
      student_activity: new FormControl('', [Validators.required]),
      learner_outcome: new FormControl('', [Validators.required]),
    }),
    word_exposition: new FormGroup({
      teacher_activity: new FormControl('', [Validators.required]),
      student_activity: new FormControl('', [Validators.required]),
      learner_outcome: new FormControl('', [Validators.required]),
    }),
  });






  addFormSubmit() {
    if (!this.addForm.invalid) {
      this.message = null;
      let data = {
        ...this.addForm.value,
        classNumber: Number(this.addForm.value.classNumber),
        general_objective: this.addForm.value.general_objective?.split(','),
        learning_objective: this.addForm.value.learning_objective?.split(','),
        date: this.dateFormat(new Date(), 'DD-MMM-YY')
      }
      if (data) {
        this.commonApi.createBehavioristApi(data).subscribe({
          next: response => {
            this._snackBar.open('Successfully add new record', 'closed');
            this.message = response.message;
            this.addForm.reset();
            this.router.navigate(['/evaluate']);
          }, error: err => {
            console.log(err);
          }
        })
      }
    } else {
      console.log('Something went wrong...')
    }
  }




  dateFormat(date: any, format: string) {
    return moment(date).format(format || "ll")
  }

  back(): void {
    this.location.back();
  }
}
