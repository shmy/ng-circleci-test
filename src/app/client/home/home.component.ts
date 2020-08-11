import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  });
  ngOnInit(): void {
  }
  handleSubmit(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      this.profileForm.updateValueAndValidity();
      return;
    }
    console.log(this.profileForm.value);
  }
  handleSetValue(): void {
    this.profileForm.patchValue({firstName: '123'});
  }
}
