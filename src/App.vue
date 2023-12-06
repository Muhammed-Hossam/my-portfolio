<template>
  <div class="app h-screen !transition-colors !duration-500 !ease-in-out" :class="currentTheme" ref="app">
    <AppHeader  />
    <main class="mt-16" >
      <div class="container mx-auto">
        <router-view v-slot="{ Component }">
          <Transition name="slide-down" mode="out-in">
            <Component :is="Component" />
          </Transition>
        </router-view>
      </div>
    </main>
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import { onBeforeUnmount, ref, computed, onMounted, watch } from 'vue';
import { useThemeStore } from './store/themeStore';
import AppDrawer from './components/AppDrawer.vue';

/** Start Theme code **/
const themeStore = useThemeStore();
const currentTheme = computed(() => themeStore.darkMode ? 'dark' : 'light');
const bodyEl = document.querySelector('body');
/** End Theme Code **/




/** Start Mouse gradient effect **/
const app = ref(null);
const updateMousePosition = (event) => {
  const { clientX, clientY } = event;
  if (app.value) {
    app.value.style.setProperty('--x', `${clientX}px`);
    app.value.style.setProperty('--y', `${clientY}px`);
  }
}
window.addEventListener('mousemove', updateMousePosition);
/** End Mouse gradient effect **/


const cleanup = () => {
  window.removeEventListener('mousemove', updateMousePosition);
}

onBeforeUnmount(() => {
  cleanup();
})

onMounted(() => {
  themeStore.loadState();
  bodyEl.classList.add(currentTheme.value)
})

watch(currentTheme, (theme) => {
  if (theme === 'dark') {
    bodyEl.classList.add('dark');
    bodyEl.classList.remove('light');
  }else if (theme === 'light') {
    bodyEl.classList.add('light');
    bodyEl.classList.remove('dark');
  }
})
</script>

<style >
@import "./styles/themes.css";

.app {
  background-image: radial-gradient(
    circle farthest-side /*closest-corner*/ at var(--x) var(--y),
    #1250aa3b 0%,
    transparent 23%
  );
  transition: background-image 0.3s ease-in-out;
}

main {
  will-change: transition, opacity;
}

.fade-enter-from,
.fade-leave-to
{
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active 
{
  transition: opacity 0.3s ease-out;
}


.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	transform: translateX(-100%);
}

.slide-enter-active,
.slide-leave-active {
	transition: 0.3s ease-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
	opacity: 0;
	transform: translateY(300px);
}

.slide-down-enter-active,
.slide-down-leave-active {
	transition: 0.3s ease-out;
}

.grow-in-enter-from,
.grow-in-leave-to {
	opacity: 0;
	transform: scale(0.3);
}

.grow-in-enter-active,
.grow-in-leave-active {
	transition: 0.3s ease-out;
}
</style>
