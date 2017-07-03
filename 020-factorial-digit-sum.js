// In JavaScript, one has at most 53 bits for integers

import bigInt from 'big-integer';

function calcFactorial(num) {
    let factorial = bigInt(num);

    for (let i = num - 1; i > 0; i--) {
        factorial = factorial.multiply(i);
    }

    return factorial;
}


function findFactorialDigitsSum(num) {
    let sum = 0;
    const factorial = calcFactorial(num);

    for (let i = 0; i < factorial.toString().length; i++) {
        sum += parseInt(factorial.toString()[i])
    }

    return sum;
}

findFactorialDigitsSum(10); // 27 because 10! = 3628800 and 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27
findFactorialDigitsSum(100); // 648
findFactorialDigitsSum(1000); // 10539