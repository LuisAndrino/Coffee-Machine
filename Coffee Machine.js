// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input');

let on = true;
let water = 400;
let money = 550;
let milk = 540;
let coffeeBeans = 120;
let cups = 9;

while(on) {



    console.log("Write action (buy, fill, take, remaining, exit):")
    let action = input();
    if (action == "remaining") {
        console.log(`The coffee machine has:
${water} ml of water
${milk} ml of milk
${coffeeBeans} g of coffee beans
${cups} disposable cups
${money} of money`);
    } else if(action == "buy"){
        console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:");
        let selection = Number(input());
        if(selection == 1){
            let testW = water / 250;
            let testC = coffeeBeans / 16;
            let testCups = cups / 1;
            let findMin = Math.trunc(Math.min(testW, testCups, testC));
            let min = Math.min(testW, testCups, testC);
            let notEnough = "";
            if(testW == min){
                notEnough = "water";
            } else if(testC == min){
                notEnough = "coffee beans";
            } else if(testCups == min){
                notEnough = "cups";
            }

            if(findMin >= 1){
                console.log("I have enough resources, making you a coffee!");
                water = water - 250;
                coffeeBeans = coffeeBeans - 16;
                money = money + 4;
                cups = cups - 1;
            } else {
                console.log(`Sorry not enough ${notEnough}`);
            }

        } else if(selection == 2){
            let testW = water / 350;
            let testC = coffeeBeans / 16;
            let testM = milk / 75;
            let testCups = cups / 1;
            let findMin = Math.trunc(Math.min(testW, testCups, testC, testM));
            let min = Math.min(testW, testCups, testC, testM);
            let notEnough = "";
            if(testW == min){
                notEnough = "water";
            } else if(testC == min){
                notEnough = "coffee beans";
            } else if(testCups == min){
                notEnough = "cups";
            } else if(testM == min){
                notEnough = "milk";
            }

            if(findMin >= 1){
                console.log("I have enough resources, making you a coffee!");
                water = water - 350;
                milk = milk - 75;
                coffeeBeans = coffeeBeans - 20;
                money = money + 7;
                cups = cups - 1;
            } else {
                console.log(`Sorry not enough ${notEnough}`);
            }

        } else if(selection == 3){
            let testW = water / 200;
            let testC = coffeeBeans / 12;
            let testM = milk / 100;
            let testCups = cups / 1;
            let findMin = Math.trunc(Math.min(testW, testCups, testC, testM));
            let min = Math.min(testW, testCups, testC, testM);
            let notEnough = "";
            if(testW == min){
                notEnough = "water";
            } else if(testC == min){
                notEnough = "coffee beans";
            } else if(testCups == min){
                notEnough = "cups";
            } else if(testM == min){
                notEnough = "milk";
            }

            if(findMin >= 1) {
                water = water - 200;
                coffeeBeans = coffeeBeans - 12;
                money = money + 6;
                milk = milk - 100;
                cups = cups - 1;
            } else {
                console.log(`Sorry not enough ${notEnough}`);
            }

        } else if (selection == "back"){
            break;
        }
    } else if (action == "take"){
        console.log(`I gave you ${money}`);
        money = 0;
    } else if (action == "fill"){
        water = water + Number(input("Write how many ml of water you want to add:"));
        milk = milk + Number(input("Write how many ml of milk you want to add:"));
        coffeeBeans = coffeeBeans + Number(input("Write how many grams of coffee you want to add:"));
        cups = cups + Number(input("Write how many disposable cups you want to add:"));
    } else if (action == "exit"){
        on = false;
    }

}

Console.log("Thanks for using this program uwu");
