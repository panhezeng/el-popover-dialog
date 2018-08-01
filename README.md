# el-popover-dialog

## 示例

[点击预览](https://panhezeng.github.io/el-popover-dialog/)

示例代码目录 /example

## 说明

基于element-ui的组件，把element-ui官网Popover的嵌套操作示例封装，实现一个轻量Dialog组件
首先请按element-ui官方文档安装element-ui，确保能正常使用element-ui

## 用法

### internal vue element-ui 方式

`npm i vue element-ui @panhezeng/el-popover-dialog -S`

#### 异步
```vue
<script>
  const ElPopoverDialog = () => import('@panhezeng/el-popover-dialog')
 
   export default {
     components: {ElPopoverDialog}
   }
</script>
```

#### 同步
```vue
<script>
    import Vue from 'vue'
    import ElPopoverDialog from '@panhezeng/el-popover-dialog'

    Vue.use(ElPopoverDialog)
</script>
```

### external vue element-ui 方式

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/element-ui@latest/lib/theme-chalk/index.css">
<script src="https://cdn.jsdelivr.net/npm/vue@latest/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/element-ui@latest/lib/index.js"></script>
```

`npm i @panhezeng/el-popover-dialog -S`

```javascript
// auto install
import '@panhezeng/el-popover-dialog'
```
or 
```html
<!--auto install-->
<script src="https://cdn.jsdelivr.net/npm/@panhezeng/el-popover-dialog@latest/dist/el-popover-dialog.min.js"></script>
```

## 编译

``` bash
# install dependencies
npm install

# 运行插件使用示例
npm run dev:example

# 编译插件
npm run build

# 发版
npm version patch
npm publish --access public

```

