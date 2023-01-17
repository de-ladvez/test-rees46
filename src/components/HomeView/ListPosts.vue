<template>
    <h4>Count posts: {{allPosts.length}}</h4>
    <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0" style="padding-bottom: 20px" v-for="item in allPosts" :key="item.id">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{{item.title}}</h5>
                    <p class="card-text overflow-dots ">{{item.body}}</p>
                    <div class="flex-row">
                        <div class="flex-item">
                            <router-link class="btn btn-primary" :to="`post/${item.id}`">Open</router-link>
                        </div>
                        <div class="flex-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 class="bi bi-megaphone" viewBox="0 0 16 16">
                                <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z"/>
                            </svg>
                            <span class="count-comments">{{item.countComments}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {useStore} from "vuex";
    import {computed} from "vue";

    const store = useStore();

    const allPosts = computed(() => store.getters.getPosts);
</script>

<style lang="less" scoped>
    .flex-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .count-comments {
        margin-left: 10px;
        font-size: calc(var(--bs-body-font-size) - 2px);
    }

    .overflow-dots {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>