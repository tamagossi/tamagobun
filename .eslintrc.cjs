module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:astro/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:mdx/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['@typescript-eslint', 'astro', 'react', 'react-hooks', 'jsx-a11y', 'mdx'],
	root: true,
	settings: {
		react: {
			version: 'detect',
		},
	},
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
		},
		{
			files: ['*.mdx'],
			parser: 'eslint-mdx',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
	],
	env: {
		browser: true,
		node: true,
	},
};
