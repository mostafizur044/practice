import {Chart} from 'chart.js'
export const url = 'http://localhost:3000/api/account';

export const account = {
    amount: '',
    description: '',
    type: 'Income'
}

export function chart(data) {
    const ctx = document.getElementById("balanceChart");
    new Chart(ctx, {
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
