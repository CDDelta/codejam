import solve from '../src/solve';

function checkSolution(activities: number[][], expectPossible = true) {
    const check = (activities: number[][]) => {
        const solution = solve(activities);

        if (!expectPossible) {
            expect(solution).toBe('IMPOSSIBLE');
            return;
        }

        expect(solution.length).toBe(activities.length);

        let cSchedule = [], jSchedule = [];
        for (let i = 0; i < solution.length; i++) {
            if (solution[i] === 'C')
                cSchedule.push(activities[i]);
            else if (solution[i] === 'J')
                jSchedule.push(activities[i]);
        }

        if (scheduleHasOverlap(cSchedule) || scheduleHasOverlap(jSchedule))
            expect(solution).toBe('not wrong');
    }

    return () => {
        for (let i = 0; i < activities.length; i++) {
            check(activities);
            activities = activities.concat(activities.splice(0, 1));
        }
    }
}

function scheduleHasOverlap(schedule: number[][]) {
    schedule.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < schedule.length - 1; i++) {
        // Expect the end time of the current activity to not be later than the start time of the next
        if (schedule[i][1] > schedule[i + 1][0] ||
            schedule[i][0] === schedule[i + 1][0])
            return true;
    }

    return false;
}

describe('sample cases', () => {
    test('1', checkSolution([
        [360, 480],
        [420, 540],
        [600, 660],
    ]));

    test('2', checkSolution([
        [0, 1440],
        [1, 3],
        [2, 4],
    ], false));

    test('3', checkSolution([
        [99, 150],
        [1, 100],
        [100, 301],
        [2, 5],
        [150, 250],
    ]));

    test('4', checkSolution([
        [0, 720],
        [720, 1440],
    ]));
});

describe('overlapped activity cases', () => {
    test('valid exact dual overlap', checkSolution([
        [100, 200],
        [100, 200],
    ]));

    test('valid dual overlap 1', checkSolution([
        [100, 200],
        [99, 200],
    ]));

    test('valid dual overlap 2', checkSolution([
        [100, 300],
        [299, 300],
    ]));

    test('valid long term overlap without short overlap', checkSolution([
        [0, 1000],
        [1, 100],
        [101, 200],
        [201, 300],
        [400, 500],
    ]));

    test('valid long term overlap with short overlap', checkSolution([
        [0, 1000],
        [0, 100],
        [100, 200],
        [200, 300],
        [400, 500],
    ]));

    test('invalid triple exact time overlap', checkSolution([
        [100, 200],
        [100, 200],
        [100, 200]
    ], false));

    test('invalid triple time overlap', checkSolution([
        [100, 200],
        [145, 200],
        [150, 200]
    ], false));

    test('invalid long and short term overlap', checkSolution([
        [0, 1000],
        [0, 100],
        [75, 125],
    ], false));
});
