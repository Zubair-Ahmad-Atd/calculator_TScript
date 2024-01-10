#!/usr/bin/env node
import inquirer from 'inquirer';
// npm i @digitak/esrun 
// npx esrun file.ts
let cal = await inquirer.prompt([
    {
        type: "number",
        name: "firstNumber",
        message: "Enter the first number",
    },
    {
        type: "number",
        name: "secondNumber",
        message: "Enter the second number"
    },
    {
        type: "list",
        name: "operator",
        message: "Select the operator",
        choices: ["+", "-", "*", "/", "%"]
    }
]);
console.log(cal);
if (cal.operator === "+") {
    console.log("The answer is:" + (cal.firstNumber + cal.secondNumber));
}
else if (cal.operator === "-") {
    console.log("The answer is:" + (cal.firstNumber - cal.secondNumber));
}
else if (cal.operator === "*") {
    console.log("The answer is:" + (cal.firstNumber * cal.secondNumber));
}
else if (cal.operator === "/") {
    console.log("The answer is:" + (cal.firstNumber / cal.secondNumber));
}
else if (cal.operator === "%") {
    console.log("The answer is:" + (cal.firstNumber % cal.secondNumber));
}
else {
    console.log("Select the correct operator");
}
