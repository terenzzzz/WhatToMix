<template>
    <div class="m-0 p-0 w-100 full-height text-center">
        <div class="row g-0">
            <div class="col-12 col-md-4 col-xxl-2" >
                <ImgLightUp class="h-100" toURL="/ingredient/whiskey" img="../assets/whiskey.jpg" overlayText="Whiskey" ></ImgLightUp>
            </div>
            <div class="col-12 col-md-4 col-xxl-2" >
                <ImgLightUp class="h-100" toURL="/ingredient/gin" img="../assets/gin.jpg" overlayText="Gin" ></ImgLightUp>
            </div>
            <div class="col-12 col-md-4 col-xxl-2">
                <ImgLightUp class="h-100" toURL="/ingredient/vodka" img="../assets/vodka.jpg" overlayText="Vodka" ></ImgLightUp>
            </div>
            <div class="col-12 col-md-4 col-xxl-2">
                <ImgLightUp class="h-100" toURL="/ingredient/rum" img="../assets/rum.jpg" overlayText="Rum" ></ImgLightUp>
            </div>
            <div class="col-12 col-md-4 col-xxl-2" >
                <ImgLightUp class="h-100" toURL="/ingredient/tequila" img="../assets/tequila.jpg" overlayText="Tequila" ></ImgLightUp>
            </div>
            <div class="col-12 col-md-4 col-xxl-2" >
                <ImgLightUp class="h-100" toURL="/ingredient/brandy" img="../assets/brandy.jpg" overlayText="Brandy" ></ImgLightUp>
            </div>
        </div>
    </div>
</template>

<script setup>

import ImgLightUp from "@/components/ImgLightUp.vue";
</script>

<style lang="css" scoped>
.full-height {
    min-height: 100%; /* 让 row 至少填充整个父容器 */
    display: flex;
    flex-wrap: wrap;
}
</style>