import tseslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-config-prettier';

export default [
	{ ignores: ['node_modules/**', 'lib/**', 'docs/**', '**/*.config.*'] },
	...tseslint.configs['flat/recommended'],
	{
		files: ['**/*.ts'],
		rules: {
			'@typescript-eslint/explicit-module-boundary-types': [
				'error',
				{ allowArgumentsExplicitlyTypedAsAny: true },
			],
		},
	},
	prettier,
];
