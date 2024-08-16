<template>
  <div>
    <!-- Hero Section -->
    <section id="hero" class="hero-section text-white text-center py-5" style="background: url('/images/hero-bg.png') no-repeat center center; background-size: cover;">
      <div class="container">
        <h1 class="display-4 font-weight-bold" style="margin-top: 100px;">
          NOS ACTUALITES
        </h1>
        <p class="lead" />
      </div>
    </section>
    <br>

    <section id="hero" class="hero-section text-white text-center py-5" style="background: url('/images/hero-bg.png') no-repeat center center; background-size: cover;">
      <div class="container">
        <h1 class="display-4 font-weight-bold" style="margin-top: 100px;">
          NOS ACTUALITES
        </h1>
        <p class="lead" />
      </div>
    </section>
    <br>

    <div class="container">
      <div v-if="selectedArticle">
        <button class="btn btn-secondary mb-3" @click="closeArticle">
          Retour aux actualités
        </button>
        <ArticleDetail :slug="selectedArticle" />
      </div>
      <div v-else>
        <BlogPosts @select-article="selectArticle" />
        <hr class="my-5">
        <BlogList @select-article="selectArticle" />
      </div>
    </div>

    <!-- ... autres sections ... -->
  </div>
</template>

<script>
import BlogList from '~/components/BlogList.vue'
import BlogPosts from '~/components/BlogPosts.vue'
import ArticleDetail from '~/components/ArticleDetail.vue'

export default {
  name: 'Actualite',
  components: {
    BlogList,
    BlogPosts,
    ArticleDetail
    // ... autres composants ...
  },
  data () {
    return {
      selectedArticle: null
    }
  },
  methods: {
    selectArticle (slug) {
      this.selectedArticle = slug
      window.scrollTo(0, 0)
    },
    closeArticle () {
      this.selectedArticle = null
    }
  }
}
</script>
