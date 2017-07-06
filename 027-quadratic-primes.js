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

function numberOfConsecutivePrimesGenerated(a, b) {
    for (let i = 0; ; i++) {
        let n = i * i + i * a + b;
        if (n < 0 || !isPrime(n)) return i;
    }
}

function find(from, to) {
    let bestNum = 0;
    let bestA = 0;
    let bestB = 0;

    for (let a = from; a <= to; a++) {
        for (let b = from; b <= to; b++) {
            let num = numberOfConsecutivePrimesGenerated(a, b);
            if (num > bestNum) {
                bestNum = num;
                bestA = a;
                bestB = b;
            }
        }
    }

    return {
        n: bestNum,
        a: bestA,
        b: bestB
    };
}

// n^2 + an + b , where |a| < 1000 and |b| ≤ 1000

find(-1000, 1000); // {n: 71, a: -61, b: 971}