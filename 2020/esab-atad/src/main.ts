import { StdinLineStream } from 'stdin-line';
import solve from './solve';

async function main() {
    let inputStream = new StdinLineStream();
    const [totalCaseNum, numBits] = await inputStream.getLineAsNumbers();

    for (let caseNum = 1; caseNum <= totalCaseNum; caseNum++) {
        const solution = await solve(numBits, inputStream);
        console.log(solution);

        if (await inputStream.getLine() === 'N')
            break;
    }

    inputStream.close();
};

main();