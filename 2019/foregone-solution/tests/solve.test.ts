import solve from '../src/solve';

function checkSolution(num: bigint) {
    return () => {
        const solution = solve(num);
        expect(solution.a + solution.b).toBe(num);
        expect(solution.a.toString()).not.toContain('4');
        expect(solution.b.toString()).not.toContain('4');
    }
}

describe('sample cases', () => {
    test('1', checkSolution(4n));

    test('2', checkSolution(940n));
});