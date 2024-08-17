<template>
  <div class="blog-list container" style="margin-top: 30px;">
    <div class="row">
      <div v-for="article in displayedArticles" :key="article.slug" class="col-md-4 mb-4">
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

    <!-- Pagination -->
    <nav aria-label="Page navigation" class="mt-4">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Précédent</a>
        </li>
        <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
          <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">Suivant</a>
        </li>
      </ul>
    </nav>
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
      articles: [],
      currentPage: 1,
      articlesPerPage: 6
    }
  },
  async fetch () {
    this.articles = await this.$content('articles')
      .only(['title', 'date', 'summary', 'slug', 'image'])
      .sortBy('date', 'desc')
      .fetch()
  },
  computed: {
    totalPages () {
      return Math.ceil(this.articles.length / this.articlesPerPage)
    },
    displayedArticles () {
      const start = (this.currentPage - 1) * this.articlesPerPage
      const end = start + this.articlesPerPage
      return this.articles.slice(start, end)
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
    changePage (page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
      }
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
