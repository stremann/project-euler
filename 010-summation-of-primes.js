function isPrime(n) {
    let i = Math.floor(Math.sqrt(n));

    while (i >= 2) {
        if (n % i === 0) {
            return false;
        }
        i--;
    }

    return n > 1;
}

function sum(limit) {
    let sum = 0;

    for (let i = 0; i < limit; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

sum(10); // 17
sum(100); // 1060
sum(1000); // 76127
sum(2000000); // 142913828922