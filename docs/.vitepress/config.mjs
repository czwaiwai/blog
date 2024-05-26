import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "歪歪的学习空间",
  description: "日常记录一些开发时遇到的一些问题",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'javascript相关', link: '/javascript/' },
      { text: 'linux相关', link: '/linux/' },
      { text: 'git相关', link: '/git/'}
    ],

    sidebar: {

      '/javascript/': [{
        text: 'javascript相关',
        items: [
          {text: 'express 子域名seesion共享实验', link: '/javascript/subdomain' },
          {text: 'vscode设置', link: '/javascript/vscode' },
          {text: 'webpack配置', link: '/javascript/webpack' },
        ]
      }],
      '/linux/': [{
        text: 'linux相关',
        items: [
          {text: 'docker 的学习', link: '/linux/docker' },
          {text: 'mongodb常用命令', link: '/linux/mongodb' },
          {text: 'mysql安装及启动', link: '/linux/mysql' },
          {text: 'nginx配置文件', link: '/linux/nginx' },
        ]
      }]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/czwaiwai' }
    ]
  }
})
