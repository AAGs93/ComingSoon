// eslint.config.js
import js from "@eslint/js";
import ts from "typescript-eslint";
import vue from "eslint-plugin-vue";
import nuxt from "eslint-plugin-nuxt";
import prettier from "eslint-plugin-prettier";
import tailwind from "eslint-plugin-tailwindcss";

export default [
  {
    files: ["**/*.{js,ts,vue}"],
    ignores: [".output/", ".nuxt/", "dist/"],
  },

  // JavaScript base rules
  js.configs.recommended,

  // TypeScript rules
  ...ts.configs.recommended,

  // Vue 3 + `<script setup>`
  ...vue.configs["flat/essential"],
  ...vue.configs["flat/strongly-recommended"],
  ...vue.configs["flat/recommended"],

  // Nuxt 3 plugin
  nuxt.configs["flat/recommended"],

  // TailwindCSS class sorting + warnings
  {
    plugins: { tailwind },
    rules: {
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off",
    },
  },

  // Prettier integration
  {
    plugins: { prettier },
    rules: {
      "prettier/prettier": "warn",
    },
  },

  // Global stylistic rules
  {
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "vue/multi-word-component-names": "off",
      "vue/no-v-html": "off",
    },
  },
];
