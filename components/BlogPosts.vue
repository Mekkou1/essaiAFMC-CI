<template>
  <div class="blog-list container" style="margin-top: 30px;">
    <div class="row">
      <div v-for="article in articles" :key="article.slug" class="col-md-4 mb-4">
        <div class="card h-100">
          <img :src="article.image" class="card-img-top" :alt="article.title">
          <div class="card-body">
            <h5 class="card-title">
              {{ truncateTitle(article.title) }}
            </h5>
            <p class="card-text">
              {{ truncateDescription(article.summary) }}
            </p>
            <!-- Utilisation du composant ReadMoreButton -->
            <ReadMoreButton :slug="article.slug" @selectArticle="selectArticle" />
          </div>
          <div class="card-footer text-muted">
            {{ formatDate(article.date) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReadMoreButton from '@/components/ReadMoreButton.vue'

export default {
  name: 'BlogList',
  components: {
    ReadMoreButton
  },
  data () {
    return {
      articles: []
    }
  },
  async fetch () {
    this.articles = await this.$content('articles')
      .only(['title', 'date', 'summary', 'slug', 'image'])
      .sortBy('date', 'desc')
      .limit(3) // Limiter le nombre d'articles à 3
      .fetch()
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
    selectArticle (slug) {
      this.$store.dispatch('setSelectedArticleSlug', slug)
      this.$router.push('/actualite')
      window.scrollTo(0, 0) // Fait défiler la page en haut
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
  line-clamp: 3; /* Définir la propriété standard pour la compatibilité */
}
</style>
