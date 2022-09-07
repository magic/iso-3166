import { deep, is } from '@magic/test'

import { countries } from '../src/index.mjs'

export default deep.flatten(
  countries.map(country => [
    { fn: country.name, expect: is.str, info: `.name of ${country.name} is a string` },
    { fn: country.a2, expect: is.str, info: `.a2 of ${country.name} is a string` },
    { fn: country.a2, expect: is.len.eq(2), info: `.a2 of ${country.name} has length 2` },
    { fn: country.a3, expect: is.len.eq(3), info: `.a3 of ${country.name} has length 3` },
    { fn: country.a3, expect: is.len.eq(3), info: `.a3 of ${country.name} has length 3` },
    { fn: parseInt(country.num), expect: is.num, info: `.num of ${country.name} is parseIntable` },
  ]),
)
