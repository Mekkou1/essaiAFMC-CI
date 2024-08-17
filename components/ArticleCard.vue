<template>
  <div class="card h-100">
    <img :src="article.image" :alt="article.title" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">
        {{ truncateTitle(article.title) }}
      </h5>
      <p class="card-text text-muted">
        {{ formatDate(article.date) }}
      </p>
      <p class="card-text">
        {{ truncateDescription(article.summary) }}
      </p>
      <button class="btn btn-primary" @click="selectArticle">
        Lire plus
      </button>
    </div>
    <div class="card-footer text-muted">
      {{ formatDate(article.date) }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate (date) {
      return new Date(date).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },
    truncateTitle (title, maxLength = 30) {
      return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title
    },
    truncateDescription (description, maxLength = 100) {
      return description.length > maxLength ? `${description.slice(0, maxLength)}...` : description
    },
    selectArticle () {
      this.$emit('select', this.article.slug)
    }
  }
}
</script>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}
.card-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
