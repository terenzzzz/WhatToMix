<template>
    <div>
        <router-link :to="toURL">
            <div class="h-100 position-relative img-container">
                <img :src="imageSrc" class="img-fluid h-100 w-100 object-fit-cover img-brightness" />
                <div class="overlay-text">
                    <h1>{{ overlayText }}</h1>
                    <p>view Receipt</p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script setup>
import { computed } from 'vue';

// 定义 props
const props = defineProps({
    toURL: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true, // 图片文件名
    },
    overlayText: {
        type: String,
        required: true, // 显示文字
    },
    isShadow: {
        type: Boolean,
        default: false,
    },
});

// 动态加载图片路径
const imageSrc = computed(() => new URL(props.img, import.meta.url).href);
</script>

<style scoped>
.position-relative {
    position: relative;
}

/* 默认图片亮度和移入动画效果 */
.img-brightness {
    filter: brightness(50%);
    transition: filter 0.2s ease-in-out;
}

/* 鼠标移入时图片亮度变化 */
.img-container:hover .img-brightness {
    filter: brightness(100%);
}

.overlay-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 增强文字可读性 */
    text-align: center; /* 居中对齐文字 */
}
</style>
