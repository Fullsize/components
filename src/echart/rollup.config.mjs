// rollup.config.js
import { defineConfig } from 'rollup'
import resolve from '@rollup/plugin-node-resolve'
// https://github.com/ezolenko/rollup-plugin-typescript2
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import postcss from 'rollup-plugin-postcss'
import eslint from '@rollup/plugin-eslint';
import json from '@rollup/plugin-json';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];


export default defineConfig({
    input: 'index.ts',
    output: [
        //cjs
        {
            dir: 'dist/lib',
            format: 'commonjs',
            globals: {
                "react": "React",
                "lodash": "_",
                "react-dom": "ReactDOM",
                "echarts": "echarts"
            }
        },
        // es
        {
            name: 'es',
            dir: 'dist/es',
            format: 'es',
        },
        //umd
        {
            name: 'umd',
            dir: 'dist/umd',
            format: 'umd',
            globals: {
                "react": "React",
                "lodash": "_",
                "react-dom": "ReactDOM",
                "echarts": "echarts"
            }
        }
    ],
    plugins: [
        resolve(),
        json(),
        // eslint(),
        typescript(),
        commonjs(),
        babel(
            {
                extensions,
                babelHelpers: 'bundled',
                exclude: 'node_modules/**',
            }
        ),
        postcss(),
        terser()
    ],
    external: [
        'react', 'react-dom', 'lodash', "echarts",
    ],
});