function isPrime(value) {
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return value > 1;
}


function findNthPrime(n) {
    const primes = [];
    let prime = 2;

    while (primes.length < n) {
        if (isPrime(prime)) {
            primes.push(prime);
        }
        prime++;
    }

    return primes.pop();
}

findNthPrime(1); // 2
findNthPrime(2); // 3
findNthPrime(10001); // 104743