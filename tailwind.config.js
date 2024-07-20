/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        yekan: ['Yekan' , 'sans-serif'],
        iSans: ['ISans' , 'sans-serif'],
        samim: ['Samim' , 'sans-serif'],
      }
      ,
      colors : {
        "menuItem" : "#003f57"
      },
      keyframes: {
        menuHoverEffect: {
          '0%, 100%': { right: '0' },
          '40%': { right: '-1.5px' },
          '80%': { right: '1.5px' },
        },
      }, 
      boxShadow: {
        custom: '0px 0px 3px 2px rgba(0, 152, 209, 0.05)',
      },
      animation: {
        menuHoverEffect: 'menuHoverEffect 0.4s ease-out',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["bumblebee"],
          "base-100": '#F5F8FC',
          "base-200": "#F9F9F9",
          "base-300": "#EAEAEA",
          primary: "#0098D1",
          secondary: "#ffb03b",
          "secondary-content": "#E5EEFB",
          accent: "#01AD4E",
          neutral: "#646464",
        }
      }
    ],
  },
}

