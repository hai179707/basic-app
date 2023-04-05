/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#007bff',
        'indigo': '#6610f2',
        'purple': '#6f42c1',
        'pink': '#e83e8c',
        'red': '#dc3545',
        'orange': '#fd7e14',
        'yellow': '#ffc107',
        'green': '#28a745',
        'teal': '#20c997',
        'cyan': '#17a2b8',
        'white': '#fff',
        'gray': '#6c757d',
        'graydark': '#343a40',
        'primary': '#007bff',
        'secondary': '#6c757d',
        'success': '#28a745',
        'info': '#17a2b8',
        'warning': '#ffc107',
        'danger': '#dc3545',
        'light': '#ededed',
        'dark': '#343a40',
      },
      backgroundImage: {
        'red': 'linear-gradient(to right,#fe8464 0%,#fe6e9a 50%,#fe8464 100%)',
        'blue': 'linear-gradient(to right,#33c8c1 0%,#119bd2 50%,#33c8c1 100%)',
        'vertical-red': 'linear-gradient(#fe8464 0%,#fe6e9a 100%)'
      },
      dropShadow: {
        'header-nav': '0 20px 50px 0 rgba(0,0,0,.05)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      zIndex: {
        1: '1'
      }
    }
  },
  plugins: [],
}