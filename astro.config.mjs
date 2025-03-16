import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeFlexoki from 'starlight-theme-flexoki'

export default defineConfig({
	site: 'https://www.ao-x.cn', // 设置网站的基础 URL
	integrations: [
		starlight({
			title: '云上翱祥 | AO-X', // 设置网站标题
			description: '让每一份爱心触手可及', // 设置网站描述
			//logo: { // 在导航栏中设置一个 logo 图片
				//light: './src/assets/winx-light.svg', // 导航栏中浅色模式 logo 图片
				//dark: './src/assets/winx-dark.svg',}, // 导航栏中深色模式 logo 图片
			tableOfContents: { // 配置每个页面右侧显示的目录
				minHeadingLevel: 2, // 从 <h2> 开始
				maxHeadingLevel: 4, }, // 到 <h4> 结束
			/*editLink: { // 启用 “编辑此页” 链接
				baseUrl: 'https://github.com/ao-x/www.ao-x.cn/edit/develop/', // 设置 “编辑此页” 链接
			},*/
			locales: { // 设置多语言
				root: { // 不用设置语言目录
					label: '简体中文', // 设置网站支持简体中文作为语言
					lang: 'zh-CN', // 向浏览器告知页面语言
					dir: 'ltr', // 设置网站为从左到右
				},
			},
			defaultLocale: 'zh-CN', // 为网站设置简体中文作为默认语言
			social: { // 社交媒体账户详情
				github: 'https://github.com/winx-ipfs/Mirror-Web', // 添加 GitHub 社交媒体账户详情
			},
			// customCss: [ // 使用 CSS 文件来自定义 Starlight 网站的外观和风格
			// 		'./src/custom-styles.css', // 使用本地css
			// 		'@fontsource/roboto' // 使用模块css
			// ],
			expressiveCode: { // 代码块设置
				styleOverrides: { // 代码块样式
					borderRadius: '0.5rem' }, // 设置 0.5rem 的圆角
			},
			pagefind: true, // 开启网站搜索
			prerender: true, // 让网站为静态生成
			head: [ // 自定义标签到 Starlight 网站的 <head> 中
				{
					tag: 'link',
					attrs: {
						rel: "sitemap",
						href: '/sitemap-index.xml',
					},
				},
				{
					tag: 'script',
					attrs: {
						src: '/js/clarity.js',
					},
				},
			],
			lastUpdated: false, // 控制页脚是否显示页面上次更新的时间
			pagination: false, // 定义页脚是否应包含上一页和下一页的链接
			favicon: '/favicon.svg', // 设置网站的默认 favicon 的路径
			titleDelimiter: '|', // 设置在页面的 <title> 标签里页面标题和网站标题之间的分隔符
			disable404Route: false, // 自定义 404 页面
			components: { // 提供组件的路径来覆盖 Starlight 的默认实现
				// SocialLinks: './src/components/MySocialLinks.astro',
			},
			plugins: [ // 使用自定义插件扩展 Starlight
				starlightThemeFlexoki(), // 使用 starlight-theme-flexoki 主题
			],
			credits: true, // 启用网站页脚显示 “基于 Starlight 构建” 的链接。
			sidebar: [ // 配置网站的侧边栏导航项目
				{
					label: '首页',
					link: '/',
				},
				{
					label: '获取帮助',
					link: '/help',
				},
				{
					label: '已获支持的项目',
					items: [
						{
							label: "工具",
							collapsed: true,
							items: [
								{label: 'WinX',link: '/project/tools/winx',},
								{label: '慕讯公益加速器',link: '/project/tools/mxfree',},
							],
						},
						{
							label: "游戏",
							collapsed: true,
							items: [
								{label: 'ER2K',link: '/project/games/er2k',},
							],
						},
					],
				},
				{
					label: '加入我们',
					link: '/join',
				},
				{
					label: '关于我们',
					link: '/about',
				},
			],
		}),
	],
});