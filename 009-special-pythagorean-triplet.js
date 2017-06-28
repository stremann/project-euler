function findPythagoreanTriplet(limit) {
    let a = 1;
    let b = a + 1;
    let c;

    while (a < limit) {
        while (b < limit && b > a) {
            c = limit - a - b;
            if (c < b) {
                break;
            }
            if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
                console.log(`a=${a}, b=${b}, c=${c}`);
                console.log(`a+b+c=${a + b + c}, a*b*c=${a * b * c}`);
                return a * b * c;
            }
            b++;
        }
        a++;
        b = a + 1;
    }
}

findPythagoreanTriplet(1000); // 31875000
findPythagoreanTriplet(2000); // 255000000
findPythagoreanTriplet(5000); // 3984375000