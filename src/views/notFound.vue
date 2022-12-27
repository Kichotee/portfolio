<template>
<div class="error-page">
    <h4>
        Uhm I have no idea what you're looking for shall we return
    </h4>

    <i class="fa-solid fa-home"></i>

</div>
>
</template>

<script setup>
import {
    RouterView
} from 'vue-router';
import {
    RouterLink
} from 'vue-router';
</script>

<style lang="scss" scoped>
.error-page {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h4 {
        font-size: larger;
        z-index: 10;

    }

    i {
        font-size: large;
    }
}
</style>
