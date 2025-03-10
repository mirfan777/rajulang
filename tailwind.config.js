/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,svelte,js,ts}'],
     theme: {
       extend: {},
     },
     daisyui: {
        themes: ["light"], 
        darkTheme: "light"
      },
    plugins: [require('daisyui'), require("@tailwindcss/line-clamp"),],
    darkMode: "data"
   }