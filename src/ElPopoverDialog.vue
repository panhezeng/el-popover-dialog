<template>
  <el-popover
    class="popover-dialog"
    style="font-size: 0px;"
    :placement="$attrs.placement || 'top'"
    v-bind="$attrs"
    v-on="$listeners"
    v-model="visible"
  >
    <p v-if="popoverContentShow" class="popover-content">
      {{ popoverContent }}
    </p>
    <slot name="popover-content" :hide="hide" />
    <div
      v-if="showConfirmButton || showCancelButton"
      class="popover-button"
      :style="popoverButtonStyle"
    >
      <el-button
        v-if="showCancelButton"
        class="cancel-button"
        type="text"
        size="mini"
        @click="cancel"
        >{{ cancelButtonText }}
      </el-button>
      <el-button
        v-if="showConfirmButton"
        class="confirm-button"
        type="primary"
        size="mini"
        @click="confirm"
      >
        {{ confirmButtonText }}
      </el-button>
      <slot name="popover-button" :hide="hide" />
    </div>
    <span class="reference" slot="reference">
      <el-button
        v-if="buttonShow"
        class="reference-button"
        :style="buttonStyle"
        :size="buttonSize"
        :type="buttonType"
        v-bind="$attrs"
        >{{ buttonTxt }}
      </el-button>
      <slot name="reference" :hide="hide" />
    </span>
  </el-popover>
</template>
<script>
import { Button, Popover } from "element-ui";

export default {
  name: "ElPopoverDialog",
  components: { "el-button": Button, "el-popover": Popover },
  inheritAttrs: false,
  props: {
    // popover相关配置
    popoverContentShow: {
      type: Boolean,
      default: true
    },
    popoverContent: {
      type: String,
      default: "确认要删除？"
    },
    popoverButtonStyle: {
      type: String,
      default: "text-align: right; margin: 0"
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
      default: "取消"
    },
    confirmButtonText: {
      type: String,
      default: "确定"
    },
    // 触发popover的按钮相关配置
    // 是否显示默认按钮，通常通过reference slot传入自定义触发元素，需要隐藏此按钮
    buttonShow: {
      type: Boolean,
      default: true
    },
    // 按钮文字
    buttonTxt: {
      type: String,
      default: "删除"
    },
    // 按钮样式，见el-button组件文档
    buttonType: {
      type: String,
      default: "text"
    },
    buttonSize: {
      type: String,
      default: ""
    },
    buttonStyle: {
      type: String,
      default: "color:#f56c6c; margin-right: 0 !important;"
    },
    confirmHide: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    cancel() {
      this.visible = false;
      this.$emit("cancel");
    },
    confirm() {
      if (this.confirmHide) this.visible = false;
      this.$emit("confirm");
    },
    // 如果点击通过popover-button slot传入popover的元素需要关闭popover，可以通过slot-scope调用此方法
    hide(cb) {
      this.visible = false;
      if (
        /^\[object [^F]*Function\]$/.test(Object.prototype.toString.call(cb))
      ) {
        cb();
      }
    }
  }
};
</script>
