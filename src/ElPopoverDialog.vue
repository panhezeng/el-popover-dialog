<template>
  <el-popover
    class="popover-dialog"
    :placement="$attrs.placement||'top'"
    v-bind="$attrs"
    v-model="visible">
    <p class="popover-content" v-if="popoverContentShow">{{popoverContent}}</p>
    <slot name="popover-content"/>
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
      <slot name="reference"/>
    </span>
  </el-popover>
</template>
<script>
  import Vue from 'vue'
  import { Button, Popover } from 'element-ui'

  Vue.use(Button)
  Vue.use(Popover)

  export default {
    name: 'ElPopoverDialog',
    props: {
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
      btnShow: {
        type: Boolean,
        default: true
      },
      btnDisabled: {
        type: Boolean,
        default: false
      },
      btnTxt: {
        type: String,
        default: '删除'
      },
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
        this.visible = false
        this.$emit('confirm')
      },
      hide (cb) {
        this.visible = false
        if (Object.prototype.toString.call(cb) === '[object Function]') {
          cb()
        }
      }
    }
  }
</script>

