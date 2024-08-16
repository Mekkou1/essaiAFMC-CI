// store/index.js
export const state = () => ({
  selectedArticleSlug: null
})

export const mutations = {
  SET_SELECTED_ARTICLE_SLUG (state, slug) {
    state.selectedArticleSlug = slug
  }
}

export const actions = {
  setSelectedArticleSlug ({ commit }, slug) {
    commit('SET_SELECTED_ARTICLE_SLUG', slug)
  }
}

export const getters = {
  selectedArticleSlug: state => state.selectedArticleSlug
}
