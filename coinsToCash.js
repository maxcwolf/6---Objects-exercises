const piggyBank = {
    'quarters' : 10,
    'dimes' : 10,
    'nickels' : 10,
    'pennies' : 10
}
console.log(piggyBank);

// for in loop to convert and restore all the coin values to dollar values
for (let i in piggyBank) {
    if (i === 'quarters') {
        piggyBank[i] *= 0.25;
    } else if ( i === 'dimes') {
        piggyBank[i] *= 0.1;
    } else if ( i === 'nickels') {
        piggyBank[i] *= 0.05;
    } else {
        piggyBank[i] *= 0.01;
    }
}

console.log(piggyBank);

// for in loop to add all the values in piggyBank
let dollarAmount = 0;
for (let i in piggyBank) {
     dollarAmount += piggyBank[i];
 }

 console.log(dollarAmount);

