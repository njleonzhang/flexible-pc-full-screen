module.exports = {
  plugins: {
    autoprefixer: {},
    "@njleonzhang/postcss-px-to-rem": {
      unitToConvert: 'px',
      viewportWidth: 1920, // (Number) The width of the viewport.
      unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
      selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
      mediaQuery: false // (Boolean) Allow px to be converted in media queries.
    }
  }
}
