import { Component, OnInit } from '@angular/core';
import { CommonApiService } from 'src/app/_service/common-api.service';
import * as moment from "moment";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestData } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  loading = false;
  error: string | null = null;
  data: any = null;
  displayedColumns: string[] = ['name', 'email', 'contact_number', 'gender', 'created_date', 'action'];
  page: number = 1;
  limit: number = 20;

  addIsLoading = false;
  addError: string | null = null;
  isOpenDialog: boolean = false;


  constructor(
    private commonApi: CommonApiService,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.error = null;
    this.commonApi.allUsersApi(this.page, this.limit).subscribe({
      next: response => {
        this.loading = false;
        this.error = null;
        this.data = response
        console.log(response)
      }, error: err => {
        this.loading = false;
        this.error = 'Something went wrong..'
        console.log(err);
      }
    })
  }


  newUserAdd = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    contact_number: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+'), Validators.minLength(10)]),
    role: new FormControl(3, [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    gender: new FormControl(''),
    location: new FormControl(''),
    website: new FormControl(''),
    age: new FormControl(0, [Validators.min(18), Validators.max(50)])
  });


  dialogOpenClosed() {
    this.isOpenDialog = !this.isOpenDialog;
  }

  blockDialogBoxClosed(event:Event){
    event.stopPropagation();
  }


  createNewUser() {
    if (!this.newUserAdd.invalid) {
      this.addIsLoading = true;
      this.addError = null;
      console.log(this.newUserAdd.value);
      let data: RequestData = {
        email: this.newUserAdd.value.email, role: this.newUserAdd.value.role, profile: {
          name: this.newUserAdd.value.name,
          contact_number: this.newUserAdd.value.contact_number,
          gender: this.newUserAdd.value.gender,
          location: this.newUserAdd.value.location,
          website: this.newUserAdd.value.website,
          age: this.newUserAdd.value.age
        }
      }
      this.commonApi.addNewUserApi(data).subscribe({
        next: response => {
          this.addIsLoading = false;
          this.ngOnInit();
          this.dialogOpenClosed();
          this.addError = null;
          this.newUserAdd.reset();
          console.log(response);
        }, error: err => {
          this.addIsLoading = false;
          this.addError = err.error.message;
          console.log(err, 'this is error');
        }
      });



    }
  }



  dateFormat(date: string, format: string) {
    return moment(date).format(format || "ll")
  }

  paginatorFn(event: any) {
    this.page = event.pageIndex + 1;
    this.ngOnInit();
  }
}
