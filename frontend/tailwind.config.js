module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'golden': '#D4A422',
        'golden-hover': '#F2E0A6',
        'golden-ramsay': '#B88A19',
        'Green':'#1A4532',
        'bgGreen': 'rgba(26, 69, 50, 0.666)',
      },
      transitionProperty: {
        'fontSize': ''
      }, 
      screens: {
        'medium': {min: '775px', max: '1219px'},
        'big': {min: '1219px', max: '1534px'},
        'small': {min: '20px', max: '775px'}, 
        'aboveSmall': '300px',
      }, 
      fontSize: {
        'tiny': '10px', 
        'super-tiny': '8px', 
        'normal': '16px',
        'bit-lg': '15px', 
        'change': '1.4vw'
      }
    }, 
    fontFamily: {
      'space-grotesk': ['Space Grotesk']
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Tắt reset styles
  },
}
