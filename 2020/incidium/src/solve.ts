export default function (matrixSize: number, expectedTrace: number) {
    let offSetTrace = 0, sameNumTrace = 0;
    for (let j = matrixSize; j > 0; j--) {
        if (expectedTrace === j * matrixSize)
            sameNumTrace = j;
    }

    if (matrixSize % 2 !== 0) {
        for (let j = matrixSize; j > 0; j--)
            offSetTrace += j;
    }

    if (offSetTrace !== expectedTrace || (matrixSize === 2 && expectedTrace > 2))
        offSetTrace = 0;

    if (!offSetTrace && !sameNumTrace)
        return null;

    const matrix = new Array(matrixSize);

    let nums = [];
    for (let i = 0; i < matrixSize; i++)
        nums[i] = i + 1

    if (offSetTrace) {
        for (let i = 0; i < matrixSize; i++) {
            let n = [...nums];
            matrix[i] = n.concat(n.splice(0, i));
        }
    } else {
        nums = nums.concat(nums.splice(0, sameNumTrace - 1));
        for (let i = 0; i < matrixSize; i++) {
            let n = [...nums];
            matrix[i] = n.concat(n.splice(0, matrixSize - i))
        }
    }

    return matrix;
}
