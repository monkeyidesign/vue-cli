<template>
  <div id="app">
      <router-view></router-view>

      <router-link to="/"> Home </router-link> |
      <router-link to="/users/10">Page10</router-link> |
      <router-link to="/users/12">Page12</router-link>
  </div>
</template>
test
<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>