import { countries } from '../src/index.mjs'

export const state = {
  title: '@magic/mime-types',
  description: [
    'mime-db mimetypes that have file extensions.',
    'exports a key => value store, where key = extension and value = mime/type',
  ],
  logotext: '@magic/mime-types',
  menu: [
    { to: '/#install', text: 'install' },
    { to: '/#usage', text: 'usage' },
    { to: '/full/', text: 'full' },
    { to: '/#source', text: 'source' },
  ],
  countries,
}
