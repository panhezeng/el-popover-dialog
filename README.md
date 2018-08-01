# el-popover-dialog

## 示例

[点击预览](https://panhezeng.github.io/el-popover-dialog/)

示例代码目录 /example

## 说明

基于element-ui的组件，把element-ui官网Popover的嵌套操作示例封装，实现一个轻量Dialog组件
首先请按element-ui官方文档安装element-ui，确保能正常使用element-ui

```vue
<script>
  export default {
    props: {
      // popover相关配置
      popoverContentShow: {
        type: Boolean,
        default: true
      },
      popoverContent: {
        type: String,
        default: '确认要删除？'
      },
      popoverBtnStyle: {
        type: String,
        default: 'text-align: right; margin: 0'
      },
      showCancelButton: {
        type: Boolean,
        default: true
      },
      showConfirmButton: {
        type: Boolean,
        default: true
      },
      cancelButtonText: {
        type: String,
        default: '取消'
      },
      confirmButtonText: {
        type: String,
        default: '确定'
      },
      // 触发popover的按钮相关配置
      // 是否显示默认按钮，通常通过reference slot传入自定义触发元素，需要隐藏此按钮
      btnShow: {
        type: Boolean,
        default: true
      },
      // 是否禁用按钮
      btnDisabled: {
        type: Boolean,
        default: false
      },
      // 按钮文字
      btnTxt: {
        type: String,
        default: '删除'
      },
      // 按钮样式，见el-btn组件文档
      btnType: {
        type: String,
        default: 'text'
      },
      btnSize: {
        type: String,
        default: ''
      },
      btnStyle: {
        type: String,
        default: 'color:#f56c6c; margin-right: 0 !important;'
      }
    },
    methods: {
      cancel () {
        this.visible = false
        this.$emit('cancel')
      },
      confirm () {
        this.visible = false
        this.$emit('confirm')
      },
      // 如果点击通过popover-btn slot传入popover的元素需要关闭popover，可以通过slot-scope调用此方法
      hide (cb) {
        this.visible = false
        if (Object.prototype.toString.call(cb) === '[object Function]') {
          cb()
        }
      }
    }
  }
</script>
```

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

##### export default components
```vue
<script>
    import ElPopoverDialog from '@panhezeng/el-popover-dialog'

    export default {
      components: {ElPopoverDialog}
    }
</script>
```

##### Vue.use
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

