<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |      
      <router-link to="/Applications">Applications</router-link> |
      <router-link to="/Experience">Experience</router-link> |
      <router-link to="/Skills">Skills</router-link> |
      <router-link to="/Blog">Blog</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #356643;
  background-color: fff;
}

#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #81B38F;
    }
  }
}
#skills{
  width: 1000px;
  align-self: center;
  margin-left: 200px;
}
</style>

<script></script>
