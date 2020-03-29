import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import run from '@rollup/plugin-run';

const dev = process.env.ROLLUP_WATCH === 'true';

export default {
    input: 'lib/solution.js',
    output: {
        dir: 'lib',
        format: 'cjs',
        sourcemap: true,
    },
    plugins: [
        typescript(),
        commonjs(),
        resolve(),
        dev && run(),
    ]
};