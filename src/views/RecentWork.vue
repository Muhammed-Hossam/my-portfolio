<template>
  <div class="recent-work">
    <div class="container">
      <div class="flex flex-col justify-center items-center mb-8">
          <MainHeading title="My Recent Work" text-size="text-3xl lg:text-6xl" :is-uppercase="true" class="my-14" />
          <div class="flex justify-center  flex-wrap  gap-6">
            <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
          </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import ProjectCard from '../components/ProjectCard.vue';
import MainHeading from '../components/MainHeading.vue';

/** Start importing images for Space Tourism Website **/
import spaceTourism1 from '../assets/projects/space-tourism/1.png'
import spaceTourism2 from '../assets/projects/space-tourism/2.png'
import spaceTourism3 from '../assets/projects/space-tourism/3.png'
import spaceTourism4 from '../assets/projects/space-tourism/4.png'
/** End importing images for Space Tourism Website **/

/** Start importing images for deaf-dumb Website **/
import deafDumb1 from '../assets/projects/deaf-dumb/1.png';
import deafDumb2 from '../assets/projects/deaf-dumb/2.png';
import deafDumb3 from '../assets/projects/deaf-dumb/3.png';
import deafDumb4 from '../assets/projects/deaf-dumb/4.png';
import deafDumb5 from '../assets/projects/deaf-dumb/5.png';
import deafDumb6 from '../assets/projects/deaf-dumb/6.png';
import deafDumb7 from '../assets/projects/deaf-dumb/7.png';
import deafDumb8 from '../assets/projects/deaf-dumb/8.png';
import deafDumb9 from '../assets/projects/deaf-dumb/9.png';
import deafDumb10 from '../assets/projects/deaf-dumb/10.png';
import deafDumb11 from '../assets/projects/deaf-dumb/11.png';
import deafDumb12 from '../assets/projects/deaf-dumb/12.png';
import deafDumb13 from '../assets/projects/deaf-dumb/13.png';
/** End importing images for deaf-dumb Website **/

/** Start importing images for darsy-platform website **/
import darsyPlatform1 from '../assets/projects/darsy-platform/1.png';
import stayTunedImg from '../assets/projects/darsy-platform/stay-tuned.png';
import projectComingSoonImg from '../assets/projects/darsy-platform/project-coming-soon.png';
/** End importing images for darsy-platform website **/

/** Start import Tech Icons **/
import vuejs from '../assets/tech-icons/vuejs-original.svg';
import vuetify from '../assets/tech-icons/vuetify-original.svg';
import bootstrap from '../assets/tech-icons/bootstrap-original.svg';
import sass from '../assets/tech-icons/sass-original.svg';
import firebase from '../assets/tech-icons/firebase.svg';
import swiperjs from '../assets/tech-icons/swiper-logo.svg';
import pinia from '../assets/tech-icons/pinia-original.svg';
import laravel from '../assets/tech-icons/laravel.svg';
import mysql from '../assets/tech-icons/mysql.svg';
/** End import Tech Icons **/


const projects  = [
  {
    title: 'Deaf & Dumb Website',
    images: [deafDumb1, deafDumb2, deafDumb3, deafDumb4, deafDumb5, deafDumb6, deafDumb7, deafDumb8, deafDumb9, deafDumb10, deafDumb11, deafDumb12, deafDumb13],
    description: 'A website to aid deaf and dumb individuals in learning English, featuring user authentication, profile customization, and a data-upload dashboard using Firebase.',
    demoLink: 'https://deaf-dumb.netlify.app',
    githubLink: 'https://github.com/Muhammed-Hossam/deaf-dumb',
    demoLinkEnabled: true,
    githubLinkEnabled: true,
    techUsed: [
      {
        name: 'Vue.js',
        src: vuejs
      },
      {
        name: 'Bootstrap',
        src: bootstrap
      },
      {
        name: 'SASS',
        src: sass
      },
      {
        name: 'Firebase',
        src: firebase
      },
      {
        name: 'Swiper.js',
        src: swiperjs
      }
    ]
  },
  {
    title: 'Space Tourism Landing Page',
    images: [spaceTourism1, spaceTourism2, spaceTourism3, spaceTourism4],
    description: 'Full Responsive Space Tourism Landing Page Consists of 4 pages with Sliders',
    demoLink: 'https://zspace.netlify.app',
    githubLink: 'https://github.com/Muhammed-Hossam/space',
    demoLinkEnabled: true,
    githubLinkEnabled: true,
    techUsed: [
      {
        name: 'Vue.js',
        src: vuejs
      },
      {
        name: 'Vuetify',
        src: bootstrap
      },
      {
        name: 'SASS',
        src: sass
      },
    ]
  },
  {
    title: 'Darsy Platform',
    images: [darsyPlatform1, stayTunedImg, projectComingSoonImg],
    description: 'An Arabic Learning Management System, Key features include user authentication, course creation, dashboards, notifications, and an admin panel.',
    demoLink: 'https://zspace.netlify.app',
    githubLink: 'https://github.com/Muhammed-Hossam/darsy-lms-app',
    demoLinkEnabled: false,
    githubLinkEnabled: true,
    techUsed: [
      {
        name: 'Vue.js',
        src: vuejs
      },
      {
        name: 'Vuetify.js',
        src: vuetify
      },
      {
        name: 'SASS',
        src: sass
      },
      {
        name: 'Pinia',
        src: pinia
      },
      {
        name: 'Laravel',
        src: laravel
      },
      {
        name: 'MySQL',
        src: mysql
      },
    ]
  },
]

</script>


<style scoped>

</style>