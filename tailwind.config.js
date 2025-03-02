import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        Barlow: ["Barlow Condensed", "sans-serif"],
      },
      colors: {
        primary: "#9E5914",
        "primary-dark": "#532E0A",
        "primary-compliment":'#0A2F53',
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        sizeAnim:{
          '50%':{
            transform:"scale(1.05)"
          },
          '100%':{
            transform:"scale(1)"
          }
        }
      },
      animation: {
        sizeAnim: "sizeAnim 3s ease-in-out infinite",
        
                  },
    },
  },
  plugins: [],
}

