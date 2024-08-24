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

<style scoped>
.btn{
  background-color: #FB0683;
  border: 1px solid;
  border-radius: 25%;
}
</style>
