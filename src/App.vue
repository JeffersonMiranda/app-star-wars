<template>
  <div id="app">
    <header class="app-header" :class="{centralizado: !isPaginaDetalhes()}">
      <router-link class="return-btn" :to="{ name: 'FilmesLista' }" v-if="isPaginaDetalhes()"> <img src="@/assets/return.png" alt="Retornar"> </router-link>
      <img class="logo" src="@/assets/star-wars.png" alt="Star Wars">
    </header>
    <router-view/>
  </div>
</template>

<script type="text/javascript">

export default {
  methods: {
    isPaginaDetalhes() {
      return this.$route.name == 'FilmeDetalhes'
    }
  }
}

</script>

<style lang="sass">

body
  background-color: #151515
  padding: 20px
  font-family: DIN, Helvetica, Arial, sans-serif

  #app
    max-width: 1200px
    margin: auto

    .app-header
      display: flex
      justify-content: space-between
      align-items: center
      margin-bottom: 25px

      .return-btn

        img
          width: 60px
          height: 60px

      .logo
        display: block
        max-width: 300px
        margin: auto

      &.centralizado
        justify-content: center

</style>
