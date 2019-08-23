<template>
  <default-layout>
    <section slot="content">
      <h1>Aquí estoy llenando con SLOT</h1>
    </section>
  </default-layout>
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
