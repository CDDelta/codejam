const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function gcd(a: bigint, b: bigint) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
}

export default function (cipherTextLength: number, cipherText: string) {
    const cipherTextParts = cipherText.split(' ').map((part) => BigInt(part));

    const decodedParts = [];

    for (let i = 0; i < cipherTextLength - 1; i++) {
        decodedParts.push(gcd(cipherTextParts[i], cipherTextParts[i + 1]));
    }

    decodedParts.splice(0, 0, cipherTextParts[0] / decodedParts[0]);
    decodedParts.push(cipherTextParts[cipherTextParts.length - 1] / decodedParts[decodedParts.length - 1]);

    const sortedPrimes = [...new Set(decodedParts)].sort((a, b) => a - b < 0 ? -1 : 1);
    return decodedParts.map((val) => alphabet[sortedPrimes.findIndex((v) => v == val)]).join('');
}