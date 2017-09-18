var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Asad",
    bankAccount: bankAccount,
    hobbies: ['violin', 'cooking']
};
myself.bankAccount.deposit(3000);
console.log(myself);
console.log(myself.bankAccount.money);
