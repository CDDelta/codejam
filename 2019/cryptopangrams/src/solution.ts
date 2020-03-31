import { StdinLineStream } from 'stdin-line';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function gcd(a, b) {
    if (!b) {  
        return a;  
    }  
 
    return gcd(b, a % b); 
}

async function main() {
    let inputStream = new StdinLineStream();
    const [totalCaseNum] = await inputStream.getLineAsNumbers();

    for (let caseNum = 1; caseNum <= totalCaseNum; caseNum++) {
        const [maxPrimeSize, cipherTextLength] = await inputStream.getLineAsNumbers();
        const cipherText = await inputStream.getLine();
        const cipherTextParts = cipherText.split(' ').map((part) => BigInt(part));

        const decodedParts = [];

        for (let i = 0; i < cipherTextLength - 1; i++) {
            decodedParts.push(gcd(cipherTextParts[i], cipherTextParts[i + 1]));
        }

        decodedParts.splice(0, 0, cipherTextParts[0] / decodedParts[0]);
        decodedParts.push(cipherTextParts[cipherTextParts.length - 1] / decodedParts[decodedParts.length - 1]);

        const sortedPrimes = [...new Set(decodedParts)].sort((a, b) => a - b < 0 ? -1 : 1);
        const decodedText = decodedParts.map((val) => alphabet[sortedPrimes.findIndex((v) => v == val)]).join('');
        console.log(`Case #${caseNum}: ${decodedText}`);
    }

    inputStream.close();
};

main();