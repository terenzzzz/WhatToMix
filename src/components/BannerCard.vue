<template>
    <div class="card_box">
        <img :src="imageSrc" class="img-fluid object-fit-cover">
        <span :style="{ '--text-content': `'${text}'` }"></span>
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    img: { type: String, required: true },
    text: { type: String, required: true },
})

// 动态加载图片路径
const imageSrc = computed(() => new URL(props.img, import.meta.url).href);
</script>

<style scoped>
.card_box {
    border-radius: 20px;
    position: relative;
}

.card_box span {
    position: absolute;
    overflow: hidden;
    width: 150px;
    height: 150px;
    top: -10px;
    left: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 动态设置文本 */
.card_box span::before {
    content: var(--text-content, 'Premium'); /* 默认内容为 'Premium' */
    position: absolute;
    width: 150%;
    height: 40px;
    background-image: linear-gradient(45deg, #ff6547 0%, #ffb144 51%, #ff7053 100%);
    transform: rotate(-45deg) translateY(-20px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.23);
}

.card_box span::after {
    content: '';
    position: absolute;
    width: 10px;
    bottom: 0;
    left: 0;
    height: 10px;
    z-index: -1;
    box-shadow: 140px -140px #cc3f47;
    background-image: linear-gradient(45deg, #FF512F 0%, #F09819 51%, #FF512F 100%);
}
</style>
