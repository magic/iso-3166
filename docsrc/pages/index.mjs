/*


 this file is autogenerated. edit ./bin/MAGIC-doc-template.mjs to update


*/

export const View = state => [
  h1(state.title),
  state.description.map(d => p(d)),

  GitBadges('@magic/iso-3166'),

  h3({ id: 'install' }, 'installation'),
  p('be in a nodejs project'),
  Pre(`
npm install @magic/iso-3166
`),

  h3({ id: 'usage' }, 'import / usage'),
  Pre({
    // adding lines: true does not show the newlines correctly
    // lines: false,
    content: `
import { countries, subdivisions } from '@magic/iso-3166'

const AfghanistanByName = countries.find(country => country.name === 'Afghanistan')
// { name: 'Afghanistan', a2: 'AF', a3: 'AFG', num: '004' }

const AmericanSamoaByAlphaNumeric2 = countries.find(country => country.a2 === 'AS')
const AustraliaByAlphaNumeric3 = countries.find(country => country.a3 === 'AUS')
const AntarcticaByNumeric = countries.find(country => country.num === '010')

const BrasilianSubdivisions = subdivisions.filter(sub => sub.country === 'BR')

const AustrianSubdivisions = subdivisons.filter(sub => sub.country === 'AT')
/*
{ country: 'AT', code: '1', name: 'Burgenland', type: 'state' },
{ country: 'AT', code: '2', name: 'Kärnten', type: 'state' },
{ country: 'AT', code: '3', name: 'Niederösterreich', type: 'state' },
{ country: 'AT', code: '4', name: 'Oberösterreich', type: 'state' },
{ country: 'AT', code: '5', name: 'Salzburg', type: 'state' },
{ country: 'AT', code: '6', name: 'Steiermark', type: 'state' },
{ country: 'AT', code: '7', name: 'Tirol', type: 'state' },
{ country: 'AT', code: '8', name: 'Vorarlberg', type: 'state' },
{ country: 'AT', code: '9', name: 'Wien', type: 'state' }
*/
`,
  }),

  h4({ id: 'changelog' }, 'changelog'),

  h5({ id: 'changelog-0.0.1' }, '0.0.1'),
  p('first publish'),

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link({
      to: 'https://github.com/magic/iso-3166/tree/main/docsrc',
      text: 'docsrc directory',
    }),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core', text: '@magic/core' }),
  ]),
]
