import { StdinLineStream } from 'stdin-line';
import solve from './solve';

async function main() {
    let inputStream = new StdinLineStream();
    const [totalCaseNum] = await inputStream.getLineAsNumbers();

    for (let caseNum = 1; caseNum <= totalCaseNum; caseNum++) {
        const [activityNum] = await inputStream.getLineAsNumbers();
        const activities = new Array(activityNum);
        for (let i = 0; i < activityNum; i++) {
            activities[i] = await inputStream.getLineAsNumbers();
        }

        const solution = solve(activities);
        console.log(`Case #${caseNum}: ${solution}`);
    }

    inputStream.close();
};

main();