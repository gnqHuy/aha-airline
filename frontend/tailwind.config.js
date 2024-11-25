module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'golden': '#D4A422',
        'Green':'#1A4532'
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Tắt reset styles
  },
}
