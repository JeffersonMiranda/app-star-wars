<template>
  <div class="about" v-if="filme">
    <p> {{ filme.title }} </p>
    <p> {{ filme.opening_crawl }} </p>
    <p> {{ filme.director }} </p>
    <p> {{ filme.producer }} </p>
    <p> {{ filme.release_date }} </p>
    <p> {{ filme.characters.length }} </p>
    <p> {{ filme.planets.length }} </p>
    <p> {{ filme.starships.length }} </p>
  </div>
</template>

<script>

import FilmsService from '@/services/FilmsService'

export default {
  name: 'FilmeDetalhes',
  data() {
    return {
      filme: null
    }
  },
  async created() {
    var service = new FilmsService()

    try {
      var response = await service.getFilmeById(this.$route.params.id)
      this.filme = response.data
    } catch(error) {
      console.log(error)
    }
  }
}

</script>
