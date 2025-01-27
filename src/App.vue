<template class="m-0 p-0">
    <div class="app-container bona-nova-sc-regular">
        <TopHeader class="m-0 p-0 "></TopHeader>
        <RouterView class="router-view "></RouterView>
        <BottomFooter class="m-0 p-0 "></BottomFooter>
    </div>
</template>


<script setup lang="ts">
import TopHeader from '@/components/TopHeader.vue'
import BottomFooter from '@/components/BottomFooter.vue'
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&family=Smooch+Sans:wght@100..900&display=swap');

.bona-nova-sc-regular {
    font-family: "Bona Nova SC", serif;
    font-weight: 400;
    font-style: normal;
}

* {
    box-sizing: border-box;
    font-size: large;
}

.app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* 整个视口高度，包含头部*/
}

/* RouterView 占据剩余空间 */
.router-view {
    flex: 1; /* 占据主内容区域的剩余空间 */
    overflow: auto; /* 如果内容过多，允许滚动 */
}




</style>

