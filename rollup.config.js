import vue from "rollup-plugin-vue";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/index.js",
  output: {
    file: "dist/he-tree-vue.cjs.js",
    format: "cjs",
  },
  plugins: [babel(), vue({ css: true })],
};
