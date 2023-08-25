import { readFileSync } from "node:fs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { glob } from "glob";

import postcss from "rollup-plugin-postcss";

import postcssPresetEnv from "postcss-preset-env";

import { visualizer } from "rollup-plugin-visualizer";
import terser from "@rollup/plugin-terser";

const packages = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url))
);
export const file = (type) => `dist/index.${type}.js`;

const isProduction = process.env.NODE_ENV === "production";

const tsconfigOverride = {
  compilerOptions: {
    noUnusedParameters: true,
    noUnusedLocals: true,
    strictNullChecks: true,
    moduleResolution: "node",
    declaration: true,
    allowSyntheticDefaultImports: true,
  },
  useTsconfigDeclarationDir: true,
  exclude: ["**/*.spec.ts", "**/*.stories.*"],
};

const getPostCssPlugins = () => [
  postcssPresetEnv({
    browsers: ["> 0.2% and not dead"],
  }),
];

const getPostCss = () => [
  postcss({
    minimize: isProduction ? true : false,
    sourcemap: isProduction ? false : true,
    plugins: [...getPostCssPlugins()],
  }),
];

const getPlugins = () => [
  peerDepsExternal(),
  commonjs(),
  nodeResolve({
    extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
  }),

  typescript({
    // tsconfig: "./tsconfig.json",
    // declaration: true,
    // declarationDir: "dist",
    // exclude: ["**/*.spec.ts", "**/*.stories.*"],
    // tsconfigDefaults: defaults,
    tsconfigOverride,
  }),
  isProduction && terser(),
  // visualizer({
  //   filename: "bundle-analysis.html",
  //   open: true,
  // }),
];

const g = glob.sync("src/?(components)/**/index.ts");
console.log({ g });

export default [
  {
    input: glob.sync(["src/index.ts"]),

    output: [
      {
        name: packages.name,
        dir: "dist/cjs",
        format: "cjs",
        sourcemap: true,
        exports: "named",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
        preserveModules: true,
        preserveModulesRoot: "src",
        paths: {
          "react/jsx-dev-runtime": "react/jsx-dev-runtime.js",
          "react/jsx-runtime": "react/jsx-runtime.js",
        },
      },
      {
        dir: "dist/esm",
        format: "es",
        sourcemap: true,
        exports: "named",
        globals: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "react/jsx-runtime": "jsxRuntime",
          },
        },
        preserveModules: true,
        preserveModulesRoot: "src",
        paths: {
          "react/jsx-dev-runtime": "react/jsx-dev-runtime.js",
          "react/jsx-runtime": "react/jsx-runtime.js",
        },
      },
    ],
    plugins: [...getPlugins(), ...getPostCss()].filter(Boolean),
    external: ["react", "react-dom", "react/jsx-runtime"],
  },
];
