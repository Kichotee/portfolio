<script setup>
import {
    RouterView
} from 'vue-router'
import navView from './components/nav.vue';
</script>

<template>
<div class="wrapper ">

    <navView />
    <div class="text-box">
        <p>
            TIMI
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

.wrapper {
    height: 100vh;
    position: relative;
    background-color: $white;
    z-index: 3;

    max-width: 100vw !important;
    
    .text-box {
        width: max-content;
        height: max-content;
        position: absolute;
        z-index: 1;
        top: 10%;
        left: -5%;
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
        font-size: 8em;
        z-index: 1;
        color: lighten($color: $black, $amount: 80%);
        text-align: center;

    }
    marquee{
        position: absolute;
        bottom: 0;
    }
    .bottom-text{
      
    }
}
@import './assets/scss/desktopresponsiveness.scss';

</style>
