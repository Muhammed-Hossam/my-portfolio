<template>
  <div class="typewriter text-center my-6 xl:!mx-0 xl:text-start w-11/12 mx-auto lg:w-[56rem] h-44 xl:h-16 xl:w-[36rem]">
    <h2 class="text-4xl lg:text-6xl font-normal p-1 lg:p-0">
      <span class="typed-text font-bold leading-normal">{{ config.typeValue }}</span>
      <span class="cursor inline-block ml-1 w-1 bg-slate-800 dark:bg-slate-200" ref="cursor" :class="{'typing': config.typeStatus}" style="--cursor-color: rgb(30 41 59)">&nbsp;</span>
    </h2>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref, watch, computed, onUnmounted } from 'vue';
import { useThemeStore } from '../store/themeStore';

const theme = useThemeStore();
const cursor = ref(null);
const isDarkMode = computed(() => theme.darkMode ? true : false);

const cursorBgColor = (isDarkTheme) => {
  cursor.value.style.setProperty('--cursor-color', 'rgb(30 41 59)');
  if (isDarkTheme) {
    cursor.value.style.setProperty('--cursor-color', 'rgb(226 232 240)');
  }
}

const config = reactive({
  typeValue: '',
  typeStatus: false,
  typeArray: ['I\'m a Frontend Web Developer.', 'Transforming Ideas into Interactive Experiences.', 'Turning Dreams into Digital Realities.'],
  typingSpeed: 100,
  erasingSpeed: 70,
  newTextDelay: 1500, 
  eraseTextDelay: 3500, 
  typeArrayIndex: 0,
  charIndex: 0,
  typeTimerId: null,
  eraseTimerId: null,
})

const typeText = () => {
  if (config.charIndex < config.typeArray[config.typeArrayIndex].length) {
    if (!config.typeStatus) {
      config.typeStatus = true;
    } 

    config.typeValue += config.typeArray[config.typeArrayIndex].charAt(config.charIndex);
    config.charIndex += 1;
    
    config.typeTimerId = setTimeout(() => {
      typeText();
    }, config.typingSpeed);
  } else {
    config.typeStatus = false;
    config.eraseTimerId = setTimeout(() => {
      eraseText();
    }, config.eraseTextDelay); // Adjusted to eraseTextDelay
  }
}

const eraseText = () => {
  if (config.charIndex > 0) {
    if (!config.typeStatus)
      config.typeStatus = true;

    config.typeValue = config.typeArray[config.typeArrayIndex].substring(0, config.charIndex - 1);
    config.charIndex -= 1;
    
    config.eraseTimerId = setTimeout(() => {
      eraseText();
    }, config.erasingSpeed);
  } else {
    config.typeStatus = false;

    // Infinite loop through typeArray
    config.eraseTimerId = setTimeout(() => {
      if (config.typeArrayIndex < config.typeArray.length - 1) {
        // If there are more sentences in the array, move to the next one
        config.typeArrayIndex += 1;
        config.typeTimerId = setTimeout(() => {
          typeText();
        }, config.typingSpeed);
      } else {
        // If reached the end of the array, reset to the first sentence
        config.typeArrayIndex = 0;
        config.typeTimerId = setTimeout(() => {
          typeText();
        }, config.typingSpeed);
      }
    }, config.newTextDelay)

  }
};

onMounted(() => {
  setTimeout(typeText, config.newTextDelay);
});
onUnmounted(() => {
  // Clear the timers when the component is unmounted
  clearTimeout(config.typeTimerId);
  clearTimeout(config.eraseTimerId);
})

watch(isDarkMode ,(isDark) => {
  cursorBgColor(isDark);
})
</script>

<style scoped>
.cursor {
  animation: cursorBlink 1s infinite;
}

span.cursor.typing {
  animation: none;
}

.typed-text {
  background: linear-gradient(to right, #3b82f6, #a855f7, #6366f1); /* Adjust colors as needed */
  background-clip: text;
  color: transparent;
}

@keyframes cursorBlink {
  49% {
    background-color: var(--cursor-color);
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
