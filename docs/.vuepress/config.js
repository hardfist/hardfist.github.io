module.exports = {
	title: "hardfist blog",
	description: "hardfist's blog",
	base: "/",
	themeConfig: {
		nav: [
      {
				text: "笔记",
				items: [
					{
						text: "2018",
						link: "/2018/"
					},
					{
						text: "2019",
						link: "/2019/"
					}
				]
			},
			{ text: "GitHub", link: "https://github.com/hardfist/hardfist.github.io" }
		],
		sidebar: {
			"/2019/":[
				{
					title: "2019",
					collapsable: false,
					children: [
						"",
						"react-debug"
					]
				}
			],
			"/2018/": [
				{
					title: "2018",
					collapsable: false,
					children: [
            "",
            "node-debug",
					]
				}
			]
		},
		lastUpdated: "Last Updated"
	}
};
