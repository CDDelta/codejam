export default function (matrixSize: number, matrix: number[][]) {
    let trace = 0;
    for (let i = 0; i < matrixSize; i++) {
        trace += matrix[i][i];
    }

    let numRowsWithRepeats = 0, numColsWithRepeats = 0;
    for (let y = 0; y < matrixSize; y++) {
        if (new Set(matrix[y]).size !== matrixSize)
            numRowsWithRepeats++;
    }

    for (let x = 0; x < matrixSize; x++) {
        const colSet = new Set();

        for (let y = 0; y < matrixSize; y++)
            colSet.add(matrix[y][x]);

        if (colSet.size !== matrixSize)
            numColsWithRepeats++;
    }

    return { trace, numRowsWithRepeats, numColsWithRepeats };
}