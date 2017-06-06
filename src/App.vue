<template>
  <div id="app">
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <!-- Title -->
          <router-link to="/" class="mdl-layout-title">MczTurismo</router-link>
          <div class="mdl-layout-spacer"></div>
          <!-- Navigation. We hide it in small screens. -->
          <nav class="mdl-navigation mdl-layout--large-screen-only">
            <router-link class="mdl-navigation__link" to="/">Home</router-link>
            <router-link class="mdl-navigation__link" to="Acidade" >A cidade</router-link>
            <router-link class="mdl-navigation__link" to="Informacoes">Informações</router-link>
          </nav>
        </div>
      </header>
      <div class="mdl-layout__drawer">
       
        <span class="mdl-layout-title">MczTurismo</span>
        <nav class="mdl-navigation">
            <router-link class="mdl-navigation__link" to="/">Home</router-link>
            <router-link class="mdl-navigation__link" to="Acidade" >A cidade</router-link>
            <router-link class="mdl-navigation__link" to="Informacoes">Informações</router-link>
        </nav>
      </div>
    <main class="mdl-layout__content">
        <transition name="pagina">
          <router-view></router-view>
        </transition>
        <footer class="mdl-mini-footer"> 
            <span>Feito por <a href="https://www.facebook.com/brunorafaell8">Bruno Rafael</a></span>
        </footer>
    </main>
  </div>
  </div>
</template> 

<script>
require('material-design-lite')
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
.mdl-layout {
  .mdl-navigation{
    .mdl-navigation__link{
      font-size: 20px;
    }
  }
}
.mdl-mini-footer{
  display: flex;
  justify-content: center;
  background-color: #43A047;
  span{
    margin: 0 auto;
    a{
      text-decoration: none;
    }
  }
}
.mdl-layout-title{
  text-decoration: none;
  color: #d1d1d1;
  blur: 100%;
}
	.pagina-enter, .pagina-leave-active  {
    opacity: 0;
  }
 	.pagina-enter-active, .pagina-leave-active {
    transition: opacity .4s;
  }

</style>
