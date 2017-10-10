//defining the object
const piggyBank = {
    'quarters' : 10,
    'dimes' : 10,
    'nickels' : 10,
    'pennies' : 10
}
// console.log(piggyBank);

// for in loop to convert and restore all the coin values to dollar values
// for (let i in piggyBank) {
//     if (i === 'quarters') {
//         piggyBank[i] *= 0.25;
//     } else if ( i === 'dimes') {
//         piggyBank[i] *= 0.1;
//     } else if ( i === 'nickels') {
//         piggyBank[i] *= 0.05;
//     } else {
//         piggyBank[i] *= 0.01;
//     }
// }

//trying out a switch statement to do what the if else statment does above
for (let i in piggyBank)  {
    switch ( i )  {
        case 'quarters' :
            piggyBank[i] *= 0.25;
            break;
        case 'dimes' :
            piggyBank[i] *= 0.1;
            break;
        case 'nickels' :
            piggyBank[i] *= 0.05;
            break;
        case 'pennies' :
            piggyBank[i] *= 0.01;
            break;
    }    
}

// console.log(piggyBank);

// for in loop to add all the values in piggyBank
let dollarAmount = 0;
for (let i in piggyBank) {
     dollarAmount += piggyBank[i];
 }

 console.log("The dollar amount in our piggy bank is $" + dollarAmount);

