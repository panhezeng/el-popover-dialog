import ElPopoverDialog from './ElPopoverDialog.vue'

let Vue

function install (_Vue) {

  if (Vue) {
    console.warn('[ElPopoverDialog] already installed. Vue.use(ElPopoverDialog) should be called only once.')
    return
  }

  Vue = _Vue

  Vue.component(ElPopoverDialog.name, ElPopoverDialog)
}

/* istanbul ignore next */
ElPopoverDialog.install = install

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default ElPopoverDialog
