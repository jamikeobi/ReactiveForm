import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ReactiveForm';

  reactiveForm: FormGroup;

  constructor() {
    this.reactiveForm = new FormGroup({});
  }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        country: new FormControl('India'),
        city: new FormControl(null, Validators.required),
        region: new FormControl(null, Validators.required),
        postal: new FormControl(null, Validators.required),
      }),
      skills: new FormArray([
        new FormControl(null,Validators.required),
        new FormControl(null,Validators.required),
        new FormControl(null,Validators.required),
      ]),
      experience: new FormArray([
       new FormGroup ({

       })

      ])
    });
  }

  get skillsControls() {
    return (this.reactiveForm.get('skills') as FormArray).controls;
  }

  addSkill() {
    (this.reactiveForm.get('skills') as FormArray).push(new FormControl(null));
  }

  removeSkill(index: number) {
    (this.reactiveForm.get('skills') as FormArray).removeAt(index);
  }

  get experienceControls() {
    return (this.reactiveForm.get('skills') as FormArray).controls;
  }

  addExperience(){
    (this.reactiveForm.get('skills') as FormArray).push(new FormControl(null));
  }

  removeExperience(index: number) {
    (this.reactiveForm.get('skills') as FormArray).removeAt(index);
  }



  onFormSubmitted() {
    console.log(this.reactiveForm.value);
  }
}
