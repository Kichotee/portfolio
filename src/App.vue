<script setup>
import {
    RouterView
} from 'vue-router';
import {useDark, useToggle} from '@vueuse/core';
import navView from './components/nav.vue';



</script>

<template>
<div class="wrapper " id="wrapper">

    <navView :useToggle='useToggle' :useDark='useDark' />
    <div v-if="![`Sites`].includes($route.name)" class="text-box">
        <p>
            TIMI
        </p>
       

    </div>
    <div class="label">
        <i class="fa-solid fa-arrow-up"></i>
        <p>
            home
        </p>
    </div>
    
   
    <div class="circle">

    </div>
     <marquee behavior="" direction="left">

        <p class="bottom-text">
            FRONTEND DEVELOPER
        </p>

        </marquee>
       
            
        

    <router-view />
</div>
</template>

<style lang="scss" scoped>
@import './assets/scss/colors.scss';
@import './assets/scss/utilities.scss';
.dark{
    background-color: #121212 !important;
    color:$white !important;
    a{
        color: $white !important
    }
}
.dark .label p{
    color: $white !important;
}

.wrapper {
    height: 100vh;
    position: relative;
    background-color: $white;
    z-index: 3;
    transition: all 1s cubic-bezier(0.6, 0.04, 0.98, 0.335);
    

    max-width: 100vw !important;
    
    .text-box {
        width: max-content;
        height: max-content;
        position: absolute;
        z-index: 1;
        top: 10%;
        left: 0%;
        // rotate: 90deg;
    }
    .circle{
        height: 50vh;
        width: 50vh;
        background: darken($color: red, $amount: 0%);
        border-radius: 50%;
        position: absolute;
        left: -10%;
        display: none;
    }

    p {
        width: 100%;
        font-size: 6em;
        z-index: 1;
        color: lighten($color: $black, $amount: 80%);
        text-align: center;

    }
    marquee{
        position: absolute;
        bottom: 0;
    }
  
    .label{
        position: absolute;
        left: 12.5%;
        top: 5%;
        p{
            font-size:0.7rem;
            color:$black;

        }
    }
   
// darkmode button style
     #btn{
            width: 10%;
            height: 10%;
            position: absolute;
            background: $black;


 
        
}
}
       
@import './assets/scss/tabresponsiveness.scss';

@import './assets/scss/desktopresponsiveness.scss';

</style>
