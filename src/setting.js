{
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  //vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // #每次保存的时候自动格式化
  "editor.formatOnSave": true,
  // #每次保存的时候将代码按eslint格式进行修复
  "eslint.autoFixOnSave": true,
  // 添加 vue 支持
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  // //  #让prettier使用eslint的代码格式进行校验
  // "prettier.eslintIntegration": true,
  // #去掉代码结尾的分号
  "prettier.semi": false,
  // #使用带引号替代双引号
  "prettier.singleQuote": true,
  // #让函数(名)和后面的括号之间加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  // #这个按用户自身习惯选择
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  // #让vue中的js按编辑器自带的ts格式进行格式化
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned"
      // #vue组件中html代码格式化样式
    }
  },
  // // 格式化stylus, 需安装Manta's Stylus Supremacy插件
  // "stylusSupremacy.insertColons": false, // 是否插入冒号
  // "stylusSupremacy.insertSemicolons": false, // 是否插入分号
  // "stylusSupremacy.insertBraces": false, // 是否插入大括号
  // "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
  // "stylusSupremacy.insertNewLineAroundBlocks": false, // 两个选择器中是否换行
  // "explorer.confirmDelete": false,
  // "workbench.editor.enablePreview": false,
  "path-autocomplete.excludedItems": {
    "**/*.js": {
      "when": "**/*.ts"
    }, // ignore js files if i'm inside a ts file
    "**/*.map": {
      "when": "**"
    }, // always ignore *.map files
    "**/{.git,node_modules}": {
      "when": "**"
    } // always ignore .git and node_modules folders
  },
  "path-autocomplete.pathMappings": {
    "@/*": ["src/*"]
  },
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.formatOnSave": true
  },
  "editor.quickSuggestions": {
    "other": true,
    "comments": true,
    "strings": true
  },
}