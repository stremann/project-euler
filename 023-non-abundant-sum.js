function isAbundant(n) {
    const getDivisors = (n) => {
        let divisors = [];

        for (let i = 1; i < n; i++) {
            if (n % i === 0) divisors.push(i);
        }

        return divisors;
    };

    const sumOfDivisors = (n) => {
        const divisors = getDivisors(n);
        let sum = 0;

        for (let i = 0; i < divisors.length; i++) {
            sum += divisors[i];
        }

        return sum;
    };

    return sumOfDivisors(n) > n;
}

function getAbundants(limit) {
    const abundants = [];

    for (let i = 1; i <= limit; i++) {
        if (isAbundant(i)) {
            abundants.push(i);
        }
    }

    return abundants.sort((a, b) => a - b);
}

function getListFrom2Abundants(n) {
    let list = [];
    const abundants = getAbundants(n);

    for (let i = 0; i < abundants.length; i++) {
        for (let j = i; j < abundants.length; j++) {
            let numFrom2Abundants = abundants[i] + abundants[j];
            if (numFrom2Abundants > n) break;
            if (list.indexOf(numFrom2Abundants) === -1) list.push(numFrom2Abundants);
        }
    }

    return list;
}

// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers
function sumOfNot2Abundants(limit) {
    const list = getListFrom2Abundants(limit);
    let sum = 0;

    for (let i = 1; i <= limit; i++) {
        if (list.indexOf(i) === -1) {
            sum += i;
            console.log(`current sum: ${sum}`);
        }
    }

    return sum;
}

isAbundant(12); // true, because 1 + 2 + 3 + 4 + 6 = 16 > 12
getAbundants(24); // [12, 18, 20, 24]
getListFrom2Abundants(24); // [24], because the smallest this is the number that can be written as the sum of two abundant 12 + 12 = 24
sumOfNot2Abundants(24); // 276, because 276 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20 + 21 + 22 + 23

sumOfNot2Abundants(28123); // 4179871