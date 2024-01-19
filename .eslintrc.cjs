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
    'vue/multi-word-component-names': 0, // 关闭多个单词组成的组件名
    'vue/no-reserved-component-names': 0, // 关闭组件名不要和html标签重名
    'vue/no-useless-template-attributes': 0, // 关闭无用的template属性检测
    'vue/no-v-html': 0, // 关闭v-html校验
    'vue/no-mutating-props': 0, // 关闭禁止修改props
    'no-undef': 0, // 关闭未定义变量检测
    'no-unused-vars': 0, // 关闭未使用变量检测
    'no-console': 0, // 关闭console检测
    'no-debugger': 0, // 关闭debugger检测
    'no-array-constructor': 2, // 禁止使用数组构造器
    'no-class-assign': 2, // 禁止给类赋值
    'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
    'no-const-assign': 2, // 禁止修改const声明的变量
    'no-delete-var': 2, // 不能对var声明的变量使用delete操作符
    'no-dupe-args': 2, // 函数参数不能重复
    'no-dupe-class-members': 2, // 不允许类中出现重复的声明
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复
    'no-duplicate-case': 2, // switch中的case标签不能重复
    'no-empty-pattern': 2, // 禁止使用空解构模式
    'no-eval': 2, // 禁止使用eval
    'no-implied-eval': 2, // 禁止使用隐式eval
    'no-ex-assign': 2, // 禁止给catch语句中的异常参数赋值
    'no-extra-bind': 2, // 禁止不必要的函数绑定
    'no-extra-boolean-cast': 2, // 禁止不必要的bool转换
    'no-extra-parens': [2, 'functions'], // 禁止非必要的括号
    'no-func-assign': 2, // 禁止重复的函数声明
    'no-inner-declarations': [2, 'functions'], // 禁止在块语句中使用声明（变量或函数）
    'no-irregular-whitespace': 2, // 不能有不规则的空格
    'no-obj-calls': 2, // 不能调用内置的全局对象，比如Math() JSON()
    'no-redeclare': 2, // 禁止重复声明变量
    'no-return-assign': [2, 'except-parens'], // return 语句中不能有赋值表达式
    'no-self-assign': 2, // 不能自声明自己
    'no-self-compare': 2, // 不能自比较
    'no-sequences': 2, // 禁止使用逗号运算符
    'no-shadow-restricted-names': 2, // 不能使用保留字作为变量名
    'no-spaced-func': 2, // 函数调用时，函数名与()之间不能有空格
    'no-sparse-arrays': 2, // 禁止稀疏数组
    'no-this-before-super': 2, // 在调用super()之前不能使用this或super
    'no-throw-literal': 2, // 禁止抛出字面量错误 throw "error";
    'no-trailing-spaces': 2, // 一行结束后面不要有空格
    'no-undef-init': 2, // 变量初始化时不能直接给它赋值为undefined
    'no-unexpected-multiline': 2, // 避免多行表达式
    'no-unmodified-loop-condition': 2, // 禁止出现未使用过的变量
    'no-useless-call': 2, // 禁止不必要的call和apply
    'no-useless-computed-key': 2, // 禁止在对象中使用不必要的计算属性
    'no-unreachable': 0, // 不能有无法执行的代码
    'no-whitespace-before-property': 2, // 禁止属性前有空白
    'no-with': 2, // 禁用with
    'use-isnan': 0, // 禁止比较时使用NaN，只能用isNaN()
    'comma-style': [2, 'last'], // 逗号风格，换行时在行首还是行尾
    'comma-spacing': [2, { before: false, after: true }], // 控制逗号前后的空格
    'arrow-spacing': [2, { before: true, after: true }], // 箭头函数前后要有空格
    'block-spacing': [2, 'always'], // 单行代码块两边加空格
    'brace-style': [2, '1tbs', { allowSingleLine: true }], // if、function后面的{必须与if在同一行
    'prefer-template': 2, // 使用模板字符串
    'prefer-const': 2, // 使用const
    'prettier/prettier': 1, // prettier 格式化
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }], // 字符串使用单引号
    semi: [2, 'always'], // 强制使用分号
    eqeqeq: [2, 'always', { null: 'ignore' }], // 要求使用 === 和 !==
  },
};
