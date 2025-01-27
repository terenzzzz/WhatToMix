<template>
    <div class="input-wrapper">
        <input type="text" placeholder="Search for a drink ..." name="text" class="input">
    </div>
</template>




<style scoped>
.input-wrapper input {
    background-color: #eee;
    border: none;
    padding: 1rem;
    font-size: 1rem;
    width: 30em;
    border-radius: 1rem;
    color: black;
    box-shadow: 0 0.4rem #dfd9d9;
    cursor: pointer;
}

.input-wrapper input:focus {
    outline-color: black;
}
</style>
<script setup lang="ts">
</script>