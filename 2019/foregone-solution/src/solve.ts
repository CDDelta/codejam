export default function (num: bigint) {
    let a = 1n;
    const sNum = (num - a).toString().split('').reverse();

    for (let i = 0; i <= sNum.length - 1; i++) {
        const digit = sNum[i];
        if (digit === '4') {
            a += 10n ** BigInt(i);
        }
    }

    const b = num - a;[]
    return { a, b };
}