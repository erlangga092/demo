import path from 'path';

export default {
	postcss: {
		plugins: {
			'postcss-nested': {}
		}
	},
	extend(config, { isDev, isClient }) {
		config.node = {
			fs: 'empty'
		}
	}
}