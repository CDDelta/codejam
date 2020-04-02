import { StdinLineStream } from 'stdin-line';
import solve from './solve';

async function main() {
    let inputStream = new StdinLineStream();
    const [totalCaseNum] = await inputStream.getLineAsNumbers();

    for (let caseNum = 1; caseNum <= totalCaseNum; caseNum++) {
        const [maxPrimeSize, cipherTextLength] = await inputStream.getLineAsNumbers();
        const cipherText = await inputStream.getLine();

        const decodedText = solve(cipherTextLength, cipherText);
        console.log(`Case #${caseNum}: ${decodedText}`);
    }

    inputStream.close();
};

main();