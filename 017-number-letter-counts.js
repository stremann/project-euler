const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function count(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += toEnglish(i).length;
    }
    return sum;
}

function toEnglish(n) {
    if (n >= 0 && n < 20) {
        return ones[n];
    }

    else if (n >= 20 && n < 100) {
        return tens[Math.floor(n / 10)] + (n % 10 !== 0 ? ones[n % 10] : '');
    }

    else if (n >= 100 && n < 1000) {
        return ones[Math.floor(n / 100)] + 'hundred' + (n % 100 !== 0 ? 'and' + toEnglish(n % 100) : '');
    }

    else if (n >= 1000 && n < 1000000) {
        return toEnglish(Math.floor(n / 1000)) + 'thousand' + (n % 1000 !== 0 ? toEnglish(n % 1000) : '');
    }

    else {
        throw Error('Use input number < 1000000');
    }
}

count(1); // 3
count(2); // 6
count(3); // 11
count(5); // 19
count(100); // 864
count(1000); // 21124