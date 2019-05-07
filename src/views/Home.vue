<template>
  <div class="home">
    <input v-model="filmeSelecionado" class="filme-filtro" type="text" placeholder="Pesquise por título">
    <div class="filmes-cards">

      <filme-card v-for="filme in filmesFiltrados"
              :episode_id="filme.episode_id"
              :title="filme.title"
              :release_date="filme.release_date"/>
    </div>
  </div>
</template>

<script>

import FilmsService from '@/services/FilmsService'
import FilmeCard from '@/components/FilmeCard'

export default {
  name: 'home',
  components: {
    FilmeCard
  },
  data() {
    return {
      filmeSelecionado: null,
      filmes: []
    }
  },
  computed: {
    filmesFiltrados() {
      if (this.filmeSelecionado) {
        var filtro = this.filmeSelecionado.toLowerCase()
        return this.filmes.filter(filme => filme.title.toLowerCase().includes(filtro))
      } else {
        return this.filmes
      }
    }
  },
  async created() {
    var service = new FilmsService()

    try {
      var response = await service.getAllFilms()
      this.filmes = response.data.results
    } catch(error) {
      console.log(error)
    }
  }
}
</script>

<style lang="sass">

.home
  margin: auto

  .filme-filtro
    display: block
    width: 100%
    max-width: 400px
    margin: auto auto 20px

  .filmes-cards
    display: flex
    flex-wrap: wrap

</style>
