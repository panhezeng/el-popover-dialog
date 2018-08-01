<template>
  <div id="app">
    <el-popover-dialog @confirm="confirm"/>

    <el-popover-dialog class="icon-delete" :btn-show="false" @confirm="confirm">
      <i class="el-icon-delete" slot="reference"></i>
    </el-popover-dialog>
    <div v-if="test">被删除的东西</div>
  </div>
</template>

<script>

  import '../../dist/el-popover-dialog.min'
  //  import Vue from 'vue'
  //  import ElPopoverDialog from '../../dist/el-popover-dialog.min'

  //  Vue.use(ElPopoverDialog)

  //  const ElPopoverDialog = () => import('../../dist/el-popover-dialog.min')

  export default {
    name: 'App',
//    components: {ElPopoverDialog},
    data () {
      return {
        test: true
      }
    },
    methods: {
      confirm () {
        this.test = false
      }
    }
  }
</script>

