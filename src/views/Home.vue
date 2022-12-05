<template>
<div class="container">
    <div class="container-box">
        <div class="img-box">
            <img src="../assets/images/AREmoji_20220521_174657_5823.png" alt="">
        </div>
        <div class="content-box">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio expedita autem pariatur perferendis quia tempora provident voluptate nostrum esse? 
            </p>
            <ul>
                <li class="btn">Works</li>
                <li class="btn">About</li>
                <li class="btn">Contact</li>
            </ul>
        </div>
    </div>

</div>
<div class="box"></div>
</template>

<script>
export default {

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

    .container-box {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 200px;
    }

}

.img-box {
    grid-column: 1/-1;
    display: flex;
    justify-content: center;

    img {
        min-width: 60%;
    }
}

.content-box {
    grid-column: 1/-1;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 0.7em;
        margin: 0 0 10%;
    }

    li {
        list-style-type: none
    }
}
</style>
