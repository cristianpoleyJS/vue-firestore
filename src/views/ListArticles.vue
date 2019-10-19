<template>
  <section class="list-articles">
    <Spinner v-if="loading" />

    <template v-else>
      <div class="list-articles__wrapper-add-article">
        <button @click="openNewArticle()">Añadir artículo</button>
      </div>
      <div class="list-articles__articles" v-if="getArticles.length > 0">
        <Article v-for="article in getArticles" :key="article.id" :article="article" />
      </div>
      <p v-else class="list-articles__no-exist">Aún no existen artículos...</p>
    </template>

    <FormArticle v-if="openedNewArticle" @close-form="closeFormModal()" />
  </section>
</template>

<script>
import FormArticle from '@/components/FormArticle'
import Article from '@/components/Article'
import Spinner from '@/components/Spinner'

export default {
  name: 'ListArticles',
  components: {
    FormArticle,
    Article,
    Spinner
  },
  data () {
    return {
      loading: true,
      openedNewArticle: false
    }
  },
  computed: {
    getArticles () {
      return this.$store.getters.articles
    }
  },
  destroyed () {
    this.$store.commit('RESET_ARTICLES')
  },
  created () {
    this.$store.getters.database
      .collection(`/Articles`)
      .onSnapshot(querySnapshot => {
        querySnapshot.docChanges().forEach(change => {
          const article = {
            ...change.doc.data(),
            id: change.doc.id
          }
          switch (change.type) {
            case 'added':
              // Artículo añadido
              this.$store.commit('ADD_ARTICLE', article)
              break
            case 'modified':
              // Un artículo que ya existía ha sido modificado
              this.$store.commit('MODIFY_ARTICLE', article)
              return
            case 'removed':
              // Artículo eliminado
              this.$store.commit('DELETE_ARTICLE', change.doc.id)
              break
          }
        })
        this.loading = false
      })
  },
  methods: {
    openNewArticle () {
      this.openedNewArticle = true
    },

    closeFormModal () {
      this.openedNewArticle = false
    }
  }
}
</script>

<style scoped lang="scss">
.list-articles {
  max-width: rem(1200);
  padding: rem(30);
  margin: 0 auto;
  &__articles {
    display: flex;
    flex-wrap: wrap;
  }

  &__wrapper-add-article {
    text-align: right;
    margin-bottom: 2rem;
    button {
      background-color: $thirdColor;
      border: 0;
      outline: 0;
      height: rem(60);
      width: rem(200);
      max-width: rem(1200);
      padding: rem(30);
      font-size: 1rem;
      font-weight: 500;
      border-radius: rem(3);
      line-height: 0;
      cursor: pointer;
      &:hover {
        background-color: #d29930;
      }
    }
  }

  &__no-exist {
    font-size: rem(18);
    color: $primaryColor;
  }
}
</style>
