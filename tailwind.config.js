/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.7rem",
        sm: "1rem",
        md: "1.4rem",
        lg: "2rem",
        xl: "3.6rem",
        "2xl": "5rem",
      }
    },

    extend: {
      animation: {
        spinOnce: "spinOnce 1s linear",
      },

      keyframes: {
        spinOnce: {
          from: {
            transform: "rotate(0deg)"
          },
          to: {
            transform: "rotate(360deg)"
          },
        },
      }
    },
  },
  plugins: [],
}