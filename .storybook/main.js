const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
	core: {
		builder: 'webpack5',
	},
	stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/preset-scss',
	],
	framework: '@storybook/react',
	webpackFinal: async config => {
		config.resolve.plugins = [
			...(config.resolve.plugins || []),
			new TsconfigPathsPlugin({
				extensions: config.resolve.extensions,
			}),
		];
		return config;
	},
};
