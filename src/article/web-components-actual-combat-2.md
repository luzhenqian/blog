---
title: Web Components实战 二
date: 2019年8月21日
author: 卢振千
category: 编程
tags: JavaScript
description: Web Components已经诞生很久，一直没有得到广泛的应用。其实，WebComponents已经可以在实际项目中使用。
---

上一篇中留下了一些未完成的工作。

接下来我打算加入生命周期。

custom element原生的生命周期有4个。

connectedCallback、disconnectedCallback、adoptedCallback、attributeChangedCallback。

它们分别是 被加入到页面时，从页面删除时，被移动到新文档时和参数发生变化时，自动触发的函数.

考虑平时的应用场景,最常用的应该只有attributeChangedCallback.



比如props的问题

全局共享状态



但这样还是存在大量冗余代码。



我们可以使用类似于Vue的写法完成组件。



开发框架。



使用typescript+webpack开发框架。

