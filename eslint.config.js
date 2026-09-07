import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		ignores: ['dist/**', 'dist-web/**', 'coverage/**', 'node_modules/**'],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ['src/**/*.{ts,tsx}'],
		languageOptions: {
			globals: globals.browser,
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
			'prefer-const': 'error',
			eqeqeq: ['error', 'always'],
		},
	},
	{
		// Config files run in Node, not the browser.
		files: ['*.config.{ts,js}'],
		languageOptions: {
			globals: globals.node,
		},
	},
);
