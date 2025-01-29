
<template>
    <div>
        <div class="position-relative">
            <img src="../assets/bar_hero_2.png" class="img-fluid object-fit-cover w-100" style="height:30vh; filter: blur(5px)">
            <h1 class="position-absolute text-center text-white" style="top: 50%; left: 50%; transform: translate(-50%, -50%);">
                Pick a Glass you wanna use
            </h1>
        </div>
        <div class="container mt-3">
            <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-2">
                <div
                    class="col"
                    v-for="(glass, index) in glasses"
                    :key="index"
                >
                    <div
                        class="card h-100 p-1 text-center"
                        @click="selectGlass(glass.strGlass)"
                        :class="selectedGlass === glass.strGlass ? 'selected' : ''"
                    >
                        <div class="d-flex flex-column justify-content-center h-100">
                            <img :src="getGlassImage(glass.strGlass)" class="img-fluid mx-auto" style="height: 50px">
                            <small>{{ glass.strGlass }}</small>
                        </div>
                    </div>
                </div>
            </div>
            <el-divider />
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
import {filterByGlass, listGlasses, listIngredients} from "@/api/cocktails.js";
import CocktailPreview from "@/components/CocktailPreview.vue";

const glasses = ref([])
const selectedGlass = ref('')

const result = ref([])

onMounted(async () => {
    const response = await listGlasses(); // 调用 API 获取类型数据
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
.card {
    border: 2px solid transparent;
    transition: border-color 0.2s ease, border-width 0.2s ease;
    cursor: pointer;
}

.card:hover {
    border-color: #aaa; /* 鼠标悬停时的边框颜色 */
}

.card.selected {
    border-color: #007bff; /* 选中时的边框颜色 */
    border-width: 3px; /* 选中时的边框粗细 */
}
</style>