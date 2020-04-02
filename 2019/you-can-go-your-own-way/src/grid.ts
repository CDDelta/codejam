export enum Direction { South = 'S', East = 'E' };

export function createGrid(gridSize: number): Direction[][] {
    const grid = new Array(gridSize);

    for (let i = 0; i < grid.length; i++) {
        grid[i] = new Array(gridSize);
    }

    return grid;
}

export function mapPathToGrid(grid: Direction[][], path: Direction[]) {
    let coordX = 0, coordY = 0;
    for (const dir of path) {
        grid[coordX][coordY] = dir;

        if (dir === Direction.East)
            coordX++;
        else
            coordY++;
    }
}