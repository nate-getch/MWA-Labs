import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudentsComponent } from './students/students.component';
import { DbService } from './db.service';
import { ProfileComponent } from './profile/profile.component';
import { ProfileGuard } from './profile/profile.guard';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const MY_ROUTES: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/profile/:id', component: ProfileComponent, canActivate: [ProfileGuard] },
  { path: 'error', component: ErrorpageComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentsComponent,
    ProfileComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MY_ROUTES)
  ],
  providers: [DbService, ProfileGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
