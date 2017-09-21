import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { DbService } from '../db.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  studentID;
  student;
  constructor(private db: DbService, private route: ActivatedRoute, private router: Router) { 
    this.subscription = route.params.subscribe(p => { this.studentID = p['id']; });

    console.log(this.studentID);
    //this.router.navigate(['home']);
  }

  ngOnInit() {
    this.student = this.db.getStudent(this.studentID);
    console.log(this.student);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
