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
.dark{
    background-color: $black !important;
    color:$white !important;
    a{
        color: $white !important
    }
}

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
    .box{
        display: none;
    }
    
    .box-1{
        position: absolute;
      top: 10%;
right: 0;
        width: max-content;
        background: red;
        rotate: -45deg;
        p{
            font-size: 1.5em
        }
    }
    .box-2{
        width: max-content;
      position: absolute;
      top: 20%;
right: 0;
        background: purple;
        rotate: 0deg;
        margin-top: 10%;
        p{
            font-size: 3em
        }
    }
     .box-3{
        position: absolute;
      top: 30%;
left:0;
        width: max-content;
     
        background: yellow;
        rotate: 45deg;
        margin-top: 10%;
       
        p{
            font-size: 1.75em;
             color: black;
        }
    }
// darmode button style
     #btn{
            width: 10%;
            height: 10%;
            position: absolute;
            background: $black;


        }
  .box {
            background: $black;
            width: 100%;
            height: 50%;
            position: relative;
              transition: all 1s;

        }
      &::before {
                content: '';
                background: white;
                width: 100%;
                height: 1px;
                bottom: 10%;

                position: absolute;

            }
              &>.move {
              transition: all 1s cubic-bezier(0.755, 0.05, 0.855, 0.06);
        margin-left: 76%;
        background: black;
        // left: 80%;
        }

            &>span {
                content: '';
                background: white;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                position: absolute;
                top: 50%;
                translate: 0 -50%;
                transition: all 1s;

            }

        
}

        .active {
            background: blue;
        }
@import './assets/scss/tabresponsiveness.scss';

@import './assets/scss/desktopresponsiveness.scss';

</style>
