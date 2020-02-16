<template>
  <div class="home">

    <LandingPage />

    <Headphones />
    <div id="div-id"></div>
  </div>
</template>

<script>
import Headphones from "../components/headphones";
import LandingPage from "../components/landingPage";
export default {
  name: "home",
  components: {
    Headphones,
    LandingPage
  }
};
</script>
