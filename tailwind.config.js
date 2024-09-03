/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography : ({theme , themes}) => ({
        DEFAULT : {
         css : {
            blockquote : {
              "border-inline-start-color" : "#0098D1",
              "border-inline-start-width" : "0.4rem" ,
              p :{
                "padding-right" : "3rem"
              }
            },
            a:{
              "color" : "#eba132" ,
              "text-decoration" : "none" ,
              "transition" : "ease 0.3s all" ,
              "&:hover" :{
                "color" : theme("colors.slimBlack")
              }
            } ,
            img :{
              "border-radius" : "0.5rem" ,
              "width" : "100%"
            }

        }
      }
    }) ,
      spacing: {
        '13' : '3.15rem'
      }
      ,
      fontFamily:{
        numberland: ['Numberland' , 'Samim' , 'ISans', 'Yekan','sans-serif'],
      }
      ,
      colors : {
        "menuItem" : "#003f57" ,
        "burgerBg" : "rgba(191, 189, 189 , 0.7)" ,
        "slimBlack" : "rgba(0  ,0 ,0 , 0.7)",
        "btnHoverBg" : "#FFECEC" ,
        "btnBg" : "#F2F2F2" ,
        "wbMenuItem" : "#007DAD" ,
        "darkPrimary" : "#0066bf"
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
        burgerShadow: '0px 0px 400px 80px #EAEAEA',
        selectServiceShadow : "0px 15px 16px -7px #FFFFFF"
      },
      animation: {
        menuHoverEffect: 'menuHoverEffect 0.4s ease-out',
      },
      gridTemplateColumns : {
        footerLinks : 'repeat(auto-fill , minmax( 150px , 170px))' ,
        blogCards : 'repeat(auto-fill , minmax( 350px , 1fr))' ,
        hpListXl : 'repeat(3 , minmax( 150px , 1fr))' ,
        hpListSm : 'repeat(2 , minmax( 110px , 1fr))' ,
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
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

