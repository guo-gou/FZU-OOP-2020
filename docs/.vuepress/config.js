module.exports = {
    title: 'FZU OOP 2020',
    description: '福州大学 2020 年面向对象程序设计作业集散仓库',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
        }],
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css'
        }],
    ],
    serviceWorker: false,
    base:process.env.BASE_URL,
    markdown: {
        extendMarkdown: md => {
            md.set({
                html: true
            })
            md.use(require('markdown-it-katex'))
        }
    },
    themeConfig: {
        repo: 'jihuayu/FZU-OOP-2020',
        editLinks: true,
        docsDir: 'docs',
        locales: {
            '/': {
                nav: [
                    {
                        text: '班级博客',
                        link: 'https://edu.cnblogs.com/campus/fzu/2020OOP'
                    }
                ],
                sidebar: [
                    '使用手册',
                    '课程要求',
                    {
                        title: '作业',
                        collapsable: true,
                        children: [
                            '/works/',
                            '/works/work0',
                            '/works/work1',
                            '/works/work1ex'
                        ]
                    },
                    {
                        title: '思考题',
                        collapsable: true,
                        children: [
                            '/thinks/',
                            '/thinks/think0121',
                            '/thinks/think0122',
                            '/thinks/think0123',
                            '/thinks/think0125',

                        ]
                    },
                    {
                        title: '帮助',
                        collapsable: true,
                        children: [
                            '/help/',
                            '/help/tips',
                            '/help/base',
                            '/help/issues',
                            '/help/fork',
                            '/help/pr',
                            '/help/pr_tutorial',
                        ]
                    },
                    {
                        title: '学习',
                        collapsable: true,
                        children: [
                            '/learn/',
                            '/learn/learn1',
                        ]
                    },
                    {
                        title: '草案',
                        collapsable: true,
                        children: [
                            '/draft/',
                            '/draft/md_latex_tutorial',
                            '/draft/md_base',
                        ]
                    }
                ]
            }
            
        }
    }
};
