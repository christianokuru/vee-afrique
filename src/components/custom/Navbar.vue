<script setup>
import logo from '@/assets/pics/vee-logo.jpg';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { ref } from 'vue';
import { CoHamburgerMenu } from 'oh-vue-icons/icons';

const navLinks = ref([
  {
    name: 'Home',
    path: '/',
    icon: CoHamburgerMenu,
  },
  {
    name: 'About',
    path: '/about',
    icon: CoHamburgerMenu,
  },
  {
    name: 'Contact',
    path: '/contact',
    icon: CoHamburgerMenu,
  },
]);

// Active link tracking
const activeLink = ref('home');

const setActiveLink = (routeName) => {
  activeLink.value = routeName;
};
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-white/70 backdrop-blur-3xl py-3 px-4 border-b shadow-md md:px-14"
  >
    <nav class="flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <img :src="logo" alt="Vee-afrique-logo" class="w-16 h-16" />
        <div>
          <h4 class="font-semibold font-dancing text-yellow-600 text-2xl md:text-3xl">
            Vee-Afrique
          </h4>
        </div>
      </div>

      <!-- Desktop Navigation -->
      <ul class="hidden md:flex space-x-6">
        <li
          v-for="navLink in navLinks"
          :key="navLink.name"
          @click="setActiveLink(navLink.name)"
          class="nav-link font-semibold"
          :class="{ active: activeLink === navLink.name }"
        >
          <router-link :to="navLink.path">{{ navLink.name }}</router-link>
        </li>
      </ul>

      <!-- Mobile Hamburger Menu -->
      <Sheet>
        <SheetTrigger as-child>
          <div class="md:hidden">
            <v-icon name="co-hamburger-menu" scale="2.3" />
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle class="border-b pb-2 font-dancing text-3xl text-yellow-600">
              Vee's Menu
            </SheetTitle>
          </SheetHeader>
          <ul class="py-4">
            <li
              v-for="navLink in navLinks"
              :key="navLink.name"
              @click="setActiveLink(navLink.name)"
              class="flex items-center justify-center font-bold text-xl py-3 hover:bg-yellow-50 border-b"
              :class="{ active: activeLink === navLink.name }"
            >
              <navLink.icon class="mr-2" />
              <router-link :to="navLink.path">{{ navLink.name }}</router-link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  </header>
</template>

<style scoped>
/* Styles for Navigation Links */
.nav-link {
  transition: all 0.3s ease;
  cursor: pointer;
}

.nav-link.active {
  color: #facc15; /* Highlight color for active links */
  font-weight: bold;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
