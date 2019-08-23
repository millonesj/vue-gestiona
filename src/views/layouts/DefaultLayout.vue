<template>
  <div class="default-layout">
    <!-- header -->
    <header-partial></header-partial>
    <!-- end header -->
    <!-- main -->
    <main class="main-section mb-5">
      <div class="container-fluid">
        <slot name="content"></slot>
      </div>
    </main>
    <!-- end main -->
    <!-- footer -->
    <footer-partial></footer-partial>
    <!-- end footer -->
  </div>
</template>

<script>

import HeaderPartial from '@/views/Partials/HeaderPartial'
import FooterPartial from '@/views/Partials/FooterPartial'
export default {
  name: 'DefaultLayout',
  components: {
    HeaderPartial,
    FooterPartial
  }
}
</script>
