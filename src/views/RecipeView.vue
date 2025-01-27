<template>
    <div class="container d-flex align-items-center justify-content-center mt-3">
        <div class="row w-100">
            <div class="d-none d-lg-block col-lg-6 ">
                <BannerCard :img="recipeDetail.strDrinkThumb" :text="recipeDetail.strAlcoholic"></BannerCard>
            </div>
            <div class="col-12 col-lg-6 ">
                <div class="d-flex justify-content-between align-items-center border-bottom">
                    <div class="d-flex flex-column">
                        <h1 class="m-0">{{recipeDetail.strDrink}}</h1>
                        <p class="text-danger m-0">{{recipeDetail.strCategory}}; {{recipeDetail.strIBA}}</p>
                    </div>

                    <div v-if="recipeDetail.strGlass" class="d-flex flex-column align-items-center">
                        <img :src="getGlassImage(recipeDetail.strGlass)" class="img-fluid" style="height: 50px">
                        <small>{{recipeDetail.strGlass}}</small>
                    </div>

                </div>


                <img :src="recipeDetail.strDrinkThumb" class="img-fluid object-fit-cover d-lg-none mt-2">

                <div class="row mt-5">
                    <div class="col-4" v-for="(ingredient, index) in filteredIngredients" :key="index">
                        <div class="d-flex justify-content-center">
                            <img
                                :src="`https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(ingredient.name)}-small.png`"
                                class="img-fluid"
                            />
                        </div>
                        <p class="text-center">{{ ingredient.measure }} {{ ingredient.name }}</p>
                    </div>
                </div>


                <div class="px-3 mt-5">
                    <h3>Instructions</h3>
                    <p>{{recipeDetail.strInstructions}}</p>
                </div>



            </div>
        </div>
    </div>

</template>




<script setup>
import { useRoute } from "vue-router"; // 引入 useRoute
import { recipe } from "@/api/cocktails.js";
import {ref, onMounted, computed} from "vue";
import BannerCard from "@/components/BannerCard.vue";

const route = useRoute(); // 获取当前路由对象
const recipeDetail = ref({});

onMounted(async () => {
    const id = route.params.id; // 从路由参数中获取 id
    const response = await recipe(id); // 调用 API 获取配方详情
    recipeDetail.value = response.data.drinks[0]; // 保存数据到 recipeDetail
    console.log(recipeDetail.value);
});

// 方法处理 strGlass 去掉空格并转小写
const getGlassImage = (glassName) => {
    const formattedName = glassName.replace(/\s+/g, '').toLowerCase();
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

</style>