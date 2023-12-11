<template>
  <div class="app !transition-colors !duration-500 !ease-in-out" ref="app">
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

/** Start Theme code **/
const themeStore = useThemeStore();
const currentTheme = computed(() => themeStore.darkMode ? 'dark' : 'light');
const bodyEl = document.querySelector('body');
/** End Theme Code **/



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


main {
  will-change: transition, opacity;
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

</style>
