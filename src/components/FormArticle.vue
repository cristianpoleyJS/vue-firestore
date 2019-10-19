<template>
    <Modal @close="closeForm()">
        <h2 slot="header">Nuevo artículo</h2>
        <form class="form-article" slot="body">
            <label> Título
                <input v-model="newArticle.title" type="text" placeholder="Introduce el título del artículo..."/>
            </label>
            <label> Subtítulo
                <input v-model="newArticle.subtitle" type="text" placeholder="Introduce el subtítulo del artículo..."/>
            </label>
            <label> Foto
                <input v-model="newArticle.photo" type="text" placeholder="URL de la foto..."/>
            </label>
            <label> Categoría
                <input v-model="newArticle.category" type="text" placeholder="Introduce la categoría del artículo..."/>
            </label>
        </form>
        <div slot="footer" class="buttons">
            <span @click="closeForm()" class="buttons__close">Cerrar</span>
            <button @click="createArticle()" class="buttons__create" :disabled="!isValid">¡Crear!</button>
        </div>
    </Modal>
</template>

<script>
import Modal from '@/components/Modal'

export default {
  name: 'FormArticle',
  components: {
    Modal
  },
  data () {
    return {
      newArticle: {}
    }
  },
  computed: {

    isValid () {
      return Object.keys(this.newArticle).length === 4 &&
                this.newArticle.title !== '' &&
                this.newArticle.subtitle !== '' &&
                this.newArticle.photo !== '' &&
                this.newArticle.category !== ''
    }
  },
  methods: {

    closeForm () {
      this.$emit('close-form')
    },

    createArticle () {
      this.$store.getters.database.collection(`/Articles`).add(this.newArticle)
      this.$emit('close-form')
    }
  }
}
</script>

<style scoped lang="scss">
    .form-article {
        label {
            display: inline-block;
            text-align: left;
            width: 100%;
            margin-bottom: 2rem;
            font-weight: 600;
            font-size: rem(18);
            color: $primaryColor;
            input {
                border-radius: rem(3);
                color: #202124;
                height: rem(28);
                margin: rem(1) rem(1) 0 rem(1);
                padding: rem(12) rem(16);
                text-align: left;
                background-color: transparent;
                border: none;
                display: block;
                width: 96%;
                font-size: 1rem;
                height: 24px;
                line-height: 24px;
                margin: 0;
                min-width: 0%;
                outline: none;
                z-index: 0;
                border: rem(1) solid $primaryColor;
                margin-top: rem(12);
                &:focus {
                    border: rem(1) solid $secondaryColor;
                }
            }
        }
    }
    .buttons {
        &__close {
            color: $primaryColor;
            font-size: 1rem;
            cursor: pointer;
            text-transform: uppercase;
            &:hover {
                color: $secondaryColor;
            }
        }
        &__create {
            cursor: pointer;
            text-transform: uppercase;
            font-size: 1rem;
            margin-left: 1rem;
            border: 0;
            outline: 0;
            border: 1px solid $primaryColor;
            border-radius: rem(3);
            padding: 1rem 2rem;
            &:disabled {
                pointer-events: none;
                background-color: #dadada;
                border: 1px solid #dadada;
            }
            &:hover {
                border: 1px solid $secondaryColor;
                background-color: $secondaryColor;
                color: #fff;
            }
        }
    }
</style>
