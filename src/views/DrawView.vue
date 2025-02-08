<template>
    <div>
        <div class="position-relative">
            <img src="../assets/bar_hero_6.png" class="img-fluid object-fit-cover w-100" style="height:30vh; filter: blur(5px)" />
            <h1
                class="position-absolute text-center text-white"
                style="top: 50%; left: 50%; transform: translate(-50%, -50%);"
            >
                Don't know what to drink? Why not randomly draw one?
            </h1>
        </div>
        <div class="container overflow-hidden mt-3">
            <div class="row" v-if="recipeDetail">
                <div class="d-none d-lg-block col-lg-6 col-xxl-4 ">
                    <BannerCard :img="recipeDetail.strDrinkThumb" :text="recipeDetail.strAlcoholic"></BannerCard>
                </div>
                <div class="col-12 col-lg-6 col-xxl-8">
                    <div class="d-flex justify-content-between align-items-center border-bottom">
                        <div class="d-flex flex-column">
                            <h1 class="m-0">{{recipeDetail.strDrink}}</h1>
                            <p class="text-danger m-0">{{recipeDetail.strCategory}}<span v-if="recipeDetail.strIBA">;</span> {{recipeDetail.strIBA}}</p>
                        </div>

                        <div v-if="recipeDetail.strGlass" class="d-flex flex-column align-items-center">
                            <img :src="getGlassImage(recipeDetail.strGlass)" class="img-fluid" style="height: 50px">
                            <small>{{recipeDetail.strGlass}}</small>
                        </div>

                    </div>


                    <BannerCard :img="recipeDetail.strDrinkThumb" :text="recipeDetail.strAlcoholic" class="img-fluid object-fit-cover d-lg-none mt-4"></BannerCard>

                    <div class="row mt-5">
                        <div class="col-4" v-for="(ingredient, index) in filteredIngredients" :key="index">
                            <router-link :to="`/ingredient/${ingredient.name}`" style="text-decoration: none; color: black">
                                <div class="d-flex justify-content-center">
                                    <img
                                        :src="`https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(ingredient.name)}-small.png`"
                                        class="img-fluid"
                                    />
                                </div>
                                <p class="text-center">{{ ingredient.measure }} {{ ingredient.name }}</p>
                            </router-link>

                        </div>
                    </div>


                    <div class="px-3 mt-5">
                        <h3>Instructions</h3>
                        <p>{{recipeDetail.strInstructions}}</p>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-center mt-5">
                <button class="button" @click="draw" v-loading="isLoading">
                    DRAW
                </button>
            </div>
        </div>
    </div>

</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import {randomCocktails, recipe} from "@/api/cocktails.js";
import BannerCard from "@/components/BannerCard.vue";


const recipeDetail = ref(null);
const isLoading = ref(false);


async function draw() {
    isLoading.value = true;
    const response = await randomCocktails(); // 调用 API 获取配方详情
    recipeDetail.value = response.data.drinks[0]
    isLoading.value = false;
}

const getGlassImage = (glassName) => {
    const formattedName = glassName
        .replace(/\s+/g, '') // 去掉空格
        .replace(/\//g, '_') // 将斜杠 / 替换为下划线 _
        .toLowerCase();      // 转小写

    // 使用 import.meta.url 动态处理图片路径
    return new URL(`../assets/glass/${formattedName}.png`, import.meta.url).href;
};

const filteredIngredients = computed(() => {
    const ingredients = [];
    for (let n = 1; n <= 15; n++) {
        const ingredient = recipeDetail.value[`strIngredient${n}`];
        const measure = recipeDetail.value[`strMeasure${n}`];
        if (ingredient && ingredient !== null) {
            ingredients.push({
                name: ingredient,
                measure: measure || '', // 如果没有量，默认为空
            });
        }
    }
    console.log(ingredients)
    return ingredients;
});

</script>


<style scoped lang="css">
.button {
    position: relative;
    padding: 10px 22px;
    border-radius: 6px;
    border: none;
    color: #fff;
    cursor: pointer;
    background-color: #7d2ae8;
    transition: all 0.2s ease;
}

.button:active {
    transform: scale(0.96);
}

.button:before,
.button:after {
    position: absolute;
    content: "";
    width: 150%;
    left: 50%;
    height: 100%;
    transform: translateX(-50%);
    z-index: -1000;
    background-repeat: no-repeat;
}

.button:hover:before {
    top: -70%;
    background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 20%, #7d2ae8 20%, transparent 30%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
    10% 10%, 18% 18%;
    background-position: 50% 120%;
    animation: greentopBubbles 0.6s ease;
}

@keyframes greentopBubbles {
    0% {
        background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
        40% 90%, 55% 90%, 70% 90%;
    }

    50% {
        background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
        50% 50%, 65% 20%, 90% 30%;
    }

    100% {
        background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
        50% 40%, 65% 10%, 90% 20%;
        background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
}

.button:hover::after {
    bottom: -70%;
    background-image: radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%),
    radial-gradient(circle, #7d2ae8 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
    background-position: 50% 0%;
    animation: greenbottomBubbles 0.6s ease;
}

@keyframes greenbottomBubbles {
    0% {
        background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
        70% -10%, 70% 0%;
    }

    50% {
        background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
        105% 0%;
    }

    100% {
        background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
        110% 10%;
        background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
}
</style>