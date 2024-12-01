<script setup>
import Navbar from '@/components/custom/Navbar.vue';
import Banner from '@/components/custom/Banner.vue';
import FreeShipping from '@/components/custom/FreeShipping.vue';
import { ref, onMounted } from 'vue';

// Track page loading state for the animation
const isPageLoaded = ref(false);

onMounted(() => {
  // Start the animation once the page is mounted
  isPageLoaded.value = true;
});
</script>

<template>
  <main>
    <!-- Transition Wrapper -->
    <Transition name="fade-slide">
      <!-- Render content only when `isPageLoaded` is true -->
      <div v-if="isPageLoaded">
        <Navbar />
        <Banner />
        <FreeShipping />
      </div>
    </Transition>
  </main>
</template>

<style scoped>
/* Transition Effects */
.fade-slide-enter-active {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-in-out;
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
