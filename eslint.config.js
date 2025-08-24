// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  astro: true,
  ignores: [
    './src/overrides/Search.astro',
    '.specstory',
  ],
  rules: {
    'regexp/no-unused-capturing-group': 'off',
  },
})
