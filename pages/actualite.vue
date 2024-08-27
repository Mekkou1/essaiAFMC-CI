<template>
  <div>
    <HeroActualite /><br>

    <div v-if="selectedArticleSlug">
      <ArticleDetail :slug="selectedArticleSlug" @close="closeArticle" />
    </div>
    <div v-else>
      <BlogList />
    </div>

    <div class="container">
      <VideoGallery />
    </div><br>

    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="/images/bibliotheque.jpg" alt="Illustration de la bibliothèque" class="img-fluid rounded shadow-sm mb-4">
          </div>
          <div class="col-md-6">
            <LibrairyVue />
          </div>
        </div>
      </div>
    </div>
    <SliderVue />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BlogList from '~/components/BlogList.vue'
import ArticleDetail from '~/components/ArticleDetail.vue'
import LibrairyVue from '~/components/LibrairyVue.vue'
import VideoGallery from '~/components/VideoGallery.vue'
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
    LibrairyVue,
    VideoGallery,
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
