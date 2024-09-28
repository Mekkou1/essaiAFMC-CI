<template>
  <div class="blog-list container" style="margin-top: 30px;">
    <div class="row">
      <div v-for="article in articles" :key="article.slug" class="col-12 mb-4">
        <div class="card h-100 d-flex flex-row">
          <img :src="article.image" class="card-img-left" :alt="article.title">
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
          <!-- Commented out the date display -->
          <!-- <div class="card-footer text-muted" style="background-color: #02063F;">
            {{ formatDate(article.date) }}
          </div> -->
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
.card {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 15px; /* Bordures arrondies pour les cartes */
  overflow: hidden; /* Pour s'assurer que les bordures arrondies sont appliquées correctement */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ajouter une ombre légère pour améliorer la visibilité */
}
.card-img-left {
  width: 144px; /* Augmenter la largeur de 20% par rapport à 120px */
  height: 108px; /* Ajuster la hauteur pour maintenir le rapport d'aspect augmenté */
  object-fit: cover;
  margin: 10px; /* Ajuster la marge pour s'adapter à l'image plus grande */
  border-radius: 10px; /* Réduire le rayon de la bordure pour s'adapter à l'image plus grande */
}
.card-body {
  flex: 1; /* Permet à la carte de s'étendre pour occuper l'espace restant */
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
