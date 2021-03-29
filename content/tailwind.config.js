module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'background5': "url('image/background5.jpg')",
      }),
      margin: {
        '85': '21.25rem',
        '140': '35rem',
        '150': '37.5rem',
        '170': '40rem',
        '175': '43.75rem',
        '180': '45rem',
        '200': '50rem',
        '225': '56.25rem',
        '250': '62.5rem',
        '300': '75rem',
      },
      padding: {
        '100': '25rem',
        '105': '26.25rem',
        '110': '27.5rem',
      },
      opacity: {
        '10': '.1',
        '20': '.2',
        '30': '.3',
        '40': '.4',
        '50': '.5',
        '60': '.6',
        '70': '.7',
        '80': '.8',
        '90': '.9',
      }
    },
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus', 'group-hover'],
      divideColor: ['group-hover'],
      scale: ['active', 'group-hover', 'hover'],
      backgroundImage: ['hover', 'focus', 'group-hover'],
      opacity: ['active', 'hover', 'group-hover'],
      backgroundOpacity: ['active', 'hover', 'group-hover'],
      transform: ['hover', 'focus', 'group-hover'],
      translate: ['active', 'group-hover', 'hover'],
      animation: ['hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce', 'group-hover'],
      borderRadius: ['hover', 'focus', 'group-hover'],
      boxShadow: ['active', 'group-hover', 'hover'],
    },
  },
  plugins: [],
}
