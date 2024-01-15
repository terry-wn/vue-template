module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'plugin:prettier/recommended'],
  // 添加 vue文件解析器  解析template文件
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    // 组件名单词间使用连字符
    'vue/multi-word-component-names': 'off',
    // 组件名不要和html标签重名
    'vue/no-reserved-component-names': 'off',
    // 关闭无用的template属性检测
    'vue/no-useless-template-attributes': 'off',
    // 关闭v-html校验
    'vue/no-v-html': 'off',
    // 关闭未定义变量检测
    'no-undef': 'off',
    // 关闭未使用变量检测
    'no-unused-vars': 'off',
    // 关闭console检测
    'no-console': 'off',
    // 关闭debugger检测
    'no-debugger': 'off',
    // 关闭对NaN的检测
    'use-isnan': 'off',
    // 逗号风格，换行时在行首还是行尾
    'comma-style': ['error', 'last'],
    // 控制逗号前后的空格
    'comma-spacing': ['error', { before: false, after: true }],
    // 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': ['error', { before: true, after: true }],
    // 强制在单行代码块中使用一致的空格
    'block-spacing': ['error', 'always'],
    // if while function 后面的{必须与if在同一行
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // 代码格式化
    'prettier/prettier': 'warn',
    // 使用模板字符串
    'prefer-template': 'error',
    // 字符串使用单引号
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    // 语句强制分号结尾
    semi: ['error', 'always'],
    // 使用 === 替代 ==
    eqeqeq: ['error', 'always', { null: 'ignore' }],
  },
};
