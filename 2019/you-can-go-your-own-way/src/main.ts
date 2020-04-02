import { StdinLineStream } from 'stdin-line';
import solve from './solve';

async function main() {
    let inputStream = new StdinLineStream();
    const [totalCaseNum] = await inputStream.getLineAsNumbers();

    for (let caseNum = 1; caseNum <= totalCaseNum; caseNum++) {
        const [gridSize] = await inputStream.getLineAsNumbers();
        const illegalPath = await inputStream.getLine();

        const path = solve(gridSize, illegalPath);
        console.log(`Case #${caseNum}: ${path}`);
    }

    inputStream.close();
};

main();