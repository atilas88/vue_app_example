export default {
  namespaced: true,
  state: {
    favorites: []
  },
  mutations: {
    UPDATE_FAVORITES (state, payload) {
      state.favorites = payload
    }
  },
  actions: {
    addToFavorites (context, payload) {
      const favorites = context.state.favorites
      favorites.push(payload)
      context.commit('UPDATE_FAVORITES', favorites)
    },
    removeToFavorites (context, payload) {
      const favorites = context.state.favorites
      const postItem = favorites.indexOf(payload)
      if (postItem !== -1) {
        favorites.splice(postItem, 1)
        context.commit('UPDATE_FAVORITES', favorites)
      }
    }
  },
  getters: {
    existFavorite: function (state) {
      return state.favorites.length > 0
    }
  }

}
