import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CommonApiService } from 'src/app/_service/common-api.service';

@Component({
  selector: 'app-constructivist-create',
  templateUrl: './constructivist-create.component.html',
  styleUrls: ['./constructivist-create.component.scss']
})
export class ConstructivistCreateComponent {


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

    concept_mapping: new FormControl(null, [Validators.required]),
    general_objective: new FormControl('', [Validators.required]),
    approach: new FormControl('', [Validators.required]),
    method: new FormControl('', [Validators.required]),
    tlm_ict_tool: new FormControl('', [Validators.required]),
    engage: new FormGroup({
      teaching_activity: new FormControl('', [Validators.required]),
      student_activity: new FormControl('', [Validators.required]),
      tml_ict: new FormControl('', [Validators.required]),
    }),
    explore: new FormGroup({
      teaching_activity: new FormControl('', [Validators.required]),
      student_activity: new FormControl('', [Validators.required]),
      tml_ict: new FormControl('', [Validators.required]),
    }),
    explain: new FormGroup({
      teaching_activity: new FormControl('', [Validators.required]),
      student_activity: new FormControl('', [Validators.required]),
      tml_ict: new FormControl('', [Validators.required]),
    }),
    elaborate: new FormGroup({
      teaching_activity: new FormControl('', [Validators.required]),
      student_activity: new FormControl('', [Validators.required]),
      tml_ict: new FormControl('', [Validators.required]),
    }),
    evaluate: new FormGroup({
      teaching_activity: new FormControl('', [Validators.required]),
      student_activity: new FormControl('', [Validators.required]),
      tml_ict: new FormControl('', [Validators.required]),
    }),
    home_assignments: new FormControl('', [Validators.required]),
    reflection: new FormControl(''),
  });


  addFormSubmit() {
    if (this.addForm.valid) {
    
      const formData = new FormData();
      let formValue: any = this.addForm.value;
      formData.append('concept_mapping', formValue.concept_mapping),
        delete this.addForm.value.concept_mapping
      let data = {
        ...this.addForm.value,
        general_objective: this.addForm.value.general_objective?.split(','),
        date: this.dateFormat(new Date(), 'DD-MMM-YY')
      }
      formData.append('data', JSON.stringify(data))
      this.commonApi.createModelConstructivistApi(formData).subscribe({
        next: response => {
          this._snackBar.open('Successfully add new record', 'closed');
          this.addForm.reset();
          this.router.navigate(['/evaluate']);
        }, error: err => {
          console.log(err);
        }
      })
    } else {
      console.log('Something went wrong');
    }
  }



  // add concept mapping file
  fileUpload(event: any) {
    const file = event.target.files[0];
    this.addForm.patchValue({
      concept_mapping: file
    })
  }


  back(): void {
    this.location.back();
  }

  dateFormat(date: any, format: string) {
    return moment(date).format(format || "ll")
  }
}
