import fs from 'node:fs'
import etsTwoSlash from '@arkts/twoslash-expressive-code'
import { defineEcConfig } from '@astrojs/starlight/expressive-code'
import ecTwoSlash from 'expressive-code-twoslash'

export default defineEcConfig({
  plugins: [
    etsTwoSlash(),
    ecTwoSlash({
      twoslashOptions: {
        compilerOptions: {
          lib: ['/lib.es2021.d.ts', '/lib.dom.d.ts'],
          jsx: 4,
        },
      },
    }),
  ],
  shiki: {
    langs: [
      'ts',
      {
        ...JSON.parse(fs.readFileSync('./ets.tmLanguage.json', 'utf-8')),
        name: 'ets',
        aliases: ['arkts'],
      },
    ],
  },
})
