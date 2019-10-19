import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    db: {},
    articles: []
  },
  getters: {

    database: state => state.db,

    articles: state => state.articles
  },
  mutations: {

    'SET_DATABASE': (state, db) => {
      state.db = db
    },

    'ADD_ARTICLE': (state, article) => {
      state.articles.push(article)
    },

    'MODIFY_ARTICLE': (state, article) => {
      /* eslint-disable-next-line */
      let articleFinded = state.articles.find((item) => {
        return article.id === item.id
      })
      articleFinded.title = article.title
      articleFinded.subtitle = article.subtitle
      articleFinded.photo = article.photo
      articleFinded.category = article.category
    },

    'DELETE_ARTICLE': (state, articleId) => {
      state.articles = state.articles.filter((item) => {
        return item.id !== articleId
      })
    },

    'RESET_ARTICLES': (state) => {
      state.articles = []
    }
  }
})
