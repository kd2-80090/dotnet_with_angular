import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
  imports: [FormsModule, NgIf],
  standalone: true
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm!: NgForm;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack() {
    this.router.navigate(['/']);
  }

  // onSubmit(Form: NgForm) {
  onSubmit() {
    console.log("Congrats, form submitted...")
    console.log(this.addPropertyForm)
  }
}
