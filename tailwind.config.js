/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"]
      },
      width: {
        "custom1": "320px"
      },
      height: {
        "custom1": "499px"
      },
      borderRadius: {
        "custom1": "20px",
        "custom2": "10px",
      },
      fontSize: {
        "custom-base": "15px",
        "custom-md": "22px",
      },
      lineHeight: {
        "custom1": "120%",
        "custom2": "140%"
      }
    },
  },
  plugins: [],
}

