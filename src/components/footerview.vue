<template>
    <footer>

        <div class="links">
            <a href="https://twitter.com/siriusliblack">
                
                <i class="fa-brands fa-twitter"></i>
            </a>
            <!-- <a href="">
    
                <i class="fa-brands fa-instagram"></i>
            </a> -->
            <a href="https://github.com/Kichotee/">
    
                <i class="fa-brands fa-github"></i> 
            </a>
            <a href="https://www.linkedin.com/in/precious-timilehin-ogundele-166205220/">
    
                <i class="fa-brands fa-linkedin"></i> 
            </a>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../assets/scss/colors.scss';
@import '../assets/scss/utilities.scss';
    footer{
        
    }
    .links {
        width: 30vw;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        z-index: 100;
        position: absolute;
        font-size: 1rem;

        bottom: 10%;
        left: 50%;
        translate: -50% 0;
    }
    
@import '../assets/scss/tabresponsiveness.scss';
@import '../assets/scss/desktopresponsiveness.scss'
</style>