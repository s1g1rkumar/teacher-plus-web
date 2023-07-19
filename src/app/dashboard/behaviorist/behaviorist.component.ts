import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { CommonApiService } from 'src/app/_service/common-api.service';

@Component({
  selector: 'app-behaviorist',
  templateUrl: './behaviorist.component.html',
  styleUrls: ['./behaviorist.component.scss']
})
export class BehavioristComponent {
  loading = false;
  error: string | null = null;
  data: any = null;
  displayedColumns: string[] = ['school', 'subject', 'topic', 'class', 'create_at', 'action'];
  page: number = 1;
  limit: number = 20;

  addIsLoading = false;
  addError: string | null = null;
  isOpenDialog: boolean = false;

  constructor(
    private commonApi: CommonApiService,
  ) { }

  dialogOpenClosed() {
    this.isOpenDialog = !this.isOpenDialog;
  }

  blockDialogBoxClosed(event: Event) {
    event.stopPropagation();
  }


  ngOnInit(): void {
    this.loading = true;
    this.error = null;
    this.commonApi.allBehavioristApi(this.page, this.limit).subscribe({
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


  paginatorFn(event: any) {
    this.page = event.pageIndex + 1;
    this.ngOnInit();
  }

}
