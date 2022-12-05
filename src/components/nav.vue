<template>
<nav class="container" v-if="![`LoginForm`, `Signup`,`dashboard`].includes($route.name)">

    <div class="navlinks">

        <ul>
            <img src="../assets/images/AREmoji_20220521_174657_5823.png" alt="">
            <li>{{date}}</li>

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
    ref
} from 'vue'
import {
    RouterView,
    RouterLink
} from "vue-router";
export default {
    setup() {
        const activeMenu = ref(false)

        function toggleMenu() {
            activeMenu.value = !activeMenu.value
        }
        const date = new Date().toLocaleString();

        const hours = date.getHours;
        const minutes = date.getMinutes;
        return {
            activeMenu,
            toggleMenu,
            date
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/colors.scss';
@import '../assets/scss/utilities.scss';

nav {
    height: 10vh;
    position: sticky;
    padding-top: 1vh;

    .navlinks {}

    ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        height: 100%;
        gap: 2%;
        font-size: 0.6em;

        &>li {
            border: $black solid 2px;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;

        }

        img {
            width: 50%;
            padding: 0 25%;
        }

        li:first-of-type {
            grid-column: 3/-1;
        }

        
    }
}
</style>
