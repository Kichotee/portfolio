<template>
<div class="container">
    <div class="container-box">
        <div class="img-box">
            <img src=".././assets/images/AREmoji_20220522_090519_2937.png" alt="">
        </div>
       
        <div class="content-box">
            <div class="paragraph">
                <div class="paragraph-box">


            <p id="info" ref="detailText"></p>
                </div>

               
            
            </div>
            <ul>

                <li class="btn">
                <router-link to='/sites'>
                    Works
                </router-link>
                </li>


                <li class="btn">
                <router-link to='/about'>
                    About
                </router-link>
                </li>


               

            </ul>
        </div>
    </div>

</div>

</template>

<script>
import { RouterView, RouterLink } from "vue-router";
import {ref, onMounted } from 'vue'

export default {
    setup(){
        //
         let text = 'Hi, Im Timi a frontend developer who builds usable and aesthetically pleasing web pages and as you can see i have a halo... or maybe you\'re on mobile'
            let i =0;
        onMounted(()=>{
            const info = document.querySelector('#info')
           
           const textInt=  setInterval(() => {
                info.innerHTML += text[i];
                i++;

                if (i===text.length) {
                    clearInterval(textInt) 
                }
            }, 100);
        })
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/colors.scss';
@import '../assets/scss/utilities.scss';


.container {
    // overflow: hidden;
    // border: solid;
    height: 80vh;
    max-height: 80vh !important;
    font-size: 2em;
    text-align: center;
    z-index: 40;
    position: relative;
    overflow: hidden;


    .container-box {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 50% ;
        height: 100%;
    }

}

.img-box {
    grid-column: 1/-1;
    display: flex;
    justify-content: center;
    
    

    img {
        width: 80%;
        height: 80%;

        

    }
}


.content-box {
    grid-column: 1/-1;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    height: 100%;
    width: 100%;
   font-size: 0.8em;
    .paragraph-box{
            background-color: blue;
            height: 70%;
            padding: 2.5% 5%;

    }
    p {
        font-size: 0.5em;
        margin: 0 0 10%;
            

    }
    ul{
        display: flex;
        flex-direction: column;
        gap: 2vh;
        width: 100%;
        align-items: center;
    }
    li {
        list-style-type: none
        
    }
    .btn{
        height: 3vh;
        width: 50%;
    }
}
@import '../assets/scss/desktopresponsiveness.scss';
@import '../assets/scss/tabresponsiveness.scss';


</style>
