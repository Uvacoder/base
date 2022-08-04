const BLOG = require('./blog.config')
const { fontFamily } = require('tailwindcss/defaultTheme')
const CJK = require('./lib/cjk')
const fontSansCJK = !CJK()
  ? []
  : [`"Noto Sans CJK ${CJK()}"`, `"Noto Sans ${CJK()}"`]
const fontSerifCJK = !CJK()
  ? []
  : [`"Noto Serif CJK ${CJK()}"`, `"Noto Serif ${CJK()}"`]

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: BLOG.appearance === 'auto' ? 'media' : 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        day: {
          DEFAULT: BLOG.lightBackground || '#ffffff'
        },
        night: {
          DEFAULT: BLOG.darkBackground || '#111827'
        },
        primary: {
          100: '#88c9fc',
          200: '#72bffc',
          300: '#66b9fa',
          400: '#57b0f7',
          500: '#45ADFF',
          600: '#369beb',
          700: '#1f7ac4',
          800: '#1365a8',
          900: '#064e8a'
        },
        'primary-color': {
          100: '#88c9fc',
          200: '#72bffc',
          300: '#66b9fa',
          400: '#57b0f7',
          500: '#45ADFF',
          600: '#369beb',
          700: '#1f7ac4',
          800: '#1365a8',
          900: '#064e8a'
        },
        'primary-color-dark': {
          100: '#88c9fc',
          200: '#72bffc',
          300: '#66b9fa',
          400: '#57b0f7',
          500: '#45ADFF',
          600: '#369beb',
          700: '#1f7ac4',
          800: '#1365a8',
          900: '#064e8a'
        },
        zinc: {
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b'
        }
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', ...fontFamily.sans, ...fontSansCJK],
        serif: ['"Source Serif"', ...fontFamily.serif, ...fontSerifCJK],
        noEmoji: [
          '"IBM Plex Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif'
        ]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
