<template>
  <el-popover
    class="popover-dialog"
    :placement="$attrs.placement||'top'"
    v-bind="$attrs"
    v-on="$listeners"
    v-model="visible">
    <p class="popover-content" v-if="popoverContentShow">{{popoverContent}}</p>
    <slot name="popover-content" :hide="hide"/>
    <div class="popover-btn" :style="popoverBtnStyle" v-if="showConfirmButton||showCancelButton">
      <el-button class="cancel-btn" type="text" size="mini"
                 v-if="showCancelButton" @click="cancel">{{cancelButtonText}}
      </el-button>
      <el-button class="confirm-btn" type="primary" size="mini"
                 v-if="showConfirmButton" @click="confirm">
        {{confirmButtonText}}
      </el-button>
      <slot name="popover-btn" :hide="hide"/>
    </div>
    <span class="reference" slot="reference">
      <el-button class="reference-btn" :style="btnStyle"
                 :size="btnSize" :type="btnType" :disabled="btnDisabled" v-if="btnShow">{{btnTxt}}
      </el-button>
      <slot name="reference" :hide="hide"/>
    </span>
  </el-popover>
</template>
<script>
  import { Button, Popover } from 'element-ui'

  export default {
    name: 'ElPopoverDialog',
    components: {'el-button': Button, 'el-popover': Popover},
    inheritAttrs: false,
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
      },
      confirmHide: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        visible: false
      }
    },
    methods: {
      cancel () {
        this.visible = false
        this.$emit('cancel')
      },
      confirm () {
        if (this.confirmHide) this.visible = false
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

