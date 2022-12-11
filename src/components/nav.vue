<template>
<nav class="container" v-if="![`LoginForm`, `Signup`,`dashboard`].includes($route.name)">

    <div class="navlinks">

        <ul>
            <!-- <img class="bitmoji" src="../assets/images/AREmoji_20220521_174657_5823.png" alt="">  -->
            <router-link to="/">

                <p>Timi</p>

            </router-link>
            <li>{{date}}</li>
            <li id="btn">
                <span @click="toggleMove" id="box" class="box">
                    <span @click="toggleDark" id="ball"></span>
                </span>
            </li>

        </ul>

    </div>
</nav>

<div v-if="activeMenu && ![`LoginForm`, `Signup`,`dashboard`].includes($route.name)" class="navlinks-mobile">
    <ul>
        <li>
            <p></p>
        </li>

    </ul>

</div>
</template>

<script>
import {
    ref,
    onMounted
} from 'vue'
import {
    RouterView,
    RouterLink
} from "vue-router";
import { useToggle } from '@vueuse/shared';
import { useDark } from '@vueuse/core';
export default {
    props:{useToggle, useDark},
    setup() {
        const activeMenu = ref(false)

        function toggleMenu() {
            activeMenu.value = !activeMenu.value
        }
        const date = new Date().toLocaleString();

        const hours = date.getHours;
        const minutes = date.getMinutes;
        
        onMounted(() => {
            const btn = document.getElementById('btn')
            const box = document.getElementById('box')
            const ball = document.getElementById('ball');
            const wrapper = document.getElementById('wrapper');
        })
       
        
        function toggleMove() {

            box.classList.toggle('active');
            ball.classList.toggle('move');

        }
        const toggleDark =()=>{
            wrapper.classList.toggle('dark')
        }

        return {
            activeMenu,
            toggleMenu,
            date,
            toggleMove,
            toggleDark
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/colors.scss';
@import '../assets/scss/utilities.scss';
@import '../assets/scss/darkMode.scss';


nav {
    height: 10vh;
    position: sticky;
    padding-top: 1vh;
    // max-width: 100vw;

    .navlinks {}

    ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        height: 100%;
        gap: 2%;
        font-size: 0.6em;
        place-items: center;
        a{
            
        }

        p {
            font-size: 1.4em;
            // align-items: center;
            // display: flex;
            // height: 100%;

        }

        &>li {

            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;

        }

        li:first-of-type {
            width: 50%;
            grid-column: 2/4;
            white-space: nowrap;

        }

        li:nth-of-type(2) {
            width: 100%;
            height: 100%;

        }

        .box {
            background: $black;
            width: 50%;
            height: 50%;
            justify-items: center;
            margin-left: 50%;
            position: relative;
              transition: all 1s;

            &::before {
                content: '';
                background: white;
                width: 100%;
                height: 1px;
                bottom: 10%;

                position: absolute;

            }
              &>.move {
              transition: all 1s cubic-bezier(0.6, 0.04, 0.98, 0.335);
        margin-left: 60%;
        background: black;
        // left: 80%;
        }

            &>span {
                content: '';
                background: white;
                border-radius: 50%;
                border: 1px dotted blue;
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

      

    }
}

@import '../assets/scss/tabresponsiveness.scss';

@import '../assets/scss/desktopresponsiveness.scss';
</style>
