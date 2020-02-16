<template>
  <div class="landing-page">
    <section class="left-disc">
      <span>
        <h1 class="animated fadeIn">PLAY IT.</h1>
        <h1 class="animated fadeIn delay-1s">GO WITH IT.</h1>
      </span>
      <router-link class="animated fadeIn" to="/products">
        <a href="#div-id" v-smooth-scroll="{ duration: 1400}">
          <button class="animated fadeIn delay-2s">Meet our products</button>
        </a>
      </router-link>
    </section>
    <section class="landing-images">
      <div class="yellow-bgc"></div>
      <img src="../../public/img/bitmap man.png" class="bitmap-man animated pulse" />
    </section>
    <section class="right-disc">
      <p class="p1"><span>Premium headphone range  offering </span> superior sound<span>, cutting-edge technology,
        and a </span>modern design <span>aesthetic to every moment.</span></p>
      <p class="p2">
        
        It redefines your premium headphone
        experience.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "LandingPage"
};
</script>
