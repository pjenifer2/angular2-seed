import {Component} from '@angular/core';
import { Employee } from '../models/employee.model';
import { FormPoster } from '../services/form-poster.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = [];
  model = new Employee ('','',false,'','default') ;
  hasPrimaryLanguageError = false;

  constructor(private formPoster: FormPoster) {
    this.formPoster.getLanguages()
      .subscribe(
        data => this.languages = data.languages,
        err => console.log('get error: ', err)
      );

  }

  submitForm(form: NgForm) {
    console.log(this.model);
    console.log(form.value);
    //validate form
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if(this.hasPrimaryLanguageError)
      return;
    this.formPoster.postEmployeeForm(this.model)
      .subscribe(
        data => console.log('success: ', data),
        err => console.log('error: ', err)
      )
  }

  firstNameToUpperCase(value: string) {
    if (value.length > 0)
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
      else
      this.model.firstName = value;
    
  }

  lastNameToUpperCase(value: string) {
    if (value.length > 0)
      this.model.lastName = value.charAt(0).toUpperCase() + value.slice(1);
      else
      this.model.lastName = value;
    
  }

  validatePrimaryLanguage(value) {
    console.log('lang: ' + this.model.primaryLanguage)
    if (value === 'default')
      this.hasPrimaryLanguageError = true;
      else
      this.hasPrimaryLanguageError = false;
  }




}
