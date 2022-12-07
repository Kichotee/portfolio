<template>
<div class="works-wrapper">

    <div class="container">
        <div class="container-box">

            <div class="works">
                <div v-for="work in works" key="work" class="work-box">
                    <h4>{{work.title}}</h4>
                    <div class="buttons">

                    <a href="" class="btn"> View live site </a>
                    <a href="" class="btn"> View repo</a>

                    </div>
                </div>

            </div>

        </div>

    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            works: [{
                    title: 'clinicplus',
                    description: 'A frontend app for a telemedicine service',
                    tools: 'vue, composition-api, gsap'
                },
                {
                    title: 'space-app',
                    description: 'A space tourism website',
                    tools: 'vue, composition-api, pinia, tailwind'
                },
                {
                    title: 'space-app',
                    description: 'A space tourism website',
                    tools: 'vue, composition-api, pinia, tailwind'
                },
            ]
        }
    }

}
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
    }
    .buttons{
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
        text-wrap:nowrap;
        font-weight: bold;
    }
}
@import '../assets/scss/desktopresponsiveness.scss';
</style>
