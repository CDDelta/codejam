import { StdinLineStream } from 'stdin-line';

async function main() {
    let inputStream = new StdinLineStream();
    const [totalCaseNum] = await inputStream.getLineAsNumbers();

    for (let caseNum = 1; caseNum <= totalCaseNum; caseNum++) {
        const line = await inputStream.getLine();
        const num = BigInt(line);

        let intA = 1n;
        const sNum = (num - intA).toString().split('').reverse();

        for (let i = 0; i <= sNum.length - 1; i++) {
            const digit = sNum[i];
            if (digit === '4') {
                intA += 10n ** BigInt(i);
            }
        }

        const intB = num - intA;
        console.log(`Case #${caseNum}: ${intA} ${intB}`);
    }

    inputStream.close();
};

main();