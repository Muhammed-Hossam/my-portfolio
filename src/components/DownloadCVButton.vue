<template>
  <div class="xl:h-40 mb-8 xl:mb-0 xl:w-fit">
    <button
      class="block uppercase text-2xl max-w-max mx-auto xl:mx-0 xl:mt-44 py-4 px-4 mb-4 xl:mb-0 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 hover:bg-gradient-to-b hover:from-sky-600 hover:via-blue-600 hover:to-indigo-600 shadow-2xl transition-colors duration-300 ease-in-out text-white font-bold  rounded"
      @mouseover="() => addAnimateToIcon()"
      @mouseleave="() => removeAnimationFromIcon()"
      @click="downloadCV"
      >
      Download My CV
      <TrayArrowDown ref="trayArrowDownIcon" />
    </button>
    <p v-if="downloading" class="text-green-600 font-bold text-center text-lg transition-all duration-300 ease-in-out">CV is Downloading...</p>
    <p v-if="downloadError" class="text-red-500 font-bold text-center text-lg transition-all duration-300 ease-in-out">Error downloading CV. Please try again.</p>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import TrayArrowDown from 'vue-material-design-icons/TrayArrowDown.vue';

const trayArrowDownIcon = ref(null)
console.log(trayArrowDownIcon)
const addAnimateToIcon = () => {
  trayArrowDownIcon.value.$el.classList.add('animate-bounce')
}

const removeAnimationFromIcon = () => {
  trayArrowDownIcon.value.$el.classList.remove('animate-bounce')
}

const downloading = ref(false);
const downloadError = ref(false);

const downloadCV = () => {
  // Reset previous states
  downloading.value = false;
  downloadError.value = false;

  // Start downloading
  downloading.value = true;

  fetch('/src/assets/Mohamed-Haroun-CV.pdf') // Replace with the correct path to your CV file
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then((blob) => {
      // Create a link element and trigger a click to download the file
      const url = window.URL.createObjectURL(new Blob([blob]));
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Mohamed-Haroun-CV.pdf'; // Specify the filename
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Reset states after successful download
      setTimeout(() => {
        downloading.value = false;
      }, 3000)
    })
    .catch((error) => {
      console.error('Error during file download:', error);
      setTimeout(() => {
        downloadError.value = true;
      }, 3000)

      // Reset states on error
      downloading.value = false;
    });
};


</script>