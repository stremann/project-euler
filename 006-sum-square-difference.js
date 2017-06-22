function sub(n) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 1; i <= n; i++) {
        sum1 += i;
        sum2 += i * i;
    }

    return sum1 * sum1 - sum2;
}

sub(10); // 2640
sub(100); // 25164150