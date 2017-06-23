function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function findLargestPalindrome(limit) {
    const palindromes = [];
    for (let i = 10; i < limit; i++) {
        for (let j = 10; j < limit; j++) {
            if (isPalindrome((i * j).toString())) {
                palindromes.push(i * j);
            }
        }
    }

    return palindromes.sort((a, b) => b - a)[0];
}

findLargestPalindrome(100); // 9009
findLargestPalindrome(1000); // 906609
