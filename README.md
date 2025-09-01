# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# This is my personal portfolio

### Objective

Learn how to use React, whith typescript, eslint and prettier

### Steps

<ol>
<li> 
<strong>Create de react app whit vite</strong>

`npm create @vite@latest `
select React
select Typescript
</li>
<li>
<strong> Add Eslint and Prettier</strong>

```
npm install --save-dev @typescript-eslint/eslint-plugin --legacy-peer-deps
npm install --save-dev  eslint  prettier  eslint-config-prettier  eslint-plugin-prettier @typescript-eslint/parser eslint-plugin-react  eslint-plugin-react-hooks  --legacy-peer-deps
```

</li>
<li>
<strong>Add Files for Eslint and prettier</strong>

```
.prettierrrc
{
  "singleQuote": true,
  "trailingComma": "all",
  "semi": true,
  "printWidth": 80
}

```

```
.prettierignore
node_modules
build
dist
coverage
```

```
.eslintrc.json
{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "react-app",
    "react-app/jest",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": ["@typescript-eslint", "react", "prettier"],
  "rules": {
    "prettier/prettier": "error"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

```
Add script in package json
{
  "lint": "eslint 'src/**/*.{ts,tsx}'",
  "format": "prettier --write 'src/**/*.{ts,tsx,js,jsx,json,css,scss,md}'"
}

```

</li>

<li>
<strong>Run format</strong>

```
npm run lint # Para ver errores de linting
npm run format # Para formatear automáticamente

```

</li>
<li>
<strong>Deploy gh-pages</strong>

```
npm install --save-dev gh-pages

```

</li>
<li>
<strong>Add to package json</strong>

```
"deploy": "gh-pages -d dist"

```

</li>
</ol>
