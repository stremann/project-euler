function getNthLexicographicPermutation(digits, n) {
    const sortedDigits = digits.slice().sort((a, b) => a - b);
    const digitsLength = sortedDigits.length;

    if (digitsLength === 1) {
        return n === 1 ? sortedDigits[0] : null;
    }

    let combinationsWithoutFirstDigit = 1;

    for (let i = 2; i < digitsLength; i++) {
        combinationsWithoutFirstDigit *= i;
    }

    let firstDigitIndex = Math.floor((n - 1) / combinationsWithoutFirstDigit);

    if (firstDigitIndex >= digitsLength) {
        return null;
    }

    return sortedDigits.splice(firstDigitIndex, 1) + getNthLexicographicPermutation(sortedDigits, n - (firstDigitIndex * combinationsWithoutFirstDigit));
}

const easy = ['0', '1', '2'];
getNthLexicographicPermutation(easy, 6); // 210

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
getNthLexicographicPermutation(digits, 6); // 2783915460