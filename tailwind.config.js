/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
      //   sm: '480px',
      //   md: '768px',
      //   lg: '976px',
      //   xl: '1440px',
      // },
      // spacing: {
        //   '1': '8px',
        //   '2': '12px',
        //   '3': '16px',
        //   '4': '24px',
        //   '5': '32px',
        //   '6': '48px',
        // },
        extend: {
          colors: {
            vuejs: '#49e659'
          },
          // fontSize: {
          //   xs: '12px',
          //   sm: '15px',
          //   base: '18px',
          // },
    },
  },
  plugins: [],
}

