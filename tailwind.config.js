module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "logo-background": "#8EBFE7",
      },
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '120': '40rem',
        '144': '58rem'
      },
      fontSize: {
        'xss':'0.75rem'
      },
      colors: {
        'green-mold': '#558b4f',
        'green-nav': '#16281a',
        'green-navtext': '#7fa366',
        'green-bg': '#335a3b',
        'green-leaf': '#80a464',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
