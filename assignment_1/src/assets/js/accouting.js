import {chart, account, url} from './service'

export function Accounting() {
    chart();
    getData();
    let subData = account;
    let accounts = [];
    let current = 0;
    let income = 0;
    let cost = 0;

    const form = document.querySelector('form');
    const subBtn = document.querySelector('.btn-submit');
    const resetBtn = document.querySelector('.btn-reset');

    this.event = function () {
        resetBtn.addEventListener('click', () => {
            form.reset();
            subData = account;
            // console.log(subData);
        });
        
        subBtn.addEventListener('click', () => {
            for (let i = 0; i < form.length ;i++) {
                if(form.elements[i].value) {
                    subData[form.elements[i].name] = form.elements[i].value;
                }
            }
            subData.amount = +subData.amount;
            // console.log (subData);
            postData(subData);
        });
    }

    function postData(data) {
        fetch(url, {
            method: 'post',
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(data)
          })
        .then (
            res => res.json()
        )
        .then (
            json => {
                form.reset();
                subData = account;
                accounts.push(json.account);
                formatAccount();
            }
        )
        .catch (
            err => console.log(err)
        )
    }
    
    function getData () {
        const balance = document.querySelector('.current-balance');
    
        fetch(url)
        .then(
            res => res.json()
        )
        .then(
            json => {
                accounts = json.accounts;
                // console.log(accounts);
                formatAccount();
            }
        )
        .catch(
            err => console.log(err)
        )
    }
    
    function formatAccount() {
        income = accounts.filter( f => f.type === 'Income')
        .reduce( (a,b) => a += b.amount, 0);

        cost = accounts.filter( f => f.type === 'Cost')
                .reduce( (a,b) => a += b.amount, 0);

        // console.log(income, cost);

        current = income - cost;

        document.querySelector('.current-balance').innerHTML = current;

        chart([current, income, cost]);
    }

    
}