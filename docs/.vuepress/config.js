module.exports = {
  title: 'Wick Vue',
  description: 'Vue UI库',
  serviceWorker: true,
  plugins: ['@vuepress/back-to-top'],
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', {rel: 'icon', href: '/logo.jpg'}],// 增加一个自定义的 favicon(网页标签的图标)
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
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
      {text: '组件', link: '/compos/'},
      {text: '开发文档', link: 'https://blog.yibi.host/Projects/record_of_wheels.html'},
      {text: 'github', link: 'https://github.com/OrangeSAM'},
    ],
    sidebar: {
      '/compos/': [
        {
          title: '指南',
          collapsable: false,
          sidebarDepth: 3,
          children: [
            'introduction',
            'quickStart'
          ]
        },
        {
          title: '组件',
          collapsable: false,
          sidebarDepth: 3,
          children: [
            'button'
          ]
        }
      ]
    }
  }
}