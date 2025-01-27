<template>
    <div>
        <img src="../assets/bar_hero.png" class="img-fluid object-fit-cover w-100" style="height:30vh">
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
            <div class="row w-100 mt-3 d-flex m-0">
                <div class="col-6 col-md-4 col-xl-3 mb-3" v-for="(cocktail, index) in searchResult" :key="index">
                    <CocktailPreview :cock-tail="cocktail" style="height: 100%;" />
                </div>
            </div>
        </div>
    </div>



</template>


<script setup>
import InputBox from "@/components/InputBox.vue";
import {ref} from "vue";
import {search} from "@/api/cocktails.js";
import CocktailPreview from "@/components/CocktailPreview.vue";

let inputStr = ref("")
let searchResult = ref([])

async function searchHandler() {
    const response = await search(inputStr.value)
    searchResult.value = response.data.drinks
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