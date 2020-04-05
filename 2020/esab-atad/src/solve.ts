import { StdinLineStream } from 'stdin-line';

let inputStream: StdinLineStream;

export default async function (numBits: number, is: StdinLineStream) {
    inputStream = is;

    let bits = new Array(numBits);
    for (let i = 0; i < bits.length; i++)
        bits[i] = -1;

    for (let queryNum = 1, bitPos = 1; queryNum <= numBits;) {
        if (queryNum > 1 && queryNum % 10 === 1) {
            
        }

        bits[bitPos] = await askForBit(queryNum, bitPos);
        bitPos++;

        const midOffSetPos = bitPos + numBits / 2;
        bits[midOffSetPos] = await askForBit(queryNum, midOffSetPos);
    }

    return bits.join('');
}

function complement(bits: number[]) {
    for (let i = 0; i < bits.length; i++) {
        if (bits[i] === 0)
            bits[i] = 1;
        else if (bits[i] === 1)
            bits[i] = 0;
    }

    return bits;
}

async function askForBit(queryNum: number, position: number) {
    console.log(position);
    queryNum++;
    return parseInt(await inputStream.getLine());
}