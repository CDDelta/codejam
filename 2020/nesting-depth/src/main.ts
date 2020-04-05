import { StdinLineStream } from 'stdin-line';
import solve from './solve';

async function main() {
    let inputStream = new StdinLineStream();
    const [totalCaseNum] = await inputStream.getLineAsNumbers();

    for (let caseNum = 1; caseNum <= totalCaseNum; caseNum++) {
        const input = await inputStream.getLine();
        const solution = solve(input);
        console.log(`Case #${caseNum}: ${solution}`);
    }

    inputStream.close();
};

main();