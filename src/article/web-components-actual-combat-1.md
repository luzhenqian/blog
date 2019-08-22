---
title: Web Components实战 一
date: 2019年8月14日
author: 卢振千
category: 编程
tags: JavaScript
description: Web Components已经诞生很久，一直没有得到广泛的应用。其实，WebComponents已经可以在实际项目中使用。
---

#### 为什么需要Web Components？

随着Web应用的发展，出现了越来越多的复杂大型Web应用。为了提高开发效率和维护性。最好的解决方案就是组件化。最主流的框架，诸如React、Vue、Angular等，都是组件化框架。可以说，Web Components是前端发展的主要方向之一。

#### Web Components的优点？

最大的优点就是原生支持，无需任何框架支撑，即写即用。

#### Web Components是否可以应用于实际项目中？

要看目标群体是怎样的。原生的写法仅支持较新版本的Chrome、FireFox、Safari和Opear。IE是不支持的。

#### 使用Web Components的场景？

由于Web Component目前还处于发展阶段，API并不是很完善和稳定。我们大多数情况下有更好的选择，如各大框架，React、Vue、Angular、Polymer等。所以，目前来说，使用WebComponents的最佳场景是在不能使用框架的情况下。比如在老旧的项目中、前后端未分离的开发模式下，只能使用后端模板引擎将页面渲染出来的场景。

#### Web Components的几个核心概念

- 自定义元素 Custom elements
- 影子DOM Shadow DOM
- HTML模板 HTML templates

#### 准备开发环境

前面我们提到，Web Components是原生支持的，所以开发不需要任何的环境。只需要创建如下目录结构即可。

![1565830691447](..\images\article\1565830691447.png)

```
-src
|- components
-index.html
```

#### 创建自定义元素

自定义元素的名命需要遵循规则，必须使用中横线名命，这样的目的是为了与原生标签区分。

假设我们需要一个按钮组件，名命为 i-button。

创建自定义元素的方式有两种，一种是函数，一种是类。但无论哪种方式创建的自定义元素，都必须继承HTMLElement。

下面我们先看一下类是如何实现的：在src/components目录下创建i-button.js文件，写创建一个 IButton 类。

```javascript
class IButton extends HTMLElement {
  constructor() {
    super();
  }
}
```

然后调用 customElements.define 方法注册自定义元素。这个方法的作用是将自定义元素名与对应的类进行绑定。当HTML解析遇到注册过的自定义元素时，会去调用对应的类创建实例，创建出的实例会替换到HTML中自定义元素的位置。

```js
customElements.define("i-button", IButton);
```

这样就可以使用 `i-button` 这个自定义元素了。所有的 `i-button` 元素都将会是 `IButton` 的实例。

#### 给自定义元素添加内容

由于元素 `i-button` 就是类 `IButton` 的实例，那么 `IButton` 内的 `this` 就指向 `i-button` 元素本身。

我们使用 `append` 添加一个按钮元素。

```javascript
class IButton extends HTMLElement {
  constructor() {
    super();
    const button = document.createElement("button");
    button.appendChild(document.createTextNode(`我是一个按钮`));
    this.append(button);
  }
}
```

#### HTML中使用自定义元素

在index.html中写入以下内容。

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Parcel Sandbox</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <div id="app">
      <i-button></i-button>
    </div>
    <script src="./src/components/i-button.js"></script>
  </body>
</html>
```

这样在浏览器中打开就能看到一个对应的按钮。![1565799119881](C:\Users\15753\AppData\Roaming\Typora\typora-user-images\1565799119881.png)

这样就实现了一个最简单的组件，我们可以美化一下这个按钮，添加一些style。

```javascript
class IButton extends HTMLElement {
  constructor() {
    super();
    const button = document.createElement("button");
    button.appendChild(document.createTextNode(`我是一个按钮`));
    const style = document.createElement("style");
    style.textContent = `
      button {
        padding: 0.5em 0.7em;
        background-color:  rgb(64, 169, 243); 
        color: white;
        border: none;
        border-radius: 4px;
        outline: none;
      }
      button:hover {
        background-color: rgb(102, 185, 244);
      }
    `;
    this.append(style, button);
  }
}
```

这是看到的效果是这样的。![1565831268795](C:\Users\15753\AppData\Roaming\Typora\typora-user-images\1565831268795.png)

我们可以在任何一个HTML文件中导入这个JavaScript文件，并使用`<i-button></i-button>`来复用它。

#### Template 模板元素

目前还存在一些问题。比如，使用document.createElement和document.createTextNode来创建元素，在页面复杂的情况下，会很繁琐。

React的解决方案是使用JSX语法糖，Vue的解决方案是使用模板。

原生的解决方案是使用`<template>`标签。

在html文件中添加template标签。

```html
<template id="i-button-template">
    <style>
        button {
            font-weight: 600;
            padding: 0.5em 0.7em;
            background-color: rgb(64, 169, 243);
            color: white;
            border: 2px solid rgb(102, 185, 244);
            border-radius: 4px;
            outline: none;
        }
        button:hover {
            background-color: rgb(102, 185, 244);
        }
    </style>
    <button>我是一个按钮</button>
</template>
```

将对应的class也改造一下。

```javascript
class IButton extends HTMLElement {
  constructor() {
    super();
    const templateEl = document.getElementById("i-button-template");
    const content = templateEl.content.cloneNode(true);
    this.appendChild(content);
  }
}
```

这样做的效果与之前的代码效果几乎相同。

template标签并不会被浏览器解析，它只当作模板使用。

template.content是获取template元素，Node.cloneNode方法可以克隆元素内的节点。最后的参数true表示深度克隆，这样将会把template元素内所有的节点全部克隆。

但这样HTML就会很庞大。此时最佳的解决方案就是innerHTML。我们可以把html中的template元素内容放到IButton类中，改造成这样：

```javascript
class IButton extends HTMLElement {
  constructor() {
    super();
    const templateEl = document.createElement("template");
    templateEl.innerHTML = `
      <style>
        button {
            font-weight: 600;
            padding: 0.5em 0.7em;
            background-color: rgb(64, 169, 243);
            color: white;
            border: 2px solid rgb(102, 185, 244);
            border-radius: 4px;
            outline: none;
        }
        button:hover {
            background-color: rgb(102, 185, 244);
        }
      </style>
      <button>我是一个按钮</button>
  `;
    const content = templateEl.content.cloneNode(true);
    this.appendChild(content);
  }
}
```

这样做的好处就是不再依赖于html中的template元素了。只需要引入一个js文件，就可以使用自定义的标签。这样很棒，但是同时也会带来问题，比如字符串内的元素和样式都无法使用代码高亮和关键字提示补全。唯一可以正常使用的就是web storm。

#### Shadow DOM 影子元素

##### 隔离样式

由于这样直接innerHTML会让自定义元素内的style和外部的style混淆，发生覆盖或者污染。使用Shadow元素，可以将自定义元素内的style样式与外部隔离开。

##### 元素隔离

shadow元素另一个重要的特性是可以屏蔽外部的JavaScript代码对shadow内部的元素进行操作。

将IButton类改造成这样。

```javascript
class IButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "closed" });
    const templateEl = document.createElement("template");
    templateEl.innerHTML = `
      <style>
        button {
            font-weight: 600;
            padding: 0.5em 0.7em;
            background-color: rgb(64, 169, 243);
            color: white;
            border: 2px solid rgb(102, 185, 244);
            border-radius: 4px;
            outline: none;
        }
        button:hover {
            background-color: rgb(102, 185, 244);
        }
      </style>
      <button>我是一个按钮</button>
  `;
    const content = templateEl.content.cloneNode(true);
    shadow.appendChild(content);
  }
}
```

#### Attrbuter参数传递

HTML元素的参数只能传递字符串，自定义元素也不例外。

假设我们例子中的按钮组件可以接受一个字符串作为按钮内部的名字，只需稍加改动，将template中的button改为：

```html
<button>${this.getAttribute("name")}</button>
```

然后在html中加入参数：

```html
<i-button name="确认"></i-button>
```

现在的显示效果为：![1565884772797](C:\Users\15753\AppData\Roaming\Typora\typora-user-images\1565884772797.png)

但我们更习惯这样写：

```html
<i-button>确认</i-button>
```

这种写法就不能再继续使用getAttribute这个API了。

#### 处理子元素

我们需要将子元素转换成对应的字符串，嵌入template模板中，来实现渲染效果。

获取子元素的API有2个，一个是Node.children，另一个是Node.childNodes。这两个API的区别是children只获取节点元素。而childNodes会获取所有的元素。我们明显要使用childrenNodes。

现在我们在i-button 标签内写东西，是没有效果的，你可以试一下。

为了实现这个功能，我们将button中的内容替换为this.childNodes。

```html
<button>${this.childNodes}</button>
```

这是渲染的结果是这样的：![1565887260711](C:\Users\15753\AppData\Roaming\Typora\typora-user-images\1565887260711.png)

而期望的结果是这样的：![1565886567986](C:\Users\15753\AppData\Roaming\Typora\typora-user-images\1565886567986.png)

简单的办法是这样：

```html
<button>${this.childNodes[0].textContent}</button>
```

但这个做法并没有考虑全面，当这个子元素集合不止一个子元素时，我们可能需要渲染多个子元素。

当然在button中我们并不推荐嵌套太多其它元素，但可能会有这种情况，比如嵌套一个i标签。

我们需要处理一下：

```javascript
const childEls = Array.prototype.map
	.call(this.childNodes, el => {
        if (el.nodeType === 1) {
            return el.outerHTML;
        }
        if (el.nodeType === 3) {
            return el.textContent;
        }
    })
    .join("");
```

nodeType的类型有很多，但这里对我们有意义的只有1和3。

1代表元素节点，3代表文本节点。利用outerHTML和textContent分别将元素节点和文本节点转换成字符串。再利用join将它们拼接起来，再把childEls放到button中就大功告成了。

```html
<button>${childEls}</button>
```
