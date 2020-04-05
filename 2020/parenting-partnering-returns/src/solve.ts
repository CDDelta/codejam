interface Activity {
    id: number;
    startTime: number;
    endTime: number;
}

export default function (rawActivities: number[][]) {
    const activities: Activity[] = [];
    for (let i = 0; i < rawActivities.length; i++) {
        activities.push({
            id: i,
            startTime: rawActivities[i][0],
            endTime: rawActivities[i][1]
        });
    }

    activities.sort((a, b) => a.startTime - b.startTime);

    const schedule = new Array(activities.length);
    const cSchedule: Activity[] = [];
    for (let i = 0; i < activities.length; i++) {
        const activity = activities[i];

        for (let j = 0; j < cSchedule.length; j++) {
            if (activitiesOverlap(activity, cSchedule[j])) {
                schedule[activity.id] = 'J';
                break;
            }
        }

        if (!schedule[activity.id]) {
            cSchedule.push(activity);
            schedule[activity.id] = 'C';
        }
    }

    if (scheduleHasOverlap(activities.filter((a) => schedule[a.id] === 'C')) ||
        scheduleHasOverlap(activities.filter((a) => schedule[a.id] === 'J')))
        return 'IMPOSSIBLE';

    return schedule.join('');
}

function activitiesOverlap(a: Activity, b: Activity) {
    if (// If A starts in the middle of B.
        (a.startTime > b.startTime && a.startTime < b.endTime) ||
        // If A ends in the middle of B.
        (a.endTime > b.startTime && a.endTime < b.endTime) ||
        // If B starts in the middle of A.
        (b.startTime > a.startTime && b.startTime < a.endTime) ||
        // If B starts in the middle of A.
        (b.endTime > a.endTime && b.endTime < a.endTime) ||
        // If B is completely overlapped by A.
        (a.startTime <= b.startTime && a.endTime >= b.endTime) ||
        // If A is completely overlapped by B.
        (a.startTime >= b.startTime && a.endTime <= b.endTime))
        return true;

    return false;
}

function scheduleHasOverlap(schedule: Activity[]) {
    for (let i = 0; i < schedule.length; i++) {
        for (let j = 0; j < schedule.length; j++) {
            if (i === j)
                continue;

            if (activitiesOverlap(schedule[i], schedule[j]))
                return true;
        }
    }

    return false;
}