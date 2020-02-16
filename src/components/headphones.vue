<template>
  <div class="headphones">
    <section class="left-disc">
      <h1 data-aos="fade-up"
      data-aos-delay="250"
     data-aos-anchor-placement="top-bottom">Bluetooth Headphones</h1>
       <router-link data-aos-delay="250" data-aos="fade-in" to="/products">
          <button>SHOP NOW</button>
       </router-link>
    </section>
    <section class="home-images ">
      <img src="../../public/img/beats cream.png" data-aos="zoom-out" data-aos-delay="900" data-aos-duration="1300" class="headphones-img">
      <img src="../../public/img/bitmap.png" data-aos="fade-left" data-aos-delay="900" data-aos-duration="100" class="bitmap-img ">
    </section>
    <section data-aos="fade-down" data-aos-delay="550" class="right-disc">
      <p>Clear voice transmission</p>
      <p>Distance: <span>10M</span></p>
      <span>With 300Ah rechargeable battery</span>
      <p>Play time: <span>up to 6 Hrs</span></p>
      <p>Micro SD slot: <span>up to 32GB</span></p>
      <span>With Aux-in jack & TF card function</span>
      <p>Accessories: <span>Audio cable, Charger, Manual.</span></p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'headphones',
  components: {

  }
}
</script>
