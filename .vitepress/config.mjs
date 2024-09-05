import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepress-hub/',
  title: "ChatParts",
  description: "Procedure of using Chat-Parts",
  head: [['link', { rel: 'icon', href: '/icon.png' }]],

  themeConfig: {
    siteTitle: 'Chat-Parts',
    logo: "/icon.png",
    outlineTitle: "Page Navigation",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    docFooter: { 
      prev: 'prev', 
      next: 'next' 
    },

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
          svg: '/igem-logo-light.svg'
        },
        link: 'https://igem.org/'
      }
    ],
    footer: {
      message: 'Developed by XJTLU-Software 2024',
      copyright: 'Copyright © 2024 Chat-Parts'
    }
  }
})
