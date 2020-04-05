import { StdinLineStream } from 'stdin-line';
import solve from './solve';

async function main() {
    let inputStream = new StdinLineStream();
    const [totalCaseNum] = await inputStream.getLineAsNumbers();

    for (let caseNum = 1; caseNum <= totalCaseNum; caseNum++) {
        const [matrixSize] = await inputStream.getLineAsNumbers();
        const matrix = new Array(matrixSize);
        for (let i = 0; i < matrixSize; i++) {
            matrix[i] = await inputStream.getLineAsNumbers();
        }

        const solution = solve(matrixSize, matrix);
        console.log(`Case #${caseNum}: ${solution.trace} ${solution.numRowsWithRepeats} ${solution.numColsWithRepeats}`);
    }

    inputStream.close();
};

main();