// @ts-check
import netlify from '@astrojs/netlify'
import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [
    starlight({
      title: 'Arkcode',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ohosvscode' }],
      sidebar: [
        { label: 'Naily\'s ArkTS Support', autogenerate: { directory: 'arkts' } },
      ],
    }),
  ],
})
