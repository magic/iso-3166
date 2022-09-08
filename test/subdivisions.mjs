import { deep, is } from '@magic/test'

import { countries, subdivisions } from '../src/index.mjs'

const mLog = (i, sub) => i === 0 && console.log(sub)

const tests = subdivisions.map(sub => [
  { fn: sub.name, expect: is.str, info: `.name of ${sub.name} is a string` },
  { fn: sub.type, expect: is.str, info: `.type of ${sub.name} is a string` },
  { fn: sub.code, expect: is.str, info: `.code of ${sub.name} is a string` },
  {
    fn: sub.code,
    expect: t => t.length >= 1 && t.length <= 3,
    info: `.code of ${sub.name} is between 2 and 3 characters long: ${sub.code}`,
  },
  { fn: sub.country, expect: is.str, info: `.country of ${sub.name} is a string` },
  { fn: sub.country, expect: is.len.eq(2), info: `.country of ${sub.name} has length 2` },
  { fn: sub.country, expect: is.len.eq(2), info: `.country of ${sub.name} has length 2` },
  {
    fn: countries.some(c => c.a2 === sub.country),
    info: `${sub.name} has a country with a2: ${sub.country}`,
  },
  {
    fn: sub.alt,
    expect: t => is.undef(t) || is.objectNative(t) || is.str(t),
  },
])

export default deep.flatten(tests)
