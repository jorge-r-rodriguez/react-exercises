module.exports = {
  root: true,
  env: { browser: true, es2022: true, es6: true, node: true, },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
		'plugin:import/react-native',
		'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
		'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh','@typescript-eslint', 'import','prettier'],
	parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
		'react-hooks/exhaustive-deps': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
		'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        semi: true,
        trailingComma: 'es5',
        printWidth: 120,
        tabWidth: 2,
        arrowParens: 'always',
        bracketSpacing: true,
        overrides: [
          {
            files: '*.html',
            options: { parser: 'babel' },
          },
        ],
      },
    ],
		'react/display-name': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
		'class-methods-use-this': 'off',
    'import/default': 'error',
    'import/extensions': [
      'error',
      'never',
      {
        ignorePackages: true,
        json: 'always',
        md: 'always',
        svg: 'always',
        tag: 'always',
      },
    ],
    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
		'max-classes-per-file': 'off',
		'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash.isequal',
            message:
              'Lodash modularised (and lodash < 4.17.11) have CVE vulnerabilities. Please use tree-shakeable imports like lodash/xxx instead',
          },
          {
            name: 'lodash.uniqueId',
            message:
              'Lodash modularised (and lodash < 4.17.11) have CVE vulnerabilities. Please use tree-shakeable imports like lodash/xxx instead',
          },
          {
            name: 'lodash.mergewith',
            message:
              'Lodash modularised (and lodash < 4.17.11) have CVE vulnerabilities. Please use tree-shakeable imports like lodash/xxx instead',
          },
          {
            name: 'lodash.pick',
            message:
              'Lodash modularised (and lodash < 4.17.11) have CVE vulnerabilities. Please use tree-shakeable imports like lodash/xxx instead',
          },
        ],
        // catch-all for any lodash modularized.
        // The CVE is listed against the entire family for lodash < 4.17.11
        patterns: ['lodash.*'],
      },
    ],
		'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
		'react/jsx-fragments': 'off',
		'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowBind: true,
        allowFunctions: true,
        ignoreDOMComponents: true,
        ignoreRefs: true,
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-unescaped-entities': 'off',
		'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
  },
	settings: {
    react: {
      version: 'detect',
    },
    'import/core-modules': ['enzyme'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx', '.mjs', '.d.ts'],
        paths: ['node_modules/', 'node_modules/@types/'],
      },
    },
  },
	overrides: [
    {
      files: ['**/*.tsx', '**/*.ts','**/*.js', '**/*.jsx'],
      rules: {
        'react/require-default-props': 'off',
        'react/prop-types': 'off',
        'react/forbid-prop-types': 'off',
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'vars-on-top': 'off',
        'no-var': 'off',
        'spaced-comment': 'off',
      },
    },
  ],
}
