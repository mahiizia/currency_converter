#! 
import inquirer from "inquirer";
const currency = {
    // base currency
    USD: 1,
    PKR: 277,
    CNY: 7.23,
    INR: 83.30,
    KWD: 0.31,
    MYR: 4.71,
    TRY: 32.0,
    AED: 3.67,
    JPY: 151.61
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "PKR", "CNY", "INR", "KWD", "MYR", "TRY", "AED", "JPY"]
    },
    {
        name: "To",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "PKR", "CNY", "INR", "KWD", "MYR", "TRY", "AED", "JPY"]
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number"
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.To];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
// console.log(fromAmount);
// console.log(toAmount);
// // console.log(amount);
// console.log(baseAmount);
