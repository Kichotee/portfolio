<template>
<div class="container">
    <div class="container-box">
        <video src=".././assets/images/20221207_132552_1.mp4" autoplay loop></video>
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

    video {
        overflow: scroll;
        grid-column: 3/-1;
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

}
</style>
