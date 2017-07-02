// The following iterative sequence is defined for the set of positive integers:
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

function createCollatzSequence(n) {
    const sequence = [n];

    while (n !== 1) {
        if (n % 2 === 0) {
            n /= 2;
        } else {
            n = (3 * n) + 1;
        }
        sequence.push(n)
    }

    return sequence;
}

function findStartingNumberOfLongestCollatzSequenceFrom(n) {
    let startingNumber = 0;
    let currentSequenceLength = 0;
    let longestSequenceLength = 0;

    for (let i = 1; i < n; i++) {
        currentSequenceLength = createCollatzSequence(i).length;
        if (currentSequenceLength > longestSequenceLength) {
            longestSequenceLength = currentSequenceLength;
            startingNumber = i
        }
    }

    return startingNumber;
}

createCollatzSequence(13).toString(); // "13,40,20,10,5,16,8,4,2,1"
findStartingNumberOfLongestCollatzSequenceFrom(13); // 9

createCollatzSequence(1000000).toString(); // "1000000,500000,250000,125000,62500,31250,15625,46876,23438,11719,35158,17579,52738,26369,79108,39554,19777,59332,29666,14833,44500,22250,11125,33376,16688,8344,4172,2086,1043,3130,1565,4696,2348,1174,587,1762,881,2644,1322,661,1984,992,496,248,124,62,31,94,47,142,71,214,107,322,161,484,242,121,364,182,91,274,137,412,206,103,310,155,466,233,700,350,175,526,263,790,395,1186,593,1780,890,445,1336,668,334,167,502,251,754,377,1132,566,283,850,425,1276,638,319,958,479,1438,719,2158,1079,3238,1619,4858,2429,7288,3644,1822,911,2734,1367,4102,2051,6154,3077,9232,4616,2308,1154,577,1732,866,433,1300,650,325,976,488,244,122,61,184,92,46,23,70,35,106,53,160,80,40,20,10,5,16,8,4,2,1"
findStartingNumberOfLongestCollatzSequenceFrom(1000000); // 837799