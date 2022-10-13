const { getPosts, generatePaginationPages } = require('./theme/serverUtils')

async function config() {
    const pageSize = 10
    await generatePaginationPages(pageSize)
    return {
        title: '纾浚的生活随笔',
        description: '记录生活点滴。',
        lang: 'zh-CN',
        lastUpdated: true,
        outDir: '/dist',
        cleanUrls: 'without-subfolders',
        ignoreDeadLinks:true,
        themeConfig: {
            posts: await getPosts(),
            pageSize: pageSize,
            website: 'https://github.com/airene/vitepress-blog-pure', //copyright link
            // 评论的仓库地址
            comment: {
                repo: 'airene/vitepress-blog-pure',
                themes: 'github-light',
                issueTerm: 'pathname'
            },
            nav: [
                { text: 'Home', link: '/' },
                { text: 'Archives', link: '/pages/archives' },
                { text: 'Tags', link: '/pages/tags' },
                { text: 'About', link: '/pages/about' }
                // { text: 'Airene', link: 'http://airene.net' }  -- External link test
            ],
            //outline:[2,3],
            outlineTitle:'文章摘要',
            // socialLinks:[{ icon: 'github', link: 'https://github.com/airene/vitepress-blog-pure' }],
        },
        srcExclude: ['README.md'], // exclude the README.md , needn't to compiler

        // vite: {
        //     //build: { minify: false }
        //     server: { port: 5000 },
        // },
        /*
      optimizeDeps: {
          keepNames: true
      }
      */
    }
}

module.exports = config()
