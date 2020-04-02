import { createGrid, mapPathToGrid, Direction } from '../src/grid';
import solve from '../src/solve';

function characterCount(text: string, char: string) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == char)
            count++;
    }
    return count;
};

function checkSolution(gridSize: number, illegalPath: string) {
    return () => {
        const solution = solve(gridSize, illegalPath);
        expect(solution.length).toBe(2 * gridSize - 2);

        const illegalGrid = createGrid(gridSize);
        mapPathToGrid(illegalGrid, illegalPath.split('') as Direction[]);

        const solutionGrid = createGrid(gridSize);
        mapPathToGrid(solutionGrid, solution.split('') as Direction[]);

        // Check that the path arrives at the bottom right of the grid.
        expect(characterCount(solution, Direction.East)).toBe(gridSize - 1);
        expect(characterCount(solution, Direction.South)).toBe(gridSize - 1);

        // Check that the solution path does not walk the same direction as the illegal path.
        for (let x = 0; x < gridSize; x++) {
            for (let y = 0; y < gridSize; y++) {
                if (solution[x][y])
                    expect(solution[x][y]).not.toBe(illegalGrid[x][y]);
            }
        }
    }
}

describe('sample cases', () => {
    test('1', checkSolution(2, 'SE'));

    test('2', checkSolution(5, 'EESSSESE'));
});