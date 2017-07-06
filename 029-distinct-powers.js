// In JavaScript, one has at most 53 bits for integers

import bigInt from 'big-integer';

function getDistinctPowers(from, to) {
    let terms = {};

    for (let a = from; a <= to; a++) {
        for (let b = from; b <= to; b++) {
            let term = bigInt(a).pow(b);
            terms[term.toString()] = true;
        }
    }

    return Object.keys(terms).length;
}

getDistinctPowers(2, 5); // 15
getDistinctPowers(2, 100); // 9183