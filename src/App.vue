<template>
    <pageLoader v-if="loading == false"></pageLoader>
    <div v-if="loading" class="wrapper " id="wrapper">

        <navView />
        <div v-if="![`Sites`].includes($route.name)" class="text-box">
            <p class="me" ref="me">

                <span>

                </span>
            </p>

        </div>
        <div class="label">
            <i class="fa-solid fa-arrow-up"></i>
            <p>
                home
            </p>
            
        </div>
        <div class="toggle">
            <i class="fa-solid fa-arrow-up"></i>
            <p>
                toggle
            </p>

        </div>

        <div class="circle">

        </div>
        <div class="cursor">

        </div>
        <marquee behavior="" direction="left">

            <p class="bottom-text">
                FRONTEND DEVELOPER
            </p>

        </marquee>

        <router-view v-slot="{component}" ></router-view>
        <Footerview></Footerview>
    </div>
</template>

<script setup>
import {
    RouterView
} from 'vue-router';
import navView from './components/nav.vue';
import Footerview from './components/footerview.vue';
import pageLoader from './components/pageLoader.vue';
import {
    ref,
    onMounted
} from 'vue';
import 
    {gsap}
 from 'gsap';
import {
    TextPlugin
} from 'gsap/TextPlugin'
gsap.registerPlugin(TextPlugin)

const loading = ref(false)
setInterval(() => {
    loading.value = true

}, 5000)
const me = ref(null)

const texts = ['TIMI', 'Developer', 'Writer']

let MasterTL = gsap.timeline({
    repeat: -1,
    yoyo: true
});
    // let cursor= document.querySelector('.cursor')

onMounted(() => {

    setTimeout(() => {
        texts.forEach(text => {

            const tl = gsap.timeline({
                yoyo: true
            })

            tl.to(`${loading.value == true ? '.me' : null}`, {

                duration: 4,
                text: text,
                ease: 'Power3.easeIn',
                // textDecoration: 'underline',
            })
            MasterTL.add(tl)
        });

        gsap.from('#wrapper>*', {
            opacity: 0,
            duration: 5,
            y: '300%',
            stagger: {
                amount: 2,
                from: 'random'
            }
        })
        
    }, 5000)

       

      
   })




</script>

<style lang="scss" scoped>
@import './assets/scss/colors.scss';
@import './assets/scss/utilities.scss';

.dark {
    background-color: #121212 !important;
    color: $white !important;

    a {
        color: $white !important
    }

    p>span::after {
        background-color: #121212 !important;
    }
}

.dark .label p {
    color: $white !important;
}
.dark .cursor {
    background-color: $white !important;
}

.wrapper {
    height: 100vh;
    position: relative;
    background-color: $white;
    z-index: 3;
    transition: all 1s cubic-bezier(0.6, 0.04, 0.98, 0.335);
    overflow: hidden;

    max-width: 100vw !important;

    .text-box {
        width: 100%;
        overflow: hidden;
        position: absolute;
        z-index: 1;
        top: 10%;
        left: 0%;
        text-orientation: sideways;
        rotate:0
        
        p {
            // position: fixed;
            line-height: 60px;
            font-size: 3rem;
            width: 80%;
        }

       
    }

    .circle {
        height: 50vh;
        width: 50vh;
        background: darken($color: red, $amount: 0%);
        border-radius: 50%;
        position: absolute;
        left: -10%;
        display: none;
    }
    .cursor{
        height: 25px;
        width: 25px;
        background-color: red;
        border-radius: 50%;
       position:relative;
        transition: 0.5s ease-in-out;
        // z-index:500;
    }

    p {
        width: 100%;
        font-size: 6em;
        z-index: 1;
        color: lighten($color: $black, $amount: 80%);
        text-align: center;

    }

    marquee {
        position: absolute;
        bottom: 0;
    }

    .label {
        position: absolute;
        left: 12.5%;
        top: 5%;

        p {
            font-size: 0.7rem;
            color: $black;

        }
    }
    .toggle {
        position: absolute;
        right: 4.5%;
        top: 5%;

        p {
            font-size: 0.7rem;
            color: $black;


        }
    }
  

    // darkmode button style
    #btn {
        width: 10%;
        height: 10%;
        position: absolute;
        background: $black;

    }
}

@import './assets/scss/tabresponsiveness.scss';

@import './assets/scss/desktopresponsiveness.scss';
</style>
