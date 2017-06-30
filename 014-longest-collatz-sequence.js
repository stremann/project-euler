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
