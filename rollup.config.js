import vue from "rollup-plugin-vue";
import babel from 'rollup-plugin-babel';
import postcss from "rollup-plugin-postcss";
import path from "path";

const outDir = 'dist'

const extractCssPath = path.resolve(outDir, `he-tree-vue.css`)

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/he-tree-vue.cjs.js',
        format: 'cjs'
    },
    plugins: [
        vue({css: false}),
        postcss({extract: extractCssPath}),
        babel({ runtimeHelpers: true })
        // node(), cjs(), json(),
    ],
}
