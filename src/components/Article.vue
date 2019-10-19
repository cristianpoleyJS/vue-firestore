<template>
  <div class="article">
    <div class="article__content">
      <h1 class="article__content__title">{{ article.title }}</h1>
      <p class="article__content__subtitle">{{ article.subtitle }}</p>
      <span class="article__content__category">{{ article.category }}</span>
    </div>
    <div :style="`background-image: url(${article.photo})`"
    class="article__photo"/>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    article: {
      type: Object,
      default: () => {
        return { }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .article {
    flex: 100%;
    border: rem(1) solid $primaryColor;
    text-align: left;
    padding: 1rem 2rem;
    border-radius: rem(3);
    margin-bottom: 2rem;
    display: flex;
    &__content {
      flex: 0 0 70%;
      &__category {
        font-style: italic;
      }
    }
    &__photo {
      flex: 0 0 30%;
      background-size: cover;
      margin: -16px 0 -15px 32px;
    }
  }
</style>
