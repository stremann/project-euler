function isAmicable(n) {
    const m = sumOfDivisors(n);

    return m !== n && sumOfDivisors(m) === n;
}

function sumOfDivisors(n) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }

    return sum;
}


function sumOfAmicableNumbers(n) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        if (isAmicable(i)) {
            console.log(`amicable number: ${i}`);
            sum += i;
        }
    }

    return sum;
}

sumOfAmicableNumbers(284); // 220
sumOfAmicableNumbers(10000); // 31626