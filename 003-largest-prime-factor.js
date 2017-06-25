function findLargestPrimeFactor(to) {
    let i = 2;
    let num = to;

    while (num > i) {
        if (num % i === 0) {
            num = num / i;
        }

        i++;
    }

    return i;
}

findLargestPrimeFactor(10); // 5
findLargestPrimeFactor(14); // 7
findLargestPrimeFactor(600851475143); // 6857