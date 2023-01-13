// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

console.log(`Starting to make a coffee
Grinding coffee beans
Boiling water
Mixing boiled water with crushed coffee beans
Pouring coffee into the cup
Pouring some milk into the cup
Coffee is ready!`);

let water = Number(input("Write how many ml of water the coffee machine has:"));
let milk = Number(input("Write how many ml of milk the coffee machine has:"));
let coffeeBeans = Number(input("Write how many grams of coffee beans the coffee machine has:"));

console.log("Write how many cups of coffee you will need:")
let coffee = Number(input());
water = water / 200;
milk = milk / 50;
coffeeBeans = coffeeBeans / 15;
let findMin = Math.trunc(Math.min(water, milk, coffeeBeans));

if (coffee > findMin) {
    console.log(`No, I can make only ${findMin} cups of coffee`);
} else if (coffee === findMin) {
    console.log("Yes, I can make that amount of coffee");
} else if (coffee < findMin) {
    console.log(`Yes, I can make that amount of coffee (and even ${findMin - coffee} more than that)`);
}
