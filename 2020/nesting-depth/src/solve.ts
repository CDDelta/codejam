export default function (input: string) {
    let output = '', nestingLevel = 0;
    for (let i = 0; i < input.length; i++) {
        const requiredNesting = parseInt(input[i]);

        while (nestingLevel !== requiredNesting) {
            if (nestingLevel < requiredNesting) {
                output += '(';
                nestingLevel++;
            } else if (nestingLevel > requiredNesting) {
                output += ')';
                nestingLevel--;
            }
        }

        output += requiredNesting.toString();
    }

    while (nestingLevel !== 0) {
        output += ')';
        nestingLevel--;
    }

    return output;
}