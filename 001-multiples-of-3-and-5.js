function sum(n) {
    let sum = 0;

    for (let i = 0; i < n; i++) {

        if ((i % 3) === 0 || (i % 5) === 0) {
            sum += i;
        }

    }

    return sum;
}

sum(10); // 23
sum(1000); // 233168