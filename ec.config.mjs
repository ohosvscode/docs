import ecTwoSlash from '@arkts/twoslash-expressive-code'
import { defineEcConfig } from '@astrojs/starlight/expressive-code'
import etsTmLanguageJson from './ets.tmLanguage.json' with { type: 'json' }

export default defineEcConfig({
  plugins: [
    ecTwoSlash(),
  ],
  shiki: {
    langs: [
      'ts',
      {
        ...etsTmLanguageJson,
        name: 'ets',
        aliases: ['arkts'],
      },
    ],
  },
})
