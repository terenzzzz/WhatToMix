
<template>
    <div>
        <div class="position-relative">
            <img src="../assets/bar_hero_2.png" class="img-fluid object-fit-cover w-100" style="height:30vh; filter: blur(5px)">
            <h1 class="position-absolute text-center text-white" style="top: 50%; left: 50%; transform: translate(-50%, -50%);">
                Pick a Glass you wanna use
            </h1>
        </div>
        <div class="container mt-3">
            <div class="btn-group">
                <button class="btn left" type="button">Left</button>
                <button class="btn middle" type="button">Middle</button>
                <button class="btn right" type="button">Right</button>
            </div>
            <el-divider />
            <div class="row w-100 mt-3 d-flex m-0" v-if="result.length>0">
                <div class="col-6 col-md-4 col-xl-3 mb-3" v-for="(cocktail, index) in result" :key="index">
                    <CocktailPreview :cock-tail="cocktail" style="height: 100%;" />
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import {onMounted, ref} from "vue";
import {filterByGlass, listAlcoholic, listGlasses, listIngredients} from "@/api/cocktails.js";
import CocktailPreview from "@/components/CocktailPreview.vue";

const glasses = ref([])
const selectedGlass = ref('')

const result = ref([])

onMounted(async () => {
    const response = await listAlcoholic(); // 调用 API 获取类型数据
    glasses.value = response.data.drinks;
});

function selectGlass(glassName) {
    // 如果已选中相同的卡片，再次点击时取消选择
    selectedGlass.value = selectedGlass.value === glassName ? '' : glassName;
    applyFilter(glassName)
}

async function applyFilter(glassName) {
    console.log(glassName.replace(/\s+/g, '_').toLowerCase() )// 将斜杠 / 替换为下划线 _)
    const response = await filterByGlass(glassName.replace(/\s+/g, '_').toLowerCase() );
    result.value = response.data.drinks;
    console.log(response.data);
}


const getGlassImage = (glassName) => {

    const formattedName = glassName
        .replace(/\s+/g, '') // 去掉空格
        .replace(/\//g, '_') // 将斜杠 / 替换为下划线 _
        .toLowerCase();      // 转小写


    // 使用 import.meta.url 动态处理图片路径
    return new URL(`../assets/glass/${formattedName}.png`, import.meta.url).href;
};
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