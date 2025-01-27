<template>
    <div>
        <div class="card h-100">
            <img :src="cockTail.strDrinkThumb">
            <div class="card-body">
                <h4 class="text-danger">{{cockTail.strCategory}} </h4>
                <h1>{{cockTail.strDrink}}</h1>

            </div>
            <div class="card-footer">
                <button class="rounded-3 btn btn-secondary my-1 btn-sm disabled">{{ cockTail.strAlcoholic }}</button>
                <button class="rounded-3 btn btn-secondary my-1 btn-sm disabled mx-2" v-if="cockTail.strIBA">{{ cockTail.strIBA }}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
// 定义 props
const props = defineProps({
    cockTail: {
        type: Object,
        required: true,
    },

});


console.log(props.cockTail);

</script>

<style scoped lang="css">
.card {
    background: rgb(236, 236, 236);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
</style>