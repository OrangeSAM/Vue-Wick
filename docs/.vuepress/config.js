module.exports = {
  title: 'Wick',
  description: 'Vue UI库',
  serviceWorker: true,
  plugins: ['@vuepress/back-to-top'],
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', {rel: 'icon', href: '/logo.jpg'}],// 增加一个自定义的 favicon(网页标签的图标)
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.jpg' }],
    ['link', { rel: 'mask-icon', href: '/logo.jpg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/logo.jpg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  // 这是部署到github相关的配置
  markdown: {
    // 代码块显示行号
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4']
  },
  evergreen: true,
  home: true,
  themeConfig: {
    smoothScroll: true,
    lastUpdated: '最后更新于',
    // 导航栏配置
    nav: [
      {text: '技术学习', link: '/LearnTech/'},
      {text: '项目记录', link: '/Projects/'},
    ]
  }
}