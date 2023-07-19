import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CommonApiService } from 'src/app/_service/common-api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(
    private commonApi: CommonApiService,
    public cookieService: CookieService,
    // public router: Router,
  ) { }


  getUser() {
    return JSON.parse(this.cookieService.get('teacher-plus-user'));
  }

  user: any = this.getUser();
  menus: {
    name: string, icon: string, router_link: string
  }[] = this.user.role === 1 || this.user.role === 2 ? [
    { name: 'Home', icon: 'home', router_link: '/home' },
    { name: 'User list', icon: 'person', router_link: '/users' },
    { name: 'Lesson plan', icon: 'library_books', router_link: '/lesson-plan' },
    { name: 'Evaluate', icon: 'data_exploration', router_link: '/evaluate' },
    // { name: 'Report', icon: 'summarize', router_link: '/report' },
    // { name: 'Access control', icon: 'settings', router_link: '/access-control' },
    { name: 'Profile', icon: 'badge', router_link: '/profile' },
  ] :
      [
        { name: 'Home', icon: 'home', router_link: '/home' },
        { name: 'Lesson plan', icon: 'library_books', router_link: '/lesson-plan' },
        { name: 'Evaluate', icon: 'data_exploration', router_link: '/evaluate' },
        { name: 'Profile', icon: 'badge', router_link: '/profile' },
      ]

  //   isActive(route: string): boolean {
  //     return this.router.isActive(route, true);
  //   }
}
