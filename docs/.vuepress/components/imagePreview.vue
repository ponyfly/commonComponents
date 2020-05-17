<template>
  <component v-if="dynamicComponent" :is="dynamicComponent" v-bind="$attrs"></component>
</template>
<script>
  export default {
    data() {
      return {
        dynamicComponent: null
      }
    },
    mounted () {
      import('../../../src/components/imagePreview').then(module => {
        this.dynamicComponent = module.default
      })
    }
  }
</script>
