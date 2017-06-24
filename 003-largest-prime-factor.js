function findLargestPrimeFactor(n) {
    let i = 2;
    let p = n;

    while (p > i) {
        if (p % i === 0) {
            p = p / i;
        }

        i++;
    }

    return i;
}

findLargestPrimeFactor(10); // 5
findLargestPrimeFactor(14); // 7
findLargestPrimeFactor(600851475143); // 6857