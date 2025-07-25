module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        ahaGreen: {
          0: '#1c4a35',
          1: '#235c45',
          2: '#2a6f52',
          3: '#318160',
          4: '#38946e',
          5: '#3fa67b',
          6: '#6bc7a1',
          7: '#90d5b8',
          8: '#b5e3d0',
          9: '#daf1e7',
          'opacity-0': 'rgba(28, 74, 53, 0.333  )',
          'opacity-1': 'rgba(35, 92, 69, 0.666)',
          'opacity-2': 'rgba(42, 111, 82, 0.666)',
          'opacity-3': 'rgba(49, 129, 96, 0.666)',
          'opacity-4': 'rgba(56, 148, 110, 0.666)',
        },
        'ahaAmber-0': '#9e7215',
        'ahaAmber-1': '#b58317',
        'ahaAmber-2': '#e2a31d',
        'ahaAmber-3': '#e8b64a',
        'ahaAmber-4': '#edc878',
        'ahaAmber-5': '#f3daa5',
        'ahaAmber-6': '#f9edd2'
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
      }, 
      backgroundImage: {
        'login': "url('')"
      }
    }, 
    fontFamily: {
      'space-grotesk': ['Space Grotesk']
    },
    boxShadow: {
      'gray': '0.1rem 0.1rem 0.5rem gray'
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false, 
  },
}
