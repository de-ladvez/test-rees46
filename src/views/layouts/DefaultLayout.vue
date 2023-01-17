<template>
    <div class="container">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "DefaultLayout"
    }
</script>

<style lang="less" scoped>
    .container {
        padding-top: 30px;
    }
</style>
