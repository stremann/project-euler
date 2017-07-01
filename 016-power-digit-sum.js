// In JavaScript, one has at most 53 bits for integers

import bigInt from 'big-integer';

function sumOfDigits(digit, power) {
    const number = bigInt(digit).pow(power);
    let sum = 0;


    for (let i = 0; i < number.toString().length; i++) {
        sum += parseInt(number.toString()[i]);
    }

    return sum;
}

sumOfDigits(2, 2); // 4
sumOfDigits(2, 3); // 8
sumOfDigits(2, 1000); // 1366
sumOfDigits(2, 10000); // 13561
sumOfDigits(2, 100000); // 135178