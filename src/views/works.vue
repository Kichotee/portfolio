<template>
<div class="works-wrapper">

    <div class="container">
        <div class="container-box">

            <div class="works" style="">
                <div v-for="work in works" key="work" class="work-box">
                    <h4>{{work.title}}</h4>
                    <div class="buttons">

                        <a href="" class="btn"> View live site </a>
                        <a href="" class="btn"> View repo</a>
                    </div>
                    <!-- <img src="/assets/images/bg-2.png" alt=""> -->
                    <img :src="`${work.bg}`" alt="">

                </div>

            </div>

        </div>

    </div>
</div>
</template>

<script setup>
import {
    useDataStore
} from "../store/index.js";

    
const data = useDataStore();
const works= data.works
console.log(works.works);
        



</script>

<style lang="scss" scoped>
@import '../assets/scss/colors.scss';
@import '../assets/scss/utilities.scss';

.container {
    overflow-x: hidden;
    overflow-y: scroll;

}

.container-box {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

}

.works {
    grid-column: 1/-1;
    position: relative;
    z-index: 42;
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5%;

    .work-box {
        margin: 0 auto;
        width: 60vw;
        height: 30vh;
        border: solid;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-transform: capitalize;
        position: relative;
        z-index: 40;
    }

    .buttons {
        height: 50%;
        width: 100%;
        margin-top: 5%;
        // border: solid;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 2.5%;

    }

    .btn {
        width: 30%;
        height: 12%;
        font-size: 0.7em;
        text-wrap: nowrap;
        font-weight: bold;
        background: $white;
    }

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -5;

    }
}

@import '../assets/scss/desktopresponsiveness.scss';
</style>
