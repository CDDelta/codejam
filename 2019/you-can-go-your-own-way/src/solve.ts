import { Direction } from "./grid";

export default function (gridSize: number, illegalPath: string) {
    const illegalPathDirs = illegalPath.split('') as Direction[];
    const path = [];

    for (let i = 0; i < illegalPathDirs.length; i++) {
        path.push(illegalPathDirs[i] === Direction.East ? Direction.South : Direction.East);
    }

    return path.join('');
}