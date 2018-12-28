export interface Account {
    amount: number;
    description: string;
    type: string;
}

export class Balance {
    current: number = 0;
    income: number = 0;
    cost: number = 0;
}