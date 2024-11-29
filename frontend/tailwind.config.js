module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'golden': '#D4A422',
        'Green':'#1A4532',
        'bgGreen': 'rgba(26, 69, 50, 0.666)',
      },
      transitionProperty: {
        'fontSize': ''
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
