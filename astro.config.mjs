// @ts-check
import netlify from '@astrojs/netlify'
import starlight from '@astrojs/starlight'
import mermaid from 'astro-mermaid'
import { defineConfig } from 'astro/config'
import unocss from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [
    mermaid({
      theme: 'forest',
      autoTheme: true,
    }),
    unocss(),
    starlight({
      title: 'Arkcode',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ohosvscode' }],
      favicon: '/favicon.png',
      sidebar: [
        { label: 'Naily\'s ArkTS Support', autogenerate: { directory: 'arkts' } },
        { label: 'Twoslash for ArkTS', autogenerate: { directory: 'twoslash' } },
        { label: 'Electron on HarmonyOS PC', autogenerate: { directory: 'electron' } },
      ],
      customCss: ['./src/styles/custom.css'],
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      plugins: [

      ],
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['mermaid'],
    },
  },
})
