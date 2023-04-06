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
        'ct-blue': '#007bff',
        'ct-indigo': '#6610f2',
        'ct-purple': '#6f42c1',
        'ct-pink': '#e83e8c',
        'ct-red': '#dc3545',
        'ct-orange': '#fe806d',
        'ct-yellow': '#ffc107',
        'ct-green': '#28a745',
        'ct-teal': '#20c997',
        'ct-cyan': '#17a2b8',
        'ct-white': '#fff',
        'ct-gray': '#6c757d',
        'ct-graydark': '#343a40',
        'ct-primary': '#007bff',
        'ct-secondary': '#6c757d',
        'ct-success': '#28a745',
        'ct-info': '#17a2b8',
        'ct-warning': '#ffc107',
        'ct-danger': '#dc3545',
        'ct-light': '#ededed',
        'ct-dark': '#343a40',
      },
      backgroundImage: {
        'red': 'linear-gradient(to right,#fe8464 0%,#fe6e9a 50%,#fe8464 100%)',
        'blue': 'linear-gradient(to right,#33c8c1 0%,#119bd2 50%,#33c8c1 100%)',
        'white023': 'linear-gradient(rgba(255,255,255,.23) 0%,rgba(255,255,255,.23) 100%)',
        'vertical-red': 'linear-gradient(#fe8464 0%,#fe6e9a 100%)',
        'blue-overlay': 'linear-gradient(to right,rgba(54,28,193,.2) 0%,rgba(46,130,239,.2) 100%)',
        'horizontal-green': 'linear-gradient(#33c8c1 0%,#119bd2 100%)',
        'horizontal-red': 'linear-gradient(#fe8464 0%,#fe6e9a 100%)',
        'horizontal-blue': 'linear-gradient(#361cc1 0%,#2e82ef 100%)',
      },
      dropShadow: {
        'header-nav': '0 20px 50px 0 rgba(0,0,0,.05)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      zIndex: {
        1: '1'
      },
      dropShadow: {
        'normal': '0 5px 30px rgba(167,167,167,.16)'
      }
    }
  },
  plugins: [],
}