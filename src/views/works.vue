<template>
<div class="works-wrapper">

    <div class="container">
        <div class="container-box">

            <div class="works" style="">
                <div class="direction">
                    <i @click="preViousItem" class="fa-solid fa-arrow-left"></i>
                    <i @click="nextItem" class="fa-solid fa-arrow-right"></i>

                </div>
                <div v-for="(work, index) in works" key="work" v-show="currentData===index" class="work-box">
                    
                    <div class="buttons">

                        <a :href="work.link" class="btn"> View live site </a>
                        <a :href="work.git" class="btn"> View repo</a>
                    </div>
                    <!-- <img src="/assets/images/bg-2.png" alt=""> -->
                    <img :src="`${work.bg}`" alt="">


                </div>
               <div class="tool-box" v-for="(work, index) in works" key="work" v-show="currentData===index">
                <h4>{{work.title}}</h4>
                {{work.tools}}
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
import {ref, onMounted} from 'vue'
onMounted(()=>{
    const right = document.getElementsByClassName('fa-arrow-right');
    const left = document.getElementsByClassName('fa-arrow-left')
  
})

const currentData = ref(0);

    
const data = useDataStore();
const works= data.works
  const nextItem = ()=>{
    if ( currentData.value+1 < works.length){
        currentData.value++
    }
    else   currentData.value=0
}
 const preViousItem = ()=>{
    if ( currentData.value+1 > works.length){
        currentData.value--
    }
    else   currentData.value=0
}
console.log(currentData.value+1, works.length);




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
    height: 70vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5%;

    .work-box {
        margin: 0 auto;
        width: 98%;
        height: 30vh;
        border: solid;
        box-shadow: 4px 4px;
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
    .tool-box{
        text-align: center;
    }
    .direction{
        position: absolute;
        width: 100%;
        height: 80%;
        display: flex;
         align-items: center;
        justify-content: space-between;
        z-index: 43;
    }
    i{
        font-size: 2em;
        // box-shadow:4px 4px;
        padding: 2px 5px;

border-radius: 50%;
background: lighten($color: $black, $amount: 80)

}
}

@import '../assets/scss/desktopresponsiveness.scss';
</style>
