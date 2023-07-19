import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class PermissionsService {

  constructor(
    private cookieService: CookieService,
    public router: Router,
  ) { }

  canActivate(): boolean {
    if (this.cookieService.get('teacher-plus-user')) {
      return true
    } else {
      this.router.navigate(['/login']);
      return false
    }
  }
}

export const authGuardGuard: CanActivateFn = (route, state) => {
  return inject(PermissionsService).canActivate();
};
