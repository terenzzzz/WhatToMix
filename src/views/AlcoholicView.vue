<template>
    <div>
        <div class="position-relative">
            <img src="../assets/bar_hero_6.png" class="img-fluid object-fit-cover w-100" style="height:30vh; filter: blur(5px)" />
            <h1
                class="position-absolute text-center text-white"
                style="top: 50%; left: 50%; transform: translate(-50%, -50%);"
            >
                Choose Alcoholic you want
            </h1>
        </div>
        <div class="container mt-3">
            <!-- 按钮组 -->
            <div class="btn-group d-flex">
                <button
                    class="btn left"
                    :class="{ active: selectedAlcoholic === 'Alcoholic'}"
                    @click="selectAlcoholic('Alcoholic')"
                    type="button"
                >
                    Alcoholic
                </button>
                <button
                    class="btn middle"
                    :class="{ active: selectedAlcoholic === 'Non alcoholic' }"
                    @click="selectAlcoholic('Non alcoholic')"
                    type="button"
                >
                    Non alcoholic
                </button>
                <button
                    class="btn right"
                    :class="{ active: selectedAlcoholic === 'Optional alcohol' }"
                    @click="selectAlcoholic('Optional alcohol')"
                    type="button"
                >
                    Optional alcohol
                </button>
            </div>
            <el-divider />
            <!-- 展示鸡尾酒结果 -->
            <div class="row w-100 mt-3 d-flex m-0" v-if="result.length > 0">
                <div class="col-6 col-md-4 col-xl-3 mb-3" v-for="(cocktail, index) in result" :key="index">
                    <CocktailPreview :cock-tail="cocktail" style="height: 100%;" />
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import {onMounted, ref} from 'vue';
import CocktailPreview from '@/components/CocktailPreview.vue';
import {filterByAlcoholic, filterByGlass, listAlcoholic} from "@/api/cocktails.js";

const selectedAlcoholic = ref('Alcoholic'); // 默认选中 Alcoholic

const result = ref([]);

// 处理选择逻辑
const selectAlcoholic = (alcoholic) => {
    selectedAlcoholic.value = alcoholic;
    // 根据选中的类型更新 result 数据
    console.log('Selected type:', alcoholic); // 可在这里调用 API 或更新数据逻辑
    applyFilter(alcoholic)
};

onMounted(async () => {
    applyFilter(selectedAlcoholic.value)
});

async function applyFilter(alcoholic) {
    const response = await filterByAlcoholic(alcoholic);
    result.value = response.data.drinks;
    console.log(response.data);
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