<template>
    <div>
        <div class="position-relative">
            <img src="../assets/bar_hero.png" class="img-fluid object-fit-cover w-100" style="height:30vh; filter: blur(2px)">
            <h1 class="position-absolute text-center text-white" style="top: 50%; left: 50%; transform: translate(-50%, -50%);">
                Search What you Like
            </h1>
        </div>
        <div class="container">
            <div class="d-flex justify-content-center align-items-center mt-5">
                <div class="input-wrapper w-75">
                    <input
                        type="text"
                        placeholder="Search for a drink ..."
                        name="text"
                        class="input w-100" v-model="inputStr"
                        @keydown.enter="searchHandler"
                    >
                </div>
                <button class="ms-3">
                    <span class="button_top" @click="searchHandler"> Search </span>
                </button>
            </div>

            <div class="mt-5 d-flex justify-content-center">
                <span :class="isIngredient? '' : 'text-danger fw-bold'">Cocktail</span>
                <div class="mx-3">
                <RockerSwitch v-model:checked="isIngredient"></RockerSwitch>
                </div>
                <span :class="isIngredient? 'text-danger fw-bold' : ''">Ingredient</span>
            </div>



            <div class="row w-100 mt-3 d-flex m-0" v-if="searchCocktailResult">
                <template v-if="searchCocktailResult.length>0">
                    <div class="col-6 col-md-4 col-xl-3 col-xxl-2 mb-3" v-for="(cocktail, index) in searchCocktailResult" :key="index">
                        <CocktailPreview :cock-tail="cocktail" style="height: 100%;" />
                    </div>
                </template>
                <template v-else>
                    <el-empty description="Can't find any drinks that match all your keywords, try input other words" />
                </template>
            </div>


            <div class="row w-100 mt-3 d-flex m-0" v-if="searchIngredientResult">
                <template v-if="searchIngredientResult.length>0">
                    <div class="col-6 col-md-4 col-xl-3 mb-3" v-for="(ingredient, index) in searchIngredientResult" :key="index">
                        <IngredientPreview :ingredient="ingredient" style="height: 100%;" />
                    </div>
                </template>
                <template v-else>
                    <el-empty description="Can't find any ingredient that match all your keywords, try input other words" />
                </template>
            </div>

            <div class="row w-100 mt-3 d-flex m-0" v-if="!searchCocktailResult && !searchIngredientResult">
                <el-empty description="Can't find any drinks that match all your Ingredients, try select less Ingredients" />
            </div>

        </div>
    </div>



</template>


<script setup>
import InputBox from "@/components/InputBox.vue";
import {ref, watch} from "vue";
import {search, searchIngredientByName} from "@/api/cocktails.js";
import CocktailPreview from "@/components/CocktailPreview.vue";
import RockerSwitch from "@/components/RockerSwitch.vue";
import IngredientPreview from "@/components/IngredientPreview.vue";

let inputStr = ref("")
let searchCocktailResult = ref(null)
let searchIngredientResult = ref(null)
const isIngredient = ref(false); // 用于接收子组件的状态

// 监听 isIngredient 的变化
watch(isIngredient, (newVal, oldVal) => {
    searchHandler()
});

async function searchHandler() {
    searchCocktailResult.value = null
    searchIngredientResult.value = null


    if (inputStr.value){
        if (isIngredient.value){
            const response = await searchIngredientByName(inputStr.value); // 调用 API 获取食材详情
            if (response.data.ingredients){
                searchIngredientResult.value = response.data.ingredients;
            }
        }else{
            const response = await search(inputStr.value)
            if (response.data.drinks){
                searchCocktailResult.value = response.data.drinks
            }

        }
    }

}


</script>

<style scoped lang="css">
.input-wrapper input {
    background-color: #eee;
    border: none;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 1rem;
    color: black;
    box-shadow: 0 0.4rem #dfd9d9;
    cursor: pointer;
}

.input-wrapper input:focus {
    outline-color: black;
}

button {
    /* Variables */
    --button_radius: 0.75em;
    --button_color: #e8e8e8;
    --button_outline_color: #000000;
    font-size: 17px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    border-radius: var(--button_radius);
    background: lightgray;
}

.button_top {
    display: block;
    box-sizing: border-box;
    //border: 2px solid var(--button_outline_color);
    border-radius: var(--button_radius);
    padding: 0.75em 1.5em;
    background: var(--button_color);
    transform: translateY(-0.2em);
    transition: transform 0.1s ease;
}

button:hover .button_top {
    /* Pull the button upwards when hovered */
    transform: translateY(-0.33em);
}

button:active .button_top {
    /* Push the button downwards when pressed */
    transform: translateY(0);
}
</style>