<template>
<div class="container">
    <div class="container-box">
       <p class="about-me">
        Hello there, i see you've wandered into my space of self exhibition, glad to have you here. I'm Timi a frontend developer from Nigeria and this my ordered portfolio v1.0.
 <br>
 I could bore you with my skills in this little autobiography but i don't believe you are much a fan of boredom(if anyone ever is).
 Asides editing sophisticated text files  to improve interaction on the Web, I'm enjoying literature, going down pre-renaissance and later art rabbit holes and hoping Real madrid doesn't hasten me to my grave.
 If you enjoy what you just read i might have more here <a href="https://timithenigerian.substack.com/">here</a>
 May the lights guide you
       </p>
        <transition-group tag="div" appear @before-enter="beforeEnter" @enter="onEnter" class="about" >
            <p key="Title">
                Frontend developer
            </p>
            <h5 key="subtitle">
                Technologies include
            </h5>
            <ul key="list">
                <li>
                    <em>

                            Vue js
                        </em>

                    </li>
                    <li>
                        <em>

                            React
                        </em>

                    </li>
                    <li>
                        <em>

                            Scss
                        </em>

                    </li>
                    <li>
                        <em>

                            Tailwind css
                        </em>

                    </li>
                    <li>
                        <em>

                            NuxtJs
                        </em>

                    </li>
                   
                </ul>
                <div key="contact" class="">

                    Contact me <a href="mailto:timiprecious18@gmail.com">here</a>
                    <p><a href="https://docs.google.com/document/d/1ypAdP-fzGrTeDAWr7IT3ae7T3g4yt2_wVnhPnlr6Ye4/edit?usp=sharing"> View resume</a></p>
                </div>
            </transition-group>
        </div>
    </div>

</template>

<script setup>
import gsap from 'gsap';
import { ref } from 'vue';
const beforeEnter=ref(null)
const onEnter=ref(null)


beforeEnter.value=(el)=> gsap.from(el,{
   opacity: 0,
   y:'-100%'

})
onEnter.value =(el)=> gsap.to(el,{
   opacity:1,
   y:0,
   ease:'bounce',
   duration:14

})
</script>

<style lang="scss" scoped>
@import '../assets/scss/colors.scss';
@import '../assets/scss/utilities.scss';


.container {
    height: 80vh;
    max-height: 80vh !important;
    position: relative;
    overflow: hidden;
    z-index: 40;

}

.container-box {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5,1fr);
    height: 80vh;

    .about-me {
        overflow: scroll;
        grid-column: 3/-1;
        grid-row: 1/4;
        height: 100%;
    }

    .about {
        grid-column: 1/3;
        overflow: scroll;
        grid-row: 3/-1;
        text-align: right;
        position: relative;
        z-index: 30;
        padding: 50% 0;
        


       
    }

    .about::-webkit-scrollbar {
        width: 0;
    }

    a {
        text-decoration: underline
    }
    .about-me{

       
        &::-webkit-scrollbar{
            width: 0;

        }
        p{
            // width: 0%;
            line-height: 1.5rem;
            margin: 0 auto;
            
            &::first-letter{
                text-transform: capitalize;

    
            }

        }
    }

}

@import '../assets/scss/tabresponsiveness.scss';
@import '../assets/scss/desktopresponsiveness.scss';
</style>
