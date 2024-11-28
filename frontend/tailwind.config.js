module.exports = {
  content: [
    './src/**/Footer.tsx',
    './src/**/BookingSectionManageBooking.tsx',
    './src/**/BookingContent.tsx',
    './src/**/BookingSection.tsx', 
    './src/**/BookingSectionBook.tsx', 
    './src/**/BookingFlightSuggestion.tsx', 
    './src/**/BookingFlightSuggestionSideBar.tsx', 
    './src/**/BookingContentOneWay.tsx', 
    './src/**/BookingContentRoundTrip.tsx', 
    './src/**/CalendarDepart.tsx', 
    './src/**/PassengerInfo.tsx'
  ],
  theme: {
    extend: {
      colors: {
        'golden': '#D4A422',
        'Green':'#1A4532'
      },
      transitionProperty: {
        'fontSize': ''
      }
    }, 
    fontFamily: {
      'space-grotesk': ['Space Grotesk']
    }, 
    fontSize: {
      'label': ['16px'],
      'focus': ['11px'],
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Tắt reset styles
  },
}
