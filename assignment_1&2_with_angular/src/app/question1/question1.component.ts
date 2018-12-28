import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Balance } from './model';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.scss']
})
export class Question1Component implements OnInit {

  form: FormGroup;
  accounts: Account[] = [];
  balance: Balance;

  constructor(
    private fb: FormBuilder,
    private service: QuestionService
  ) { 
    this.getAccounts();
  }

  ngOnInit() {
    this.balance = new Balance();
    this.service.chart(Object.values(this.balance));
    this.form = this.fb.group({
      amount: [null, Validators.required],
      description: null,
      type: 'Income'
    });
  }

  getAccounts () {
    this.service.getAccount().subscribe(
      res => {
        this.accounts = res;
        this.balance = this.service.formateData(this.accounts);
        this.service.chart(Object.values(this.balance));
      }
    );
  }

  onSubmit () {
    this.service.saveAccount(this.form.getRawValue())
    .then(
      res => {
        this.accounts.push(res);
        this.balance = this.service.formateData(this.accounts);
        this.service.chart(Object.values(this.balance));
        this.form.reset();
        this.form.controls['type'].setValue('Income');
      }
    )
    .catch(
      err => console.log(err)
    );
  }

}
