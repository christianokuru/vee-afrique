<script setup>
import { ref } from 'vue';

const features = ref([
  {
    id: 1,
    icon: 'la-shipping-fast-solid',
    title: 'Free Shipping',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed.',
  },
  {
    id: 2,
    icon: 'md-supportagent', 
    title: 'Support 24/7',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed.',
  },
  {
    id: 3,
    icon: 'gi-take-my-money', 
    title: 'Money Return',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed.',
  },
]);
</script>

<template>
    <section class="py-10 bg-gray-50">
      <div
        class="max-w-6xl mx-auto px-4 flex md:flex-row gap-8 md:gap-4 items-center text-center"
      >
        <div
          v-for="feature in features"
          :key="feature.id"
          class="px-2 flex-1 flex flex-col items-center border-l border-gray-200 md:border-l-0 md:border-r last:border-r-0"
        >
          <!-- Icon -->
          <v-icon
            :name="feature.icon"
            class="w-8 h-8 text-yellow-700 text-5xl mb-4"
          />
          <!-- Title -->
          <h3 class="md:text-lg font-semibold text-gray-800 mb-2">
            {{ feature.title }}
          </h3>
          <!-- Description -->
          <p class="hidden md:block md:text-sm md:text-gray-600">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </section>
  </template>
