import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();

  }

  createForm(){
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(8)]],
      tipo: ['', [Validators.required]],
      data: ['', [Validators.required]],

    });
  }

  Salvar(){
    console.log(this.form.value);
    this.createForm();
  }
}
