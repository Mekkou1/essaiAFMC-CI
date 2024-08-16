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
            <img src="/images/bibliotheque.jpeg" alt="Illustration de la bibliothèque" class="img-fluid rounded shadow-sm mb-4">
          </div>
          <div class="col-md-6">
            <LibrairyVue />
          </div>
        </div>
      </div>
    </div>

    <ContactVue />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BlogList from '~/components/BlogList.vue'
import ArticleDetail from '~/components/ArticleDetail.vue'
import LibrairyVue from '~/components/LibrairyVue.vue'
import VideoGallery from '~/components/VideoGallery.vue'
import HeroActualite from '~/components/HeroActualite.vue'
import ContactVue from '~/components/ContactVue.vue'

export default {
  name: 'Actualite',
  meta: [
    // ... (métadonnées inchangées)
  ],
  components: {
    BlogList,
    ArticleDetail,
    LibrairyVue,
    VideoGallery,
    HeroActualite,
    ContactVue
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
