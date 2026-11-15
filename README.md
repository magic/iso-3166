# @magic/iso-3166

Exports an array of the iso-3166-1 countrycodes and iso-3166-2 subdivisions.

State of January of 2022

[html-docs](https://magic.github.io/iso-3166/)

[![NPM version][npm-image]][npm-url]

### installation

be in a nodejs project

```bash
npm install --save-exact @magic/iso-3166
```

### import / usage:

in yourproject.js

```javascript
import { countries, subdivisions } from '@magic/iso-3166'

// both countries and subdivisions are regular js arrays.

const AfghanistanByName = countries.find(country => country.name === 'Afghanistan')

/* returns
{ name: 'Afghanistan', a2: 'AF', a3: 'AFG', num: '004' }
*/

const AmericanSamoaByAlphaNumeric2 = countries.find(country => country.a2 === 'AS')
const AustraliaByAlphaNumeric3 = countries.find(country => country.a3 === 'AUS')
const AntarcticaByNumeric = countries.find(country => country.num === '010')

const BrasilianSubdivisions = subdivisions.filter(sub => sub.country === 'BR')

const AustrianSubdivisions = subdivisons.filter(sub => sub.country === 'AT')

/* returns
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
```

### changelog

#### 0.0.1

first publish

#### 0.0.2

- add full list of countries to docs
- update dependencies

#### 0.0.3

- update dependencies

#### 0.0.4

- fix git repo url in docs
- update dependencies

#### 0.0.5

- update dependencies

#### 0.0.6

- add typescript and @magic/lint
- update dependencies

#### 0.0.7 - unreleased

...

[npm-image]: https://img.shields.io/npm/v/@magic/iso-3166.svg
[npm-url]: https://www.npmjs.com/package/@magic/iso-3166
