<template>
  <div class="blog-list-container" style="background-image: url('/images/bg_card.jpg'); background-size: cover; padding: 40px 0;">
    <div class="container">
      <div class="articles-grid">
        <div v-for="(article, index) in articles" :key="article.slug" :class="getArticleClass(index)">
          <div class="card h-100" :class="getCardClass(index)">
            <div class="card-horizontal">
              <img :src="article.image" class="card-img-left" :alt="article.title">
              <div class="card-body">
                <h5 class="card-title">
                  {{ truncateTitle(article.title) }}
                </h5>
                <p class="card-text">
                  {{ truncateDescription(article.summary) }}
                </p>
                <ReadMoreButton :slug="article.slug" @selectArticle="selectArticle" />
              </div>
            </div>
            <!-- Commenter ou supprimer l'affichage de la date -->
            <!-- <div class="card-footer text-muted" style="background-color: #02063F">
              {{ formatDate(article.date) }}
            </div> -->
          </div>
        </div>
      </div>
      <div class="text-center mt-4">
        <nuxt-link to="/actualite" class="btn btn-pink">
          Toutes les actualités
        </nuxt-link>
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
      .limit(3)
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
      window.scrollTo(0, 0)
    },
    getCardClass (index) {
      const classes = ['card-blue', 'card-white', 'card-pink']
      return classes[index % classes.length]
    },
    getArticleClass (index) {
      return index === 2 ? 'large-article vertical-layout centered-image' : 'small-article left-margin-image'
    }
  }
}
</script>

<style scoped>
.blog-list-container {
  background: #f5f5f5;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
}

.small-article:nth-child(1) {
  grid-column: 1;
  grid-row: 1;
}

.small-article:nth-child(2) {
  grid-column: 1;
  grid-row: 2;
}

.large-article {
  grid-column: 2;
  grid-row: 1 / span 2;
}

.card-horizontal {
  display: flex;
  align-items: center;
}

.card-img-left {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 15px 0 0 15px;
}

.card-body {
  padding: 20px;
}

.card-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 3;
}

.card-blue {
  background-color: #02063F;
  border-radius: 25px;
  color: white;
}

.card-white {
  background-color: #FFFFFF;
  border-radius: 25px;
  color: black;
}

.card-pink {
  background-color: #FB0683;
  border-radius: 25px;
  color: white;
}

.btn-pink {
  background-color: #FB0683;
  border: none;
  color: white;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
}

.vertical-layout .card-horizontal {
  flex-direction: column;
  align-items: flex-start;
}

.vertical-layout .card-img-left {
  width: 100%;
  height: auto;
  border-radius: 15px 15px 0 0;
}

.vertical-layout .card-body {
  padding: 20px;
}

.centered-image .card-img-left {
  margin: 20px;
  border-radius: 15px;
  width: calc(100% - 40px); /* Adjust width to account for margins */
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.left-margin-image .card-img-left {
  margin-left: 10px; /* Ajustez la marge selon vos besoins */
  width: calc(100% - 20px); /* Ajustez la largeur pour tenir compte de la marge */
  height: auto;
  border-radius: 15px;
}

/* Responsive styles */
@media (max-width: 768px) {
  .articles-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 20px;
  }

  .small-article,
  .large-article {
    grid-column: 1;
    grid-row: auto;
  }

  .large-article {
    grid-row: auto;
  }

  .card-horizontal {
    flex-direction: column;
    align-items: stretch; /* Ensures the card takes full width */
  }

  .card-img-left {
    width: 100%;
    height: auto;
    border-radius: 15px; /* Remove left radius for full-width image */
  }

  .card-body {
    padding: 10px; /* Adjust padding for smaller screens */
  }

  .card-text {
    display: block; /* Ensure full text visibility */
  }

  .btn-pink {
    padding: 8px 16px;
    font-size: 14px;
  }
}

@media (max-width: 576px) {
  .btn-pink {
    padding: 6px 12px;
    font-size: 12px;
  }
}
</style>
