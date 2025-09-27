import daisyui from 'daisyui'

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    // Choose the themes you want available (optional). Built-ins: light, dark, cupcake, etc.
    themes: [
      'light',
      'dark',
      'cupcake',
      'retro',
      "forest",
    ],
   
  },
}
