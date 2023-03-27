module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jquery: true,
    amd: true,
    commonjs: true
  },
  globals: {
    process: false,
    require: false,
    module: false,
    wx: false,
    my: false,
    window: false,
    ant: false,
    hx: false,
    AlipayJSBridge: false,
    vi: false,
    it: false,
    describe: false,
    expect: false
  },
  extends: [
    'standard',
    'eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  // plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    warnOnUnsupportedTypeScriptVersion: false,
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: { modules: true }
  },
  overrides: [
  ],
  rules: {
    'comma-dangle': [2, 'only-multiline'],
    camelcase: 0,
    // 'no-console': 0,
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'standard/no-callback-literal': 0,
    // '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-types': 0,
  },
  settings: {
  }
}
