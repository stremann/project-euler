// This is a classic combinatorics problem

function findLatticePaths(gridSize) {
    let paths = 1;

    for (let i = 0; i < gridSize; i++) {
        paths *= (2 * gridSize) - i;
        paths /= i + 1;
    }

    return paths;
}

findLatticePaths(2); // 6
findLatticePaths(20); // 137846528820