function sum(n) {
    let sum = 0;
    let x = 1;  // Represents the current Fibonacci number being processed
    let y = 2;  // Represents the next Fibonacci number in the sequence

    while (x <= n) {
        if (x % 2 === 0) {
            sum += x;
        }

        let z = x + y;
        x = y;
        y = z;
    }

    return sum;
}

sum(4); // 2
sum(400); // 188
sum(4000000); // 4613732