<template>
    <div class="input-group mb-3">
        <input
                v-model="textSearch"
                type="text"
                class="form-control"
                placeholder="Search"
                aria-label="Search"/>
    </div>
</template>

<script setup>
    // @ is an alias to /src
    import {useStore} from "vuex";
    import {ref, watch} from "vue";

    const store = useStore();
    const textSearch = ref('');

    watch(textSearch, (newVal, oldVal)=> {
        if(newVal !== oldVal) store.dispatch("setSearchField", textSearch);
    })
</script>
