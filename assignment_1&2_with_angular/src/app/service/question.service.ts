import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'
import { of } from 'rxjs';
import { Chart } from 'chart.js'
import { Balance, Account } from '../question1/model';
 

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private url: string = 'http://localhost:3000/api/account';

  constructor(
    private http: HttpClient
  ) { }

  getAccount() {
    return this.http.get(this.url).pipe(map (res => res['accounts']), catchError (err => of ([])));
  }

  saveAccount(data) {
    return this.http.post(this.url, data).pipe(map (res => res['account'])).toPromise();
  }

  formateData (data) {
    const balance = new Balance();
    balance.income = data.filter( f => f['type'] === 'Income').reduce( (a,b) => a += b['amount'], 0);
    balance.cost = data.filter( f => f['type'] === 'Cost').reduce( (a,b) => a += b['amount'], 0);
    balance.current = balance.income - balance.cost;
    return balance;
  }

  chart(data?) {
    new Chart('balanceChart', {
        type: 'bar',
        data: {
            labels: ["Balance", "Income", "Cost"],
            datasets: [
            {
                label: "In Taka",
                backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
                data: data || [0,0,0]
            }
            ]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Basic Accounting Page'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });


}
