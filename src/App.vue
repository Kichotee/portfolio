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
        <p class="bottom-text">
            TIMI
        </p>

    </div>

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
    overflow: hidden;
    z-index: 3;

    max-width: 100vw;

    .text-box {
        width: 100%;
        height: 100vh;
        position: absolute;
        z-index: 1;
        top: 10%;
        left: -30%;
        // rotate: 90deg;
    }

    p {
        width: 100%;
        font-size: 10em;
        z-index: 1;
        color: lighten($color: $black, $amount: 80%);
        text-align: center;

    }
    .bottom-text{
       position: absolute;
      top: 62%;
      right: -70%;
    }
}
</style>
