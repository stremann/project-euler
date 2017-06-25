function findSmallestEvenlyDivisibleNumber(from, to) {
    let num = 0;
    let min = from;
    let max = to;
    let isFound = false;

    while(!isFound) {
        num += max;

        // find while num is divisible by min and min is less than max
        while(num % min === 0 && min <= max) {
            // if min is equal to max we've found the answer then
            if (min === max) {
                isFound = true;
            }

            min++;
        }

        // reset min if num isn't divisible by min
        min = from;
    }

    return num;
}

findSmallestEvenlyDivisibleNumber(1, 2); // 2
findSmallestEvenlyDivisibleNumber(1, 3); // 6
findSmallestEvenlyDivisibleNumber(1, 20); // 232792560