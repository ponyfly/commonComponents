const componentsGroup = [
  {
    title: '组件',
    collapsable: false,
    children: [
      'imagePreview'
    ]
  }
]
module.exports = {
  base: '/commonComponents/',
  dest: 'public',
  title: 'sea后台公共库',
  description: 'just playing',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '接口', link: '/apis/' },
      { text: '组件', link: '/components/' },
      { text: '指令', link: '/directives/' },
      { text: '工具', link: '/utils/' },
    ],
    sidebarDepth: 0,
    sidebar: {
      '/components/': componentsGroup
    }
  }
}
