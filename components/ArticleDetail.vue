<template>
  <div v-if="selectedArticle" class="article-detail container my-5">
    <h1 class="article-title mb-4">
      {{ selectedArticle.title }}
    </h1>
    <img :src="selectedArticle.image" :alt="selectedArticle.title" class="img-fluid article-image mb-4">
    <p class="article-date text-muted mb-4">
      {{ formatDate(selectedArticle.date) }}
    </p>
    <div class="article-content mb-4">
      <nuxt-content :document="selectedArticle" />
    </div>
    <button class="btn btn-secondary" @click="goToArticleList">
      Retour à la liste
    </button>
  </div>
</template>

<script>
export default {
  name: 'ArticleDetail',
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selectedArticle: null
    }
  },
  async fetch () {
    if (this.slug) {
      try {
        this.selectedArticle = await this.$content('articles', this.slug).fetch()
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'article:', error)
      }
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
    goToArticleList () {
      this.$store.dispatch('setSelectedArticleSlug', null)
      this.$router.push('/actualite')
      window.scrollTo(0, 0) // Fait défiler la page en haut
    }
  }
}
</script>

<style scoped>
/* Conteneur principal pour l'article */
.article-detail {
  max-width: 900px; /* Élargir le conteneur */
  margin: 0 auto;
  padding: 30px; /* Augmenter le padding pour un meilleur espacement */
  background-color: #f8f9fa; /* Couleur de fond claire et neutre */
  border-radius: 8px; /* Ajouter des coins arrondis */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ajouter une ombre légère pour un effet de profondeur */
}

/* Titre de l'article */
.article-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
}

/* Image de l'article */
.article-image {
  border-radius: 8px;
  max-height: 400px; /* Limiter la hauteur de l'image pour garder la mise en page propre */
  object-fit: cover; /* Assurer que l'image couvre le conteneur sans déformation */
}

/* Date de publication de l'article */
.article-date {
  font-size: 1.1rem;
  color: #6c757d;
}

/* Contenu principal de l'article */
.article-content {
  line-height: 1.8; /* Améliorer la lisibilité avec un interligne plus large */
  color: #444;
  user-select: none; /* Désactiver la sélection de texte pour le contenu principal */
  pointer-events: none; /* Désactiver les interactions comme le clic et le double-clic */
}

/* Assurer que les liens restent interactifs */
.article-content a {
  user-select: text; /* Permet la sélection du texte des liens */
  pointer-events: auto; /* Activer les interactions pour les liens */
  color: #007bff; /* Couleur des liens pour correspondre au thème de Bootstrap */
  text-decoration: underline; /* Souligner les liens pour les rendre visibles */
}

.article-content a:hover {
  text-decoration: none; /* Supprimer la sous-ligne au survol pour une meilleure expérience utilisateur */
}
</style>
