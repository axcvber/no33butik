const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', '!./node_modules'],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    // fontFamily: {
    //   'display': 'var(--display-font)',
    //   'body': 'var(--body-font)',
    // },
    fontFamily: {
      'display': ['Josefin Sans', 'sans-serif'],
      'body': ['Montserrat', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '2rem',
    },

    extend: {
      opacity: {
        '10': '.10',
        '20': '.20',
        '30': '.30',
        '40': '.40',
        '50': '.50',
        '60': '.60',
        '70': '.70',
        '80': '.80',
      },
      fontFamily: {
        // sans: ['Inter', ...fontFamily.sans],
        sans: ['Montserrat', ...fontFamily.sans],
      },
      colors: {
        primary: {
          light: '#FFA67A',
          DEFAULT: '#FF9A66',
          dark: '#FF874B',
        },
        secondary: {
          light: '#555',
          DEFAULT: '#222',
          dark: '#111',
        },
        text: {
          light: '#ffffff',
          DEFAULT: '#949494',
          dark: '#7E7E7E',
        },
        // dimWhite: 'rgba(255, 255, 255, 0.7)',
        // dimBlue: 'rgba(9, 151, 124, 0.1)',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        rotate: 'animate 7.5s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100vw)' },
        },
        animate: {
          '0%': { rotate: '0deg' },
          '100%': { rotate: '360deg' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],

  // plugins: [require('@tailwindcss/forms')],
}
