import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input() height: string = '100%';
  @Input() width: string = '100%';
  @Input() diameter: number = 40;
  @Input() color: string = 'primary';
}
