import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/index.ts', // Entry file
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs', // CommonJS format
            sourcemap: true,
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm', // ES Module format
            sourcemap: true,
        },
    ],
    plugins: [
        resolve(), // Resolves node_modules dependencies
        commonjs(), // Converts CommonJS modules to ES modules
        typescript({ useTsconfigDeclarationDir: true }), // TypeScript support
    ],
    external: ['k6'], // Mark external dependencies
};
