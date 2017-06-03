<template>
  <div id="app">
    <header id="header">
      <div>oiii</div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
body{color: blue; 
  #header{ 
    div{
      color: red;
     } 
  }
}
</style>
