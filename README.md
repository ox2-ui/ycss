# ycss
![NPM version](https://img.shields.io/npm/v/@ox2/ycss.svg?style=flat)

Low-level CSS toolkit.

## Features

* **Human Readable** Easy to understand without reading the docs.
* **No Side Effects** One class does one thing.
* **Composable** Classes compose well with each other.

## Usage
You can use it in a webpack project by importing it `import '@ox2/ycss'` in your top level js file like `index.js` or in a `.storybook/config.js` if your using [React Storybook](https://github.com/storybooks/react-storybook).

Then use it with your react components:
```js
<MyComponent className"padding:10">
 <MyOtherComponent className"text:bold text:center" />
</MyComponent>
```
Or any html based templating engine:
```html
<div class="padding:10">
 <div class="text:bold text:center"></div>
</div>
```



## Installation
Install using [npm](http://npmjs.com):
```
npm install @ox2/ycss --save
```
Install using [yarn](http://yarnpkg.com):
```
yarn add @ox2/ycss
```

## Change Log
Changes are tracked in the [CHANGELOG.md](https://github.com/ox2/ycss/tree/master/CHANGELOG.md)

## Disabling !important
By default, ycss will append !important to style definitions. This is intended to make integrating with a pre-existing codebase easier. If you'd like to avoid this behaviour, use `import '@ox2/ycss/no-important/index.css'` Otherwise, usage is the same.

## License
[MIT](https://github.com/ox2/ycss/tree/master/LICENSE)
