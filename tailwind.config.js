/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["cupcake"],
          "base-100" : '#F5F8FC' ,
          "base-200" : "#F9F9F9" ,
          "base-300" : "#EAEAEA" ,
          primary : "#0098D1" , 
          secondary : "#FFB03B" ,
          accent : "#01AD4E" ,
          neutral : "#646464"
        }
      }
    ],
  },
}

