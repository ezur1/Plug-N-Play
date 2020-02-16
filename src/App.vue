<template>
  <section class="app">
    <Navbar class="navbar"/>
    <router-view class="view"/>
  </section>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: { Navbar }
};
</script>
