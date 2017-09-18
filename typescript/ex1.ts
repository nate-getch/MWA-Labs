//type bankAccountType = { money: number, deposit: (value: number) => void };
interface bankAccountInterface { 
    money: number, 
    deposit: (value: number) => void 
}

let bankAccount: bankAccountInterface = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
}

let myself: { name: String, bankAccount: bankAccountInterface, hobbies: String[] } = {
    name: "Asad",
    bankAccount: bankAccount,
    hobbies: ['violin', 'cooking']
}

myself.bankAccount.deposit(3000);
console.log(myself);
console.log(myself.bankAccount.money);