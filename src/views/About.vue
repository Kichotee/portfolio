<template>
<div class="container">
    <div class="container-box">
        <p>
        I am a junior developer with a passion for creating and building innovative software solutions. 
        I have a strong foundation in computer science and am constantly seeking to expand my knowledge and skills in the field. 
        I am a quick learner and thrive in collaborative environments where I can contribute my ideas and learn from my colleagues. 
        In my previous projects, I have gained experience in languages such as JavaScript, css,tailwind and have worked on developing  front-end applications. I am excited to continue my journey as a developer 
        and tackle new challenges that come my way.
        </p>
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
                <li>
                    <em>

                        GSAP
                    </em>

                </li>
                <li>
                    <em>

                        Pinia
                    </em>

                </li>
            </ul>
            Contact me <a href="mailto:timiprecious18@gmail.com">here</a>
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
    grid-auto-rows: 50%;
    height: 80vh;

    p {
        overflow: scroll;
        grid-column: 3/-1;
        grid-row: 1/-1;
        width: 100%;
        object-fit: cover;
    }

    .about {
        grid-column: 1/3;
        overflow: scroll;
       

        p {
            font-size: 2rem;
        }
    }
    .about::-webkit-scrollbar{
        width: 0;
    }
    a{
        text-decoration: underline
    }

}
@import '../assets/scss/tabresponsiveness.scss';
@import '../assets/scss/desktopresponsiveness.scss';

</style>
