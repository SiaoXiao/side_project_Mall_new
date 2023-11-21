const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans TC"', ...defaultTheme.fontFamily.sans]
      },
      listStyleType: {
        cjk: 'cjk-ideographic'
      },
      height: {
        calc: 'calc(100vh - 256px)',
        headerCalc: 'calc(100vh - 56px)'
        // 更多自定義高度
      }
    }
  },
  corePlugins: {
    aspectRatio: false
  },
  plugins: [require('@tailwindcss/typography')]
}
// #CB997E
// #DDBEA9
// #FFE8D6
// #B7B7A4
// #A5A58D
// #6B705C
// #252422
// #403D39
// #CCC5B9
