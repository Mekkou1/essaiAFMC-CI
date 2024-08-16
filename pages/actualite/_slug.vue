<template>
  <div>
    <ArticleDetail v-if="selectedArticleSlug" :slug="selectedArticleSlug" />
    <BlogList v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticleDetail from '@/components/ArticleDetail.vue'
import BlogList from '@/components/BlogList.vue'

export default {
  components: { ArticleDetail, BlogList },
  computed: {
    ...mapGetters(['selectedArticleSlug'])
  }
}
</script>
