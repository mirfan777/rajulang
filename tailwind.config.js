/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,svelte,js,ts}'],
     theme: {
       extend: {},
     },
     daisyui: {
        themes: ["light"], // This forces light theme only
        darkTheme: "light"
      },
    plugins: [require('daisyui')],
    darkMode: "data"
   }