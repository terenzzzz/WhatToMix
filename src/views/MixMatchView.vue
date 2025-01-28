
<template>
    <div class="h-100">
        <div class="position-relative">
            <img src="../assets/bar_hero_3.png" class="img-fluid object-fit-cover w-100" style="height:30vh;">
            <h1 class="position-absolute text-center text-white" style="top: 50%; left: 50%; transform: translate(-50%, -50%);">
                Mix What You Have
            </h1>
        </div>


        <div class="container mt-3">
<!--            Preview Selected Ingredients-->
            <div class="card p-3"
                 v-if="selectedIngredients.length>0">
                <div class="row">
                    <div
                        class="row"
                        v-if="selectedIngredients.length>0"
                    >
                        <h1 class="border-bottom" style="height: fit-content">Ingredients</h1>
                        <div class="col-4" v-for="(ingredient, index) in selectedIngredients" :key="index">
                            <div class="d-flex justify-content-center">
                                <img
                                    :src="`https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(ingredient)}-small.png`"
                                    class="img-fluid"
                                />
                            </div>
                            <p class="text-center">{{ ingredient }}</p>

                        </div>
                    </div>

                </div>
            </div>
<!--            Select Box-->
            <div class="row mt-3 ">
                <strong>Ingredients</strong>
                <el-select
                    v-model="selectedIngredients"
                    multiple
                    placeholder="Select Ingredients you have"
                    size="large"
                    clearable
                    @change="applyFilter"
                >
                    <el-option
                        v-for="item in ingredients"
                        :key="item.strIngredient1"
                        :label="item.strIngredient1"
                        :value="item.strIngredient1"
                    />
                </el-select>
            </div>
<!--            result-->
            <div class="row w-100 mt-3 d-flex m-0" v-if="filteredResult.length>0">
                <div class="col-6 col-md-4 col-xl-3 mb-3" v-for="(cocktail, index) in filteredResult" :key="index">
                    <CocktailPreview :cock-tail="cocktail" style="height: 100%;" />
                </div>
            </div>
<!--            empty-->
            <div class="row w-100 mt-3 d-flex m-0" v-if="filteredResult.length<=0 && selectedIngredients.length>0">
                    <el-empty description="Can't find any drinks that match all your Ingredients, try select less Ingredients" />
            </div>
        </div>
    </div>

</template>

<script setup>
import {onMounted, ref} from "vue";
import {
    filterByMultipleIngredient,
    listIngredients
} from "@/api/cocktails.js";
import CocktailPreview from "@/components/CocktailPreview.vue";

const ingredients = ref([])
const selectedIngredients = ref([])



const filteredResult = ref([])

onMounted(async () => {

    const ingredientsResponse = await listIngredients(); // 调用 API 获取类型数据
    ingredients.value = ingredientsResponse.data.drinks;


});


async function applyFilter() {
    filteredResult.value = []

    const response = await filterByMultipleIngredient(selectedIngredients.value);

    if (Array.isArray(response.data.drinks)) {
        filteredResult.value = response.data.drinks.flat();
    }
}
</script>


<style scoped lang="css">
.card {
    background: rgb(236, 236, 236);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}


</style>