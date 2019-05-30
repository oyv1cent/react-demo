# react-demo
react demo with redux and redux-sage

可查看项目git commit message来学习

## start with npm

```
npm init
```

## install webpack

```
npm install webpack webpack-cli -D
```

> -D 是--save-dev的缩写，将安装包信息添加进devDependencies（开发依赖）
  -S 是--save的缩写，将安装包信息添加进dependencies（构建依赖）

## simply try to build

添加一个main.js文件，然后使用webpack将其打包至dist目录

## install react

```
npm install react react-dom -S
```

## install babel for jsx

```
npm install babel-loader babel-core babel-preset-env babel-preset-react -D
```

## install html-webpack-plugin

```
npm install html-webpack-plugin -D
```

html-webpack-plugin 为应用程序生成 HTML 一个文件，并自动注入所有生成的 bundle。

## webpack-dev-server

利用这个插件可以实现热替换，效果是，文件改动后会刷新页面。

## react-hot-loader（提升）

利用这个插件实现了热更新，效果是，文件改动后不刷新页面，只是局部替换。

## babel 6 => babel 7

将之前的babel6卸载了，替换为了babel7

```
npm install babel-loader @babel/core @babel/preset-env @babel/preset-react -D

```

## react and class

```
import { hot } from 'react-hot-loader/root'
import React from "react"

class App extends React.Component {
  test = () => {
    console.log(1)
  }
  render() {
    return (
      <div onClick={this.test}>enable sHMR</div>
    )
  }
}

export default hot(App)
```

报错信息：
```
ERROR in ./src/App.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: /Users/ouyangyuqing/Desktop/react-demo/src/App.jsx: Support for the experimental syntax 'classProperties' isn't currently enabled (5:8):
```

从报错信息里的提示
```
Add @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.
```

安装@babel/plugin-proposal-class-properties， 解决。

## webpack-merge

事实上，开发环境与生产环境需要不一样的webpack config，来做一些差异化处理。

比如对生产环境进行代码压缩等优化处理，在开发环境是不需要压缩代码的。

所以可以利用webpack-merge，设置一个base来共用一些配置，设置dev和prod来差异化配置。

```
npm install webpack-merge -D
```

## Scss

引入css预处理器

```
npm install sass-loader css-loader style-loader node-sass -D
```

css-loader主要是解析 css 文件

style-loader 主要是将 css 解析到 html页面 的 style 上



## autoprefixer

这个插件可以自动添加浏览器兼容前缀

```
npm install postcss-loader cssnano autoprefixer -D
```

## cross-env

发现打包的时候有些配置未生效，检查发现是检测环境变量有问题

```
npm install cross-env -D
```

## image

```
npm install file-loader url-loader -D
```

在webpack中引入图片需要依赖 url-loader
引入文件需要依赖file-loader

## react-router-dom

```
npm install react-router-dom -S
```

引入router
