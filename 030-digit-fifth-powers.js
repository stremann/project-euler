// As stated in the problem, 1 = 1^5 is excluded.
// If a number has at least n >= 7 digits, then even if every digit is 9,
// n * 9^5 is still less than the number (which is at least 10^n) so limit is 1000000.

function sum(power, limit = 1000000) {
    let sum = 0;

    for (let i = 2; i < limit; i++) {
        const digits = i.toString().split('');
        let digitsSum = 0;

        digits.forEach(num => digitsSum += Math.pow(parseInt(num), power));

        if (digitsSum === i) {
            sum += i;
        }
    }

    return sum;
}


// 1634 = 1^4 + 6^4 + 3^4 + 4^4
// 8208 = 8^4 + 2^4 + 0^4 + 8^4
// 9474 = 9^4 + 4^4 + 7^4 + 4^4

sum(4); // 19316, because 19316 = 1634 + 8208 + 9474

sum(5); // 443839
