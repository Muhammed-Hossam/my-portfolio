<template>
  <div class="Home">
    <div class="flex flex-col xl:flex-row-reverse xl:justify-between justify-center items-center gap-40">
      <PictureOrbit />
      <div class="grid xl:grid-rows-3 xl:auto-rows-fr  mt-6 xl:mt-0 w-full xl:w-auto xl:h-[25rem]">
        <h1 class=" text-2xl lg:text-4xl xl:text-3xl text-center xl:text-start font-medium tracking-wider text-blue-700 xl:inline mt-auto">Hi, I'm Mohamed Haroun</h1>
        <TypewriterEffect />
        <DownloadCVButton />
      </div>
    </div>
  </div>
</template>


<script setup>
import DownloadCVButton from '../components/DownloadCVButton.vue';
import PictureOrbit from '../components/PictureOrbit.vue';
import TypewriterEffect from '../components/TypewriterEffect.vue';


</script>


<style scoped>

</style>