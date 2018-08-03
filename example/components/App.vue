<template>
  <div id="app">
    <el-popover-dialog @confirm="confirm"/>

    <el-popover-dialog class="icon-delete" :btn-show="false" @confirm="confirm">
      <i class="el-icon-delete" slot="reference"></i>
    </el-popover-dialog>

    <el-popover-dialog
      title="演示slot用法" :popover-content-show="false"
      btn-txt="演示slot用法" confirm-button-text="可以" @confirm="slotChange('可以')">
      <template slot="popover-btn" slot-scope="popover">
        <el-button class="confirm-btn" type="danger" size="mini"
                   @click="slotChange('不行',popover.hide())">
          不行
        </el-button>
      </template>
    </el-popover-dialog>
    <div v-if="show">被删除的东西</div>
    <div>{{slot}}</div>
  </div>
</template>

<script>

    import '../../dist/el-popover-dialog.min'
  //  import Vue from 'vue'
  //  import ElPopoverDialog from '../../dist/el-popover-dialog.min'
  //  const ElPopoverDialog = require('../../dist/el-popover-dialog.min')

  //  Vue.use(ElPopoverDialog)

//  const ElPopoverDialog = () => import('../../dist/el-popover-dialog.min')

  export default {
    name: 'App',
//    components: {ElPopoverDialog},
    data () {
      return {
        show: true,
        slot: ''
      }
    },
    methods: {
      confirm () {
        this.show = false
      },
      slotChange (txt) {
        this.slot = txt
      }
    }
  }
</script>

