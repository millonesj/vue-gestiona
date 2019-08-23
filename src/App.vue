<template>
  <!-- <defaultLayout></defaultLayout> -->
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import DefaultLayout from '@/views/layouts/DefaultLayout'
export default {
  name: 'HomeView',
  components: {
    DefaultLayout
  }
}
</script>
<style src="./css/style.css">
  @import url('https://fonts.googleapis.com/css?family=Lato');
</style>
