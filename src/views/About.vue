<template>
  <div class="container">
    <div class="container-box">
        <video src="../assets/images/20221207_132552_1.mp4" autoplay loop></video>
        <div class="about">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi tempore quidem aliquid mollitia possimus suscipit ab eaque ratione officiis ipsa iste, sint consectetur, non dolor id. Magnam, soluta repellendus?
                Ab temporibus veritatis, magnam, consectetur et aspernatur minima fuga sequi sunt officia quas maiores quibusdam recusandae ipsum accusantium! Ipsa libero dicta iste sunt aliquid enim neque vero. Unde, doloribus fugit?
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.container{
    height: 80vh;
    max-height: 80vh  !important;
    position: relative;
    overflow: hidden

}
.container-box {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-auto-rows: 50%;
    height: 80vh;

    video{
        overflow: scroll;
        grid-column: 3/-1;
        width: 100%;
        object-fit: cover;
    }
    .about{
        grid-column: 1/3;
        overflow: scroll;
    }
    

}
</style>