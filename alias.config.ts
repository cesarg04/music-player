import { resolve } from 'path';

const alias_path = [
    { find: '@', replacement: resolve(__dirname, "src") },
    { find: '@shared', replacement: resolve(__dirname, "src/shared") },
    {
		find: "@components",
		replacement: resolve(__dirname, "src/shared/components"),
	},
    { find: '@public', replacement: resolve(__dirname, "src/public") }
]


export default alias_path;