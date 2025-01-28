<template>
    <RouterLink :to="`/ingredient/${ingredient.strIngredient}`"  class="text-decoration-none ">
        <div class="card h-100">
            <img :src="`https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(ingredient.strIngredient)}-medium.png`">
            <div class="card-body">
                <h5 class="text-danger">{{ingredient.strType}} </h5>
                <h3>{{ingredient.strIngredient}}</h3>

            </div>
            <div class="card-footer" v-if="ingredient.strABV || ingredient.strAlcohol">
                <button class="rounded-3 btn btn-secondary my-1 btn-sm disabled" v-if="ingredient.strABV">
                    {{ ingredient.strABV }}%
                </button>
                <button class="rounded-3 btn btn-secondary my-1 btn-sm disabled mx-2" v-if="ingredient.strAlcohol">
                    {{ ingredient.strAlcohol=='Yes'? 'Alcoholic' : 'Non-Alcoholic' }}
                </button>
            </div>
        </div>
    </RouterLink>
</template>

<script setup>
// 定义 props
const props = defineProps({
    ingredient: {
        type: Object,
        required: true,
    },

});

</script>

<style scoped lang="css">
.card {
    background: rgb(236, 236, 236);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
</style>