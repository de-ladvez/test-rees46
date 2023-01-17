<template>
    <div class="post">
        <content-post
            :title="post.title"
            :body="post.body"
        />
        <comments-post
            :comments="post.comments"
        />
    </div>
</template>

<script setup>
    import {useStore} from "vuex";
    import {useRoute} from "vue-router";
    import {computed, onUnmounted} from "vue";
    import ContentPost from "../components/CurrentPost/ContentPost";
    import CommentsPost from "../components/CurrentPost/CommentsPost";

    const store = useStore();
    const route = useRoute();

    const post = computed(() => store.getters.getPost);

    store.commit("SET_CURRENT_POST_ID", route.params.id);

    onUnmounted(() => {
        store.commit("SET_CURRENT_POST_ID", -1);
    });
</script>

