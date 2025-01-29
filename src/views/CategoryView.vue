
<template>
    <div>
        <div class="position-relative">
            <img src="../assets/bar_hero_4.png" class="img-fluid object-fit-cover w-100" style="height:30vh; filter: blur(5px)">
            <h1 class="position-absolute text-center text-white" style="top: 50%; left: 50%; transform: translate(-50%, -50%);">
                Discover Categories
            </h1>
        </div>
        <div class="container mt-3">
            <div class="row mt-3 ">
                <strong>Categories</strong>
                <el-select
                    v-model="selectedCategory"
                    placeholder="Select Category you want to discover"
                    size="large"
                    clearable
                    @change="applyFilter"
                >
                    <el-option
                        v-for="item in categories"
                        :key="item.strCategory"
                        :label="item.strCategory"
                        :value="item.strCategory"
                    />
                </el-select>
            </div>
            <el-divider v-if="result.length>0"/>
            <div class="row w-100 mt-3 d-flex m-0" v-if="result.length>0">
                <div class="col-6 col-md-4 col-xl-3 col-xxl-2 mb-3" v-for="(cocktail, index) in result" :key="index">
                    <CocktailPreview :cock-tail="cocktail" style="height: 100%;" />
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import {onMounted, ref} from "vue";
import {filterByCategory, listCategories} from "@/api/cocktails.js";
import CocktailPreview from "@/components/CocktailPreview.vue";

const categories = ref([])
const selectedCategory = ref('')

const result = ref([])

onMounted(async () => {
    const response = await listCategories(); // 调用 API 获取类型数据
    categories.value = response.data.drinks;
});

async function applyFilter(category) {
    const response = await filterByCategory(category);
    result.value = response.data.drinks;
}


</script>


<style scoped lang="css">
.btn {
    font: inherit;
    background-color: #f0f0f0;
    border: 0;
    color: #242424;
    font-size: 1.15rem;
    padding: 0.375em 1em;
    text-shadow: 0 0.0625em 0 #fff;
    box-shadow: inset 0 0.0625em 0 0 #f4f4f4, 0 0.0625em 0 0 #efefef,
    0 0.125em 0 0 #ececec, 0 0.25em 0 0 #e0e0e0, 0 0.3125em 0 0 #dedede,
    0 0.375em 0 0 #dcdcdc, 0 0.425em 0 0 #cacaca, 0 0.425em 0.5em 0 #cecece;
    transition: 0.23s ease;
    cursor: pointer;
    font-weight: bold;
    margin: -1px;
}
.middle {
    border-radius: 0px;
}
.right {
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
}
.left {
    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
}
.btn:active {
    translate: 0 0.225em;
    box-shadow: inset 0 0.03em 0 0 #f4f4f4, 0 0.03em 0 0 #efefef,
    0 0.0625em 0 0 #ececec, 0 0.125em 0 0 #e0e0e0, 0 0.125em 0 0 #dedede,
    0 0.2em 0 0 #dcdcdc, 0 0.225em 0 0 #cacaca, 0 0.225em 0.375em 0 #cecece;
    letter-spacing: 0.1em;
    color: skyblue;
}
.btn:focus {
    color: skyblue;
}


</style>