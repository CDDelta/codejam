import { StdinLineStream } from 'stdin-line';
import solve from './solve';

async function main() {
    let inputStream = new StdinLineStream();
    const [totalCaseNum] = await inputStream.getLineAsNumbers();

    for (let caseNum = 1; caseNum <= totalCaseNum; caseNum++) {
        const line = await inputStream.getLine();
        const num = BigInt(line);

        const { a, b } = solve(num);
        console.log(`Case #${caseNum}: ${a} ${b}`);
    }

    inputStream.close();
};

main();