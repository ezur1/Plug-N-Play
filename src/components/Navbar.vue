<template>
    <nav class="flex space-between align-base">
        <div class="nav-logo">
            <router-link to="/"><img src="../../public/img/logo.png" ></router-link>
        </div>
        <section class="nav-links flex space-around">
            <router-link to="/about">About</router-link>
            <router-link to="/products">Products</router-link>
            <router-link to="/contact">Contact</router-link>
            <i class="fas fa-search"></i>
        </section>
    </nav>
</template>
<script>
export default {
    name:'Navbar',
}
</script>