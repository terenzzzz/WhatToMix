<template>
    <div class="m-0 p-0 w-100 full-height text-center">
        <div class="row g-0">
            <div class="col-12 col-md-4 col-xxl-2" >
                <ImgLightUp class="h-100" toURL="/ingredient/whiskey" :img="whiskeyImg" overlayText="Whiskey" ></ImgLightUp>
            </div>
            <div class="col-12 col-md-4 col-xxl-2" >
                <ImgLightUp class="h-100" toURL="/ingredient/gin" :img="ginImg" overlayText="Gin" ></ImgLightUp>
            </div>
            <div class="col-12 col-md-4 col-xxl-2">
                <ImgLightUp class="h-100" toURL="/ingredient/vodka" :img="vodkaImg" overlayText="Vodka" ></ImgLightUp>
            </div>
            <div class="col-12 col-md-4 col-xxl-2">
                <ImgLightUp class="h-100" toURL="/ingredient/rum" :img="rumImg" overlayText="Rum" ></ImgLightUp>
            </div>
            <div class="col-12 col-md-4 col-xxl-2" >
                <ImgLightUp class="h-100" toURL="/ingredient/tequila" :img="tequilaImg" overlayText="Tequila" ></ImgLightUp>
            </div>
            <div class="col-12 col-md-4 col-xxl-2" >
                <ImgLightUp class="h-100" toURL="/ingredient/brandy" :img="brandyImg" overlayText="Brandy" ></ImgLightUp>
            </div>
        </div>
    </div>
</template>

<script setup>
import ImgLightUp from "@/components/ImgLightUp.vue";
import whiskeyImg from '@/assets/whiskey.png';
import ginImg from '@/assets/gin.png';
import vodkaImg from '@/assets/vodka.png';
import rumImg from '@/assets/rum.png';
import tequilaImg from '@/assets/tequila.png';
import brandyImg from '@/assets/brandy.png';
</script>

<style lang="css" scoped>
.full-height {
    min-height: 100%; /* 让 row 至少填充整个父容器 */
    display: flex;
    flex-wrap: wrap;
}
</style>