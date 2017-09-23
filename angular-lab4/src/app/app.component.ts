import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'My form';
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private myService: HttpService) {
    this.myForm = this.fb.group({
      'user': fb.group({
        'name': ['', [Validators.required]],
        'email': ['', [Validators.required, Validators.email]],
        'post': ['testing', [Validators.minLength(10)]]
      })
    });

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  submitForm() {
    console.log(this.myForm.value);
  }

  getData() {
    let post = "";
    let name = "";
    let email = "";
    this.myService.getUserDetail().subscribe(
      (r) => {
              //console.log(JSON.stringify(r));
              name = r.json().name;
              email = r.json().email;
            },
      (error) => console.log(error),
      () => {
              console.log("completed");
              (<FormGroup>this.myForm.controls['user']).controls['name'].setValue(name);
              (<FormGroup>this.myForm.controls['user']).controls['email'].setValue(email);
            }
    );

    this.myService.getUserPosts().subscribe(
      (r) => {
                //console.log(JSON.stringify(r));
                post = r.json()[0].body;
              },
      (error) => console.log(error),
      () => {
              console.log("completed");
              (<FormGroup>this.myForm.controls['user']).controls['post'].setValue(post);
            }
    );

    console.log(this.myForm);
  }


}
