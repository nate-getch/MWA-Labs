import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { DbService } from '../db.service';

@Injectable()
export class ProfileGuard implements CanActivate {

  constructor(private db: DbService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): 
    Observable<boolean> | Promise<boolean> | boolean {

      if (this.db.getStudent(next.params.id)) {
        return true;
      } else {
          // redirect to error page with error source url 
          this.router.navigate(['/error'], {
            queryParams: {
              return: state.url
            }
          });
        return false;
      }

  }
}
