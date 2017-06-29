// This problem is impractical to solve by brute forcing
// since adding sequential numbers together is a much to inefficient way to obtain the triangle number.
// The function takes the form of a quadratic we can write it in the form y=ax^2+bx+c where x is the triangle number and y is its value.
// Full formula will be y=(1/2)x^2+(1/2)x and if we replace x with n and simplify, we can say the triangle number is equal to (n(n+1))/2.

function findHighlyDivisibleTriangularNumber(limit) {
    let number = 0;
    let n = 1; // n from formula (n(n+1))/2

    while (number === 0) {
        let divisors = 0;
        let trinum = (n * (n + 1)) / 2;

        for (let i = 1; i <= Math.sqrt(trinum); i++) {
            if (trinum % i === 0) { // finds multiples, if a multiple is found and it is less than the
                divisors += 2;      // square root then there is a another one greater than the root
            }
        }

        if (divisors > limit) {
            number = trinum;
            break;
        }

        n += 1;
        console.log(`trinum=${trinum}, divisors=${divisors}, n=${n}`);
    }

    return number;
}

// 1: 1
// 3: 1,3
// 6: 1,2,3,6
// 10: 1,2,5,10
// 15: 1,3,5,15
// 21: 1,3,7,21
// 28: 1,2,4,7,14,28
// We can see that 28 is the first triangle number to have over five divisors.

findHighlyDivisibleTriangularNumber(5); // 28;
findHighlyDivisibleTriangularNumber(500); // 76576500;