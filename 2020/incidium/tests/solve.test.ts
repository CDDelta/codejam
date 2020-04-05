import solve from '../src/solve';

function checkSolution(matrixSize: number, expectedTrace: number, expectPossible = true) {
    return () => {
        const solution = solve(matrixSize, expectedTrace);

        if (!expectPossible) {
            expect(solution).toBeFalsy();
            return;
        }
        else
            expect(solution).toBeTruthy();

        let trace = 0;
        for (let i = 0; i < matrixSize; i++)
            trace += solution[i][i];

        expect(trace).toBe(expectedTrace);

        let numRowsWithRepeats = 0, numColsWithRepeats = 0;
        for (let y = 0; y < matrixSize; y++) {
            if (new Set(solution[y]).size !== matrixSize)
                numRowsWithRepeats++;
        }

        expect(numRowsWithRepeats).toBe(0);

        for (let x = 0; x < matrixSize; x++) {
            const colSet = new Set();

            for (let y = 0; y < matrixSize; y++)
                colSet.add(solution[y][x]);

            if (colSet.size !== matrixSize)
                numColsWithRepeats++;
        }

        expect(numColsWithRepeats).toBe(0);
    }
}

describe('sample cases', () => {
    test('1', checkSolution(3, 6));

    test('2', checkSolution(2, 3, false));
});

describe('edge cases', () => {
    test('4x4 matrix with trace 10', checkSolution(4, 10));
    test('4x4 matrix with trace 6', checkSolution(4, 6));
    test('5x5 matrix with trace 8', checkSolution(5, 8));
    test('5x5 matrix with trace 11', checkSolution(5, 11));
    test('5x5 matrix with trace 12', checkSolution(5, 12));
    test('5x5 matrix with trace 13', checkSolution(5, 13));
    test('5x5 matrix with trace 14', checkSolution(5, 14));
    test('5x5 matrix with trace 16', checkSolution(5, 16));
    test('5x5 matrix with trace 17', checkSolution(5, 17));
    test('5x5 matrix with trace 18', checkSolution(5, 18));
    test('5x5 matrix with trace 19', checkSolution(5, 19));
});

