<template>
  <div class="orbit-container relative mt-20 z-10 lg:right-8 lg:top-4">
    <div class="flex justify-center items-center">
      <div class="rounded-full border-4 mx-20 mt-10 border-indigo-800 bg-gradient-to-b from-indigo-600 via-purple-500 to-blue-500">
        <img src="../assets/me.png" class="rounded-full w-36 h-36 lg:w-72 lg:h-72"  alt="mohamed-haroun">
      </div>
    </div>
    <ul class="orbit-icons absolute top-0 left-[10%] lg:top-[18%] lg:left-[20%] origin-center">
      <li 
      v-for="(icon, index) in icons" 
      :key="index"
      :title="icon.alt"
      :style="getIconStyle(index)" 
      class="animated-icon absolute flex justify-center items-center w-16 h-16 lg:w-20 lg:h-20 rounded-full transition-colors duration-300 ease-in-out" 
      :class="icon.bgColor"
      @mouseover="() => handleIconHover(true)"
      @mouseout="() => handleIconHover(false)"
      >
        <img :src="icon.src" :width="icon.size" :height="icon.size" :alt="icon.alt">
      </li>
    </ul>

  </div>
</template>


<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';

import jsIcon from '../assets/tech-icons/javascript-original.svg';
import vueIcon from '../assets/tech-icons/vuejs-original.svg'
import vuetifyIcon from '../assets/tech-icons/vuetify-original.svg'
import bootstrapIcon from '../assets/tech-icons/bootstrap-original.svg'
import tailwindIcon from '../assets/tech-icons/tailwindcss-plain.svg'
import sassIcon from '../assets/tech-icons/sass-original.svg'
import reactIcon from '../assets/tech-icons/react-original.svg'
import piniaIcon from '../assets/tech-icons/pinia-original.svg'

       // Add a background color based on the index
    const bgColors = [
    'bg-yellow-400 hover:bg-yellow-500',
    'bg-emerald-600 hover:bg-teal-700',
    'bg-indigo-600 hover:bg-indigo-700',
    'bg-purple-600 hover:bg-purple-700',
    'bg-blue-600 hover:bg-blue-700',
    'bg-fuchsia-800 hover:bg-fuchsia-900',
    'bg-sky-500 hover:bg-sky-600',
    'bg-yellow-500 hover:bg-yellow-600',
  ];

  const isLargeScreen = ref(false);

  const checkScreenSize = () => {
    isLargeScreen.value = window.innerWidth >= 1024;
  }

const icons = ref([
  { src: jsIcon, size: '40', alt: 'JavaScript', bgColor: bgColors[0] },
  { src: vueIcon, size: '40', alt: 'Vue.js', bgColor: bgColors[1] },
  { src: vuetifyIcon, size: '40', alt: 'Vuetify', bgColor: bgColors[2] },
  { src: bootstrapIcon, size: '40', alt: 'Bootstrap', bgColor: bgColors[3] },
  { src: tailwindIcon, size: '40', alt: 'Tailwindcss', bgColor: bgColors[4] },
  { src: sassIcon, size: '40', alt: 'SASS', bgColor: bgColors[5] },
  { src: reactIcon, size: '40', alt: 'React.js', bgColor: bgColors[6] },
  { src: piniaIcon, size: '40', alt: 'Pinia', bgColor: bgColors[7] },
])
const orbitRadius = ref(140);
const rotationAngle = ref(0);


const getIconStyle = (index) => {
  const angle = (360 / icons.value.length) * index + rotationAngle.value;
      const centerX = 20 + 75; // Adjust based on the width of the center item
      const centerY = 10 + 75; // Adjust based on the height of the center item
      const x = centerX + orbitRadius.value * Math.cos((angle * Math.PI) / 180);
      const y = centerY + orbitRadius.value * Math.sin((angle * Math.PI) / 180);

      return {
        transform: `translate(${x}px, ${y}px) rotate(${rotationAngle.value}deg)`,
      };
}

const handleIconHover = (isHovered) => {
  if (isHovered) {
    clearInterval(rotationInterval);
  }else {
    startRotation();
  }
}

let rotationInterval;

const startRotation = () => {
  rotationInterval = setInterval(() => {
      rotationAngle.value += 0.5;
  }, 50)
}

onMounted(() => {
  startRotation();
  checkScreenSize();

  window.addEventListener('resize', checkScreenSize);
})

onBeforeUnmount(() => {
  clearInterval(rotationInterval);
  window.removeEventListener('resize', checkScreenSize);
})


watch(isLargeScreen, (bool) => {
  orbitRadius.value = 220;
})

</script>


<style scoped>
.animated-icon {
  opacity: 0; /* Start with icons invisible */
  animation: appearAnimation ease-in-out forwards;
  animation-duration: 0.8s;
  animation-delay: 0.3s;
}

@keyframes appearAnimation {
  0% {
    opacity: 0;
    transform: translate(
      /* Random initial X position between -100px and 100px */
      calc(-100px + 200px),
      /* Random initial Y position between -100px and 100px */
      calc(-100px + 200px)
    );
  }
  100% {
    opacity: 1;
  }
}
</style>