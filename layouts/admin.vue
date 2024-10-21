<template>
  <div>
    <AppHeader />
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from '~/components/comon/AppHeader.vue'

export default {
  name: 'Default',
  components: {
    AppHeader
  }
}

</script>
