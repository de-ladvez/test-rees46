<template>
    <div class="flex-row">
        <h1>{{title}}</h1>
        <router-link to="/posts" class="btn btn-primary">Go to posts</router-link>
    </div>
    <div class="content">
        {{body}}
    </div>
</template>

<script setup>
    import {defineProps} from "vue";

    defineProps(['title', 'body']);

</script>


<style scoped lang="less">
    .flex-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>