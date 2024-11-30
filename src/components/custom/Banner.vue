<script setup>
import banner from '@/assets/pics/banner-white.jpg';
import banna from '@/assets/pics/banner-2.jpg';
</script>

<template>
  <section class="relative bg-gray-200">
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
    <div class="hidden md:flex items-center justify-between px-32 pr-3 lg:px-32 h-auto">
      <!-- Text Section -->
      <div class="w-1/2 max-w-lg space-y-6">
        <h1 class="lg:text-5xl md:text-4xl font-bold text-yellow-600 md:w-72 lg:w-full">Welcome to Vee Afrique</h1>
        <p class="text-xl text-gray-700 md:w-96 lg:w-full">
          Discover unique and modern designs that bring your vision to life.
        </p>
        <button class="bg-yellow-500 text-black font-semibold py-3 px-6 rounded hover:bg-yellow-600">
          Shop now
        </button>
      </div>
      <!-- Image Section -->
      <div class="w-1/2 flex gap-6">
        <!-- <img :src="banna" alt="Banner-image-2" class="w-5/6 h-auto object-cover rounded-sm shadow-lg" /> -->
        <img :src="banner" alt="Banner-image" class="w-5/6 h-[28rem] object-cover rounded-sm" />
        
      </div>
    </div>
  </section>
</template>
