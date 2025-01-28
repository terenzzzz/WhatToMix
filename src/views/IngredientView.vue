<template>
    <div class="container">
        <div class="card-container mt-3 h-100" @mouseenter="showOverlay = true" @mouseleave="showOverlay = false">
            <div v-if="ingredient.strDescription"  v-show="showOverlay" class="overlay rounded-4 border-0 h-100 overflow-auto wow fadeIn" data-wow-duration="0.5s">
                <small>{{ ingredient.strDescription }}</small>
            </div>
            <div class="row">
                <div class="col-4 d-flex justify-content-center align-items-center h-100">
                    <img :src="`https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(ingredient.strIngredient)}-medium.png`" class="img-fluid">
                </div>
                <div class="col-8 ">
                    <h1 class="m-0 border-bottom">{{ ingredient.strIngredient }}</h1>

                    <div class="d-flex flex-column justify-content-around h-100">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex flex-column align-items-center justify-content-center">
                                <h1 class="text-danger m-0">{{ ingredient.strABV?ingredient.strABV:0 }}%</h1>
                                <p>ABV</p>
                            </div>
                            <div class="d-flex flex-column align-items-center justify-content-center">
                                <h1 class="text-danger m-0">{{ ingredient.strAlcohol?ingredient.strAlcohol:'Unknown' }}</h1>
                                <p>Alcoholic</p>
                            </div>
                            <div class="d-flex flex-column align-items-center justify-content-center">
                                <h1 class="text-danger m-0">{{ ingredient.strType?ingredient.strType:'Unknown' }}</h1>
                                <p>Type</p>
                            </div>
                        </div>
                        <p class="text-muted text-end" v-if="ingredient.strDescription"> Hover to See the Description </p>
                    </div>

                </div>
            </div>
        </div>
        <div id="Result" class="row mt-4">
            <div class="col-6 col-md-4 col-xl-3 mb-3" v-for="(cocktail, index) in cocktails" :key="index">
                <CocktailPreview :cock-tail="cocktail" style="height: 100%;" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router"; // 引入 useRoute
import { onMounted, ref } from "vue";
import {searchByIngredient, searchIngredientByName} from "@/api/cocktails.js";
import CocktailPreview from "@/components/CocktailPreview.vue";

const route = useRoute(); // 获取当前路由对象

let ingredient = ref({});
let showOverlay = ref(false);
let cocktails = ref([]);

onMounted(async () => {
    const name = route.params.name; // 从路由参数中获取 id
    const response = await searchIngredientByName(name); // 调用 API 获取食材详情
    ingredient.value = response.data.ingredients[0];

    const cocktailsResponse = await searchByIngredient(name)
    cocktails.value = cocktailsResponse.data.drinks.flat();


});
</script>

<style scoped lang="css">
.card-container {
    position: relative;
    margin: 0;
    overflow: hidden;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(51, 65, 85, 0.9);
    color: white;
    padding: 15px;
    opacity: 0; /* 初始透明度为0 */
    transition: opacity 0.5s ease-in-out; /* 过渡效果 */
}

.overlay.fadeIn {
    opacity: 1; /* 鼠标悬停时透明度为1 */
}

/* 隐藏滚动条 */
.overlay::-webkit-scrollbar {
    display: none; /* 对于WebKit浏览器 */
}

.overlay {
    -ms-overflow-style: none;  /* IE和Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>
