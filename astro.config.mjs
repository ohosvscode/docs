// @ts-check
import netlify from '@astrojs/netlify'
import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import unocss from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [
    unocss(),
    starlight({
      title: 'Arkcode',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ohosvscode' }],
      sidebar: [
        { label: 'Naily\'s ArkTS Support', autogenerate: { directory: 'arkts' } },
      ],
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
    }),
  ],
})
