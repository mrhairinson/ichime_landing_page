/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        hideFlex: {
          from: { /* Styles for the starting state */
            display: "flex",
            opacity: 1,
          },
          to: { /* Styles for the ending state */
            display: "none",
            opacity: 0,
          },
        }
      },
      animation: {
        hideFlex: 'hideFlex 3s ease-out forwards',
      },
      colors: {
        'main-color': '#10134C',
      },
      dropShadow: {
        'button': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        lg: '1360px', // Custom breakpoint
        mlg: '1240px', // Custom breakpoint
        ml: '1024px', // Custom breakpoint
        md: '786px', // desktop value
        sm: '556px', // Custom breakpoint
      },
      fontSize: {
        'navLg': '35px',
        'navSm': '11px',
        'pageTitleLg': '55px',
        'pageTitleSm': '20px',
        'pageSubTitleLg': '40px',
        'pageSubTitleSm': '15px',
        'productTitleLg': '30px',
        'footerTitleLg': '35px',
        'footerTitleSm': '11px',
        'footerTextLg': '20px',
        'footerTextSm': '6px',
      },
      aspectRatio: {
        '1440/280': '1440 / 280',
        '347/97': '347 / 97',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
