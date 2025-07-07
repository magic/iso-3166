// import { countries } from '../../src/index.mjs'

export const View = (state) => [
  h3('Full List'),

  p(`There are ${state.countries.length} countries in this list`),

  ul([
    state.countries.map(country => 
      li([
        h3(country.name),

        p(['{ ', Object.entries(country).map(([k, v]) => span(`${k}: '${v}', `)), ' }']),
      ])),
    ])
  ]