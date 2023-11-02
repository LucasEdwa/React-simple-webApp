module.exports = {
  
  theme: {
    extend: {
      boxShadow: {
        'custom-color': '0 10px 15px -3px rgba(255, 255, 255, 0.5), 4px 4px 6px -2px rgba(96, 165, 250, 0.5)',
      },
      colors: {
        amber: {
          '400': '#FFC085',
          '500': '#FFA500',
        },
        orange: {
          '700': '#FFA500',
        },
        teal: {
          '700': '#008080',
        },
        indigo: {
          '700': '#4B0082',
        },
     
      },
      zIndex: {
        '-1': '-1',
        '-10': '-10',
        // Add as many as you need...
      },
    },
  },
  variants: {},
  plugins: [],
  purge: [],
  darkMode: false, // or 'media' or 'class'
};