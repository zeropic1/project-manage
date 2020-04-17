export const data = {
    steps1: {
        stepList: [
            "创建本地react项目",
            {
                title: "Step2 安装webpack和babel的dev依赖项",
                subTitle: "用于1.Babel进行代码转换2.使用Webpack Dev Server进行本地服务"
            },
            {
                title: "Step3 修改package.json",
                subTitle: "通过 npm start 启动我们的开发环境"
            },
            "创建我们的组件库的文件夹",
            "创建测试组件库例子的文件夹",
            {
                title: "Step5 设置Webpack,添加webpack.config.js",
                subTitle: "1. 通过bable-loader转译.js和.jsx文件 2. 通过css-loader和style-loader解决样式依赖 3. 使用html-webpack-plugin导入scripts 4. 本地服务端口号设置为3001"
            },
            {
                title: "Step6.1 修改package.json",
                subTitle: "设置发布后npm导入使用的入口文件"
            },
            {
                title: "Step6.2 修改package.json",
                subTitle: "使用peerDependency让npm在发布的程序包中不包括React，这减小了程序包的大小，并避免了在用户目标项目中具有多个版本的React的灾难。"
            },
            {
                title: "Step6.3 修改package.json",
                subTitle: "添加一个transpile脚本，使用该脚本使Babel转换组件源文件，并将所有assets（例如.css文件）复制到名为lib的目标文件夹中"
            },
            {
                title: "Step6.4 修改package.json",
                subTitle: "添加一个prepublishOnly脚本，便于在每次使用npm publish发布时自动执行transpile脚本"
            },
            "发布到npm"
        ],
        contentList: [{
                code: `
                mkdir react-component
                cd react-component
                npm init
                npm i react react-dom -D
                `
            },
            "npm i webpack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader babel-core babel-loader babel-preset-env babel-preset-react -D",
            {
                code: `
                {
                    "name": "react-component",
                    "version": "1.0.0",
                    "description": "",
                    "main": "index.js",
                    "files": [
                        "lib"
                    ],
                    "scripts": {
                     "test": "echo "Error: no test specified" && exit 1",
                     "start": "webpack-dev-server --mode development"
                    },
                    "author": "",,
                    "license": "ISC",
                    "devDependencies": {
                      "babel-core": "^6.26.0",
                      "babel-loader": "^7.1.4",
                      "babel-preset-env": "^1.6.1",
                      "babel-preset-react": "^6.24.1",
                      "css-loader": "^0.28.11",
                      "html-webpack-plugin": "^3.2.0",
                      "react": "^16.3.2",
                      "react-dom": "^16.3.2",
                      "style-loader": "^0.20.3",
                      "webpack-dev-server": "^3.1.3"
                    }
                }
                `
            },
            require('./imgs/component-dir.png'),
            require('./imgs/example-dir.png'),
            {
                code: `
                /*** webpack.config.js ***/
                const path = require('path');
                const HtmlWebpackPlugin = require("html-webpack-plugin");
                const htmlWebpackPlugin = new HtmlWebpackPlugin({
                    template: path.join(__dirname, "examples/index.html"),
                    filename: "./index.html"
                });
                module.exports = {
                    entry: path.join(__dirname, "examples/index.jsx"),
                    module: {
                        rules: [{
                                test: /\\.(js|jsx)$/,
                                use: "babel-loader",
                                exclude: /node_modules/
                            },
                            {
                                test: /\\.css$/,
                                use: ["style-loader", "css-loader"]
                            }
                        ]
                    },
                    plugins: [htmlWebpackPlugin],
                    resolve: {
                        extensions: [".js", ".jsx"]
                    },
                    devServer: {
                        port: 3001
                    }
                };
                `
            },
            {
                code: `
              "main": "./lib/index.js"
              `
            },
            {
                code: `
                "peerDependencies": {
                    "react": "^16.13.1",
                    "react-dom": "^16.13.1",
                },
                `
            },
            {
                code: `
                "scripts": {
                    ...
                    "transpile": "babel src/component -d lib --copy-files",
                },
            `
            },
            {
                code: `
                "scripts": {
                    ...
                    "prepublishOnly": "npm run transpile"
                },
            `
            },
            {
                code: `
                npm login
                npm publish
                `
            }
        ]
    },
}