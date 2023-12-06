<template>
  <div class="card-container w-3/4 mt-28">
    <h3 class="card-title text-center mb-8">
      <span class="border-b-2 border-indigo-700 p-4 pb-1 text-3xl uppercase font-semibold">{{ title }}</span>
    </h3>
    <div
      class="
      info-card
      relative
      flex
      justify-center
      items-center
      overflow-hidden
      bg-[url('../assets/light-animated-shape.svg')]
      dark:bg-[url('../assets/dark-animated-shape.svg')]
      bg-cover
      before:absolute
      before:w-[140%]
      before:h-[150px]
      md:before:h-[90px]
      before:rounded-lg
      after:absolute
      after:bg-cover
      after:bg-[url('../assets/light-animated-shape.svg')] 
      dark:after:bg-[url('../assets/dark-animated-shape.svg')] 
      rounded-lg shadow-2xl p-6 hover:scale-105 
      transition-transform duration-300 ease-in-out
      ">
      <div class="info-card-content relative z-50 cursor-default">
        <slot />
      </div>
    </div>
  </div>
</template>


<script setup>
import { defineProps } from 'vue';

defineProps(['title'])
</script>

<style scoped>
.info-card {
  will-change: transform, scale;
}

.info-card:hover::before {
  background: linear-gradient(#4f46e5, #c026d3);
  animation: rotate 6s linear infinite;
}

.info-card::after {
  inset: 4px;
}

@keyframes rotate {
  10% {
    transform: rotate(36deg);
  }

  20% {
    transform: rotate(72deg);
  }

  30% {
    transform: rotate(108deg);
  }

  40% {
    transform: rotate(144deg);
  }

  50% {
    transform: rotate(180deg);
  }

  60% {
    transform: rotate(216deg);
  }

  70% {
    transform: rotate(252deg);
  }

  80% {
    transform: rotate(288deg);
  }

  90% {
    transform: rotate(324deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>