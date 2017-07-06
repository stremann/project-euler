function getLongestUnitFractionRecurringCycle(maxNum) {
    let longestNum = 1;
    let largestCycleSize = 1;

    for (let currentNum = longestNum + 1; currentNum <= maxNum; currentNum++) {
        let cycleSize = getCycleSize(currentNum);

        if (cycleSize > largestCycleSize) {
            largestCycleSize = cycleSize;
            longestNum = currentNum;
        }
    }

    return longestNum;
}

function getCycleSize(num) {
    let numerator = 1;
    const numerators = [];
    const numeratorDigits = [];
    let digitsInSequence = 0;

    while (!digitsInSequence) {
        if (numerator === 0) {
            return 0;
        }

        //Check if the numerator is previously repeated
        for (let i = 0; i < numerators.length; i++) {
            if (numerator === numerators[i]) {

                for (let j = i; j < numerators.length; j++) {
                    digitsInSequence += numeratorDigits[j];
                }

                return digitsInSequence;
            }
        }

        //Repeat not found, update the numerators and digits
        numerators[numerators.length] = numerator;
        var digits = 1;
        while (num > numerator) {
            numerator *= 10;
            digits++;
        }
        numeratorDigits[numeratorDigits.length] = digits;

        //get the next numerator
        numerator = numerator % num;
    }
}

// 1/2 = 0.5
// 1/3 = 0.(3)
// 1/4 = 0.25
// 1/5 = 0.2
// 1/6 = 0.1(6)
// 1/7 = 0.(142857)
// 1/8 = 0.125
// 1/9 = 0.(1)
// 1/10 = 0.1

getLongestUnitFractionRecurringCycle(10); // 7
getLongestUnitFractionRecurringCycle(1000); // 983