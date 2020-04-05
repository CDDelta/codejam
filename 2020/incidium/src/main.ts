import { StdinLineStream } from 'stdin-line';
import solve from './solve';

async function main() {
    let inputStream = new StdinLineStream();
    const [totalCaseNum] = await inputStream.getLineAsNumbers();

    for (let caseNum = 1; caseNum <= totalCaseNum; caseNum++) {
        const [matrixSize, expectedTrace] = await inputStream.getLineAsNumbers();

        const solution = solve(matrixSize, expectedTrace);
        console.log(`Case #${caseNum}: ${solution ? 'POSSIBLE' : 'IMPOSSIBLE'}`);

        if (solution)
            for (const row of solution)
                console.log(row.join(' '));
    }

    inputStream.close();
};

main();