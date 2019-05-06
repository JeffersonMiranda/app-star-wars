<template>
  <div class="home">
    <img class="logo" src="@/assets/star-wars.png" alt="Star Wars">
    <input v-model="filmeSelecionado" class="filme-filtro" type="text">
    <filme-card v-for="filme in filmes"
              :episode_id="filme.episode_id"
              :title="filme.title"
              :release_date="filme.release_date"/>
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

<style lang="scss">

  .home {
    margin: auto;

    .logo {
      display: block;
      margin: auto auto 25px;
      max-width: 300px;
    }

    .filme-filtro {
      margin: auto auto 20px;
      width: 100%;
    }
  }

</style>
