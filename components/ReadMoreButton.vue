<template>
  <button class="btn btn-primary" @click="handleClick">
    Lire plus
  </button>
</template>

<script>
export default {
  name: 'ReadMoreButton',
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick () {
      this.$emit('selectArticle', this.slug)
    }
  }
}
</script>
