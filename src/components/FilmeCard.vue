<template>
  <div class="filme-card">
    <img src="" alt="">
    <h1> {{ title }} </h1>
    <h4> {{ release_date }} </h4>
    <router-link :to="{ name: 'FilmeDetalhes', params: { id: episode_id } }">  Detalhes </router-link>
  </div>
</template>

<script>

export default {
  name: 'FilmeCard',
  props: ['episode_id', 'image_src', 'title', 'release_date']
}

</script>
