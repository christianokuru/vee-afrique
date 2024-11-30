<script setup>
import banner from '@/assets/pics/banner-white.jpg'
</script>

<template>
 <section class="relative bg-gray-100">
    <!-- Mobile View -->
    <div class="block md:hidden">
      <div class="relative">
        <!-- Banner Image -->
        <img :src="banner" alt="Banner-image" class="w-full h-auto object-cover" />
        <!-- Overlay Text -->
        <div class="absolute inset-0 flex flex-col items-center justify-end bg-black bg-opacity-40 text-white text-center px-4 pb-28">
          <h1 class="text-3xl font-bold mb-2">Welcome to Vee Afrique</h1>
          <p class="text-lg mb-4">Experience the best designs tailored for you.</p>
          <button class="bg-yellow-500 text-black font-semibold py-2 px-4 rounded-none hover:bg-yellow-600">
            Shop now
          </button>
        </div>
      </div>
    </div>

    <!-- Tablet/Desktop View -->
    <div class="hidden md:flex items-center justify-between px-10 lg:px-20 h-96">
      <!-- Text Section -->
      <div class="max-w-md space-y-4">
        <h1 class="text-4xl font-bold text-yellow-600">Welcome to Vee Afrique</h1>
        <p class="text-lg text-gray-700">
          Discover unique and modern designs that bring your vision to life.
        </p>
        <button class="bg-yellow-500 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-600">
          Shop now
        </button>
      </div>
      <!-- Image Section -->
      <div>
        <img :src="banner" alt="Banner-image" class="w-full h-96 object-cover rounded-md shadow-lg" />
      </div>
    </div>
  </section>
</template>