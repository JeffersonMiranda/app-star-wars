<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script type="text/javascript">

import FilmsService from '@/services/FilmsService'

export default {
  data() {
    return {
      filmes: []
    }
  },
  methods: {
  },
  async created() {
    var service = new FilmsService()

    try {
      var response = await service.getAllFilms()
      this.filmes = response.data
    } catch(error) {
      console.log(error)
    }
  }
}

</script>

<style lang="scss">

</style>
