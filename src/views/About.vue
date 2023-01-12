<template>
    <div class="container">
        <div class="container-box">
            <!-- <video src=".././assets/images/20221207_132552_1.mp4" autoplay loop></video> -->
            <div class="about-me">

                <p> hi, I'm Timi, a junior developer with a passion for creating and building innovative software solutions. 
            I am quite versed with popular frontend frame-works and am constantly seeking to expand my knowledge and skills in the field. 
            I am a quick learner and thrive in collaborative environments where I can contribute my ideas and learn from my colleagues. 
            In my previous projects, I have gained experience in languages such as JavaScript, css,tailwind and have worked on developing  front-end applications. I am excited to continue my journey as a developer 
            and tackle new challenges that come my way.</p>
            </div>
            <div class="about">
                <p>
                    Frontend developer
                </p>
                <h5>
                    Technologies include
                </h5>
                <ul>
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
                <div class="">

                    Contact me <a href="mailto:timiprecious18@gmail.com">here</a>
                    <p><a href="https://docs.google.com/document/d/1ypAdP-fzGrTeDAWr7IT3ae7T3g4yt2_wVnhPnlr6Ye4/edit?usp=sharing"> View resume</a></p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
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
    grid-template-rows: repeat(2,1fr);
    height: 80vh;


    .about {
        grid-column: 1/3;
        overflow: scroll;
        grid-row: -1;
        text-align: right;
        position: relative;
        z-index: 30;
        padding: 50% 0;
        


        p {
            font-size: 2rem;
        }
    }

    .about::-webkit-scrollbar {
        width: 0;
    }

    a {
        text-decoration: underline
    }
    .about-me{

        overflow: scroll;
        grid-column: 3/-1;
        grid-row: 1/-1;
        width: 100%;
        padding: 0 0 1rem;
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
