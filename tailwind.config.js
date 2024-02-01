/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(red|mintgreen|indigo|bluegray|gray)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /brand-(primary|secondary)/,
    },
    {
      pattern: /(basic)-(surface*|on-surface*|border*)/,
    },
    {
      pattern: /(state)-(error*|info*|success*)/,
    },
    {
      pattern: /(accent)-(mintgreen*|bluegray*|red*|indigo*)/,
    },
  ],
}
