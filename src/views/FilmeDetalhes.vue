<template>
  <div class="filme-detalhes" v-if="filme">
    <img class="filme-imagem" :src="filmeImagem" :alt="filme.title">
    <p class="filme-titulo"> {{ filme.title }} </p>
    <p class="filme-detalhes"> {{ filme.opening_crawl }} </p>
    <p class="filme-diretor"> Diretor: <span class="cor-amarela"> {{ filme.director }} </span> </p>
    <p class="filme-produtor"> Produtor: <span class="cor-amarela"> {{ filme.producer }} </span> </p>
    <p class="filme-lancamento"> Lançamento: <span class="cor-amarela"> {{ filme.release_date }} </span> </p>
    <p class="filme-quantidade-personagens"> <span class="cor-amarela"> Personagens: {{ filme.characters.length }} </span> </p>
    <p class="filme-quantidade-planetas"> Planetas: <span class="cor-amarela"> {{ filme.planets.length }} </span> </p>
    <p class="filme-quantidade-naves"> Naves: <span class="cor-amarela"> {{ filme.starships.length }} </span> </p>
  </div>
</template>

<script>

import FilmsService from '@/services/FilmsService'

export default {
  name: 'FilmeDetalhes',
  data() {
    return {
      filme: null,
      filmeImagem: null
    }
  },
  async created() {
    var service = new FilmsService()

    try {
      var response = await service.getFilmeById(this.$route.params.id)
      this.filme = response.data
      this.filmeImagem = service.getFilmeImagemDetalhe(this.filme.episode_id)
    } catch(error) {
      console.log(error)
    }
  }
}

</script>

<style lang="sass">

.filme-detalhes
  color: #aaaaaa
  font-weight: bold

  .cor-amarela
    color: #edec51

  .filme-imagem
    display: block
    max-width: 200px
    max-height: 300px
    margin: auto
    border-radius: 10px

  .filme-titulo
    text-align: center
    font-size: 24px

  .filme-diretor
    width: 100%
    border-radius: 10px

  .filme-produtor
    width: 100%
    border-radius: 10px

  .filme-lancamento
    width: 100%
    border-radius: 10px

  .filme-quantidade-personagens
    width: 100%
    border-radius: 10px

  .filme-quantidade-veiculos
    width: 100%
    border-radius: 10px

  .filme-quantidade-naves
    width: 100%
    border-radius: 10px

</style>
