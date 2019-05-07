<template>
  <div class="filme-card">
    <div class="wrapper-imagem">
      <img :src="getFilmeImagem(episode_id)" :alt="title">
    </div>
    <h1 class="filme-titulo"> {{ title }} </h1>
    <span class="filme-lancamento"> Lançamento: {{ formatarData(release_date) }} </span>
    <router-link class="filme-detalhes" :to="{ name: 'FilmeDetalhes', params: { id: episode_id } }">  Detalhes </router-link>
  </div>
</template>

<script>

import FilmsService from '@/services/FilmsService'
import { formatarData } from '@/helpers'

export default {
  name: 'FilmeCard',
  props: ['episode_id', 'title', 'release_date'],
  methods: {
    formatarData: formatarData,
    getFilmeImagem(episodio) {
      return require('@/assets/covers/' + episodio + '.jpeg')
    }
  }
}

</script>

<style lang="sass">

.filme-card
  display: flex
  flex-direction: column
  align-items: center
  padding: 10px
  max-width: 320px
  margin: auto auto 20px
  border-radius: 10px
  background-color: #272626

  .wrapper-imagem
    width: 100%
    display: flex
    align-items: center
    justify-content: center

    img
      border-radius: 5px
      width: 100%

  .filme-titulo
    color: #dddddd
    font-size: 20px
    text-align: center

  .filme-lancamento
    color: #edec51
    font-size: 12px
    font-weight: bold

  .filme-detalhes
    margin-top: 10px
    padding: 10px 25px
    font-size: 12px
    font-weight: bold
    color: #272626
    text-decoration: none
    background-color: white
    border-radius: 25px

  &:last-of-type
    margin-bottom: 0

</style>
