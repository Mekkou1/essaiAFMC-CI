<template>
  <div>
    <HeroActualite />
    <h2 class="head-title">
      Activités et cérémonies
    </h2><br>

    <div v-if="selectedArticleSlug">
      <ArticleDetail :slug="selectedArticleSlug" @close="closeArticle" />
    </div>
    <div v-else>
      <BlogList />
    </div>
    <SliderVue />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BlogList from '~/components/BlogList.vue'
import ArticleDetail from '~/components/ArticleDetail.vue'
import HeroActualite from '~/components/HeroActualite.vue'
import SliderVue from '~/components/SliderVue.vue'

export default {
  name: 'Actualite',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Découvrez les dernières actualités sur l\'Association des Femmes Chercheures de Côte d\'Ivoire (AFEM-CI), incluant des informations sur la recherche scientifique, la promotion professionnelle, le renforcement des capacités et les financements.'
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: 'AFEM-CI, Femmes Chercheures, Recherche scientifique, Promotion professionnelle, Renforcement de capacités, Financements, Côte d\'Ivoire, Actualités, Informations, Rapports'
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Actualités - AFEM-CI'
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: 'Découvrez les dernières actualités sur l\'Association des Femmes Chercheures de Côte d\'Ivoire (AFEM-CI), incluant des informations sur la recherche scientifique, la promotion professionnelle, le renforcement des capacités et les financements.'
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: '/images/afemci-logo.png'
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: 'https://afemci.ci/actualite'
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Actualités - AFEM-CI'
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: 'Découvrez les dernières actualités sur l\'Association des Femmes Chercheures de Côte d\'Ivoire (AFEM-CI), incluant des informations sur la recherche scientifique, la promotion professionnelle, le renforcement des capacités et les financements.'
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: '/images/afemci-logo.png'
    }
  ],
  components: {
    BlogList,
    ArticleDetail,
    HeroActualite,
    SliderVue
  },
  computed: {
    ...mapGetters(['selectedArticleSlug'])
  },
  methods: {
    closeArticle () {
      this.$store.dispatch('setSelectedArticleSlug', null)
      this.$router.push('/actualite')
      window.scrollTo(0, 0) // Fait défiler la page en haut
    }
  }
}
</script>

<style scoped>
/* Ajouter une règle pour éviter les barres de navigation latérales */
html, body {
    overflow-x: hidden; /* Supprime le défilement horizontal global */
}
.head-title {
    background-color: #02063F;
    font-size: 25px;
    font-weight: bold;
    font-style: italic;
    width: 100%; /* Prendre toute la largeur du conteneur */
    text-align: center; /* Centrer le texte */
    margin: 0; /* Supprimer les marges par défaut */
    padding: 10px 0; /* Ajouter un peu d'espace autour du texte pour améliorer l'apparence */
    border-radius: 0; /* Assurer qu'il n'y a pas de bord arrondi */
}
</style>
