<template>
    <div class="row text-center m-0">
        <div class="container-fluid d-flex m-0 p-0 w-100">
            <div class="flex-grow-1" style="flex-basis: 20%;">
                <ImgLightUp class="h-100" toURL="/ingredient/whiskey" img="../assets/whiskey.jpg" overlayText="Whiskey" ></ImgLightUp>
            </div>
            <div class="flex-grow-1" style="flex-basis: 20%;">

                <ImgLightUp class="h-100" toURL="/ingredient/gin" img="../assets/gin.jpg" overlayText="Gin" ></ImgLightUp>
            </div>
            <div class="flex-grow-1" style="flex-basis: 20%;">
                <ImgLightUp class="h-100" toURL="/ingredient/rum" img="../assets/rum.jpg" overlayText="Rum" ></ImgLightUp>
            </div>
            <div class="flex-grow-1" style="flex-basis: 20%;">
                <ImgLightUp class="h-100" toURL="/ingredient/vodka" img="../assets/vodka.jpg" overlayText="Vodka" ></ImgLightUp>
            </div>
            <div class="flex-grow-1" style="flex-basis: 20%;">
                <ImgLightUp class="h-100" toURL="/ingredient/tequila" img="../assets/tequila.jpg" overlayText="Tequila" ></ImgLightUp>
            </div>
        </div>
    </div>
</template>

<script setup>

import ImgLightUp from "@/components/ImgLightUp.vue";
</script>
