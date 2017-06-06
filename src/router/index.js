import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Praias from '@/components/pages/Praias'
import Passeio from '@/components/pages/Passeio'
import Culinaria from '@/components/pages/Culinaria'
import Informacoes from '@/components/pages/Informacoes'
import Acidade from '@/components/pages/Acidade'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Praias',
      name: 'Praias',
      component: Praias
    },
    {
      path: '/Passeio',
      name: 'Passeio',
      component: Passeio
    },
    {
      path: '/Culinaria',
      name: 'Culinaria',
      component: Culinaria
    },
    {
      path: '/Informacoes',
      name: 'Informacoes',
      component: Informacoes
    },
    {
      path: '/Acidade',
      name: 'Acidade',
      component: Acidade
    },
    {
      path: '*',
      component: Home
    }
  ]
})
