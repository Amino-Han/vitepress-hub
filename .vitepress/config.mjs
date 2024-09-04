import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vuepress-starter/',
  title: "ChatParts",
  description: "Procedure of using Chat-Parts",
  head: [['link', { rel: 'icon', href: '/vuepress-starter/icon.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      {
        icon: {
          svg: '<svg t="1725437992768" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3450" width="200" height="200"><path d="M298.666667 512a42.666667 42.666667 0 0 1 42.666666-42.666667h341.333334a42.666667 42.666667 0 0 1 0 85.333334H341.333333a42.666667 42.666667 0 0 1-42.666666-42.666667z" fill="#292929" p-id="3451"></path><path d="M256 384a128 128 0 0 0 0 256h128a42.666667 42.666667 0 0 1 0 85.333333H256A213.333333 213.333333 0 1 1 256 298.666667h128a42.666667 42.666667 0 1 1 0 85.333333H256zM597.333333 341.333333a42.666667 42.666667 0 0 1 42.666667-42.666666h128a213.333333 213.333333 0 0 1 0 426.666666h-128a42.666667 42.666667 0 1 1 0-85.333333h128a128 128 0 1 0 0-256h-128a42.666667 42.666667 0 0 1-42.666667-42.666667z" fill="#292929" p-id="3452"></path></svg>'
        },
        link: 'https://2024.igem.wiki/xjtlu-software/index.html'
      }
    ]
  }
})
