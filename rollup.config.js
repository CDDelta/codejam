import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import execute from 'rollup-plugin-execute';
import run from '@rollup/plugin-run';
import path from 'path';

const dev = process.env.ROLLUP_WATCH === 'true';

export default {
    input: 'src/main.ts',
    output: {
        dir: 'lib',
        format: 'cjs',
        sourcemap: true,
    },
    plugins: [
        typescript({
            tsconfig: 'tsconfig.json'
        }),
        commonjs(),
        resolve(),
        execute(`cd ../.. && jest ${path.relative('../..', process.cwd()).replace('\\', '/')}`),
        // dev && run(),
    ]
};