import Vue from 'vue'
import Router from 'vue-router'
import FilmesLista from './views/FilmesLista'
import FilmeDetalhes from './views/FilmeDetalhes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'FilmesLista',
      component: FilmesLista
    },
    {
      path: '/filme-detalhes/:id',
      name: 'FilmeDetalhes',
      component: FilmeDetalhes
    },
  ]
})
