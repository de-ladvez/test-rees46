<template>
    <div class="container my-5 py-5">
        <div class="col-md-12 ">
            <div class="card text-dark">
                <div class="card-body p-4">
                    <h4 class="mb-0">Recent comments</h4>
                    <p class="fw-light mb-4 pb-2">Latest Comments section by users</p>

                    <div
                            v-for="comment in comments"
                            :key="comment.id"
                            class="card-body p-4"
                            style=""
                    >
                        <div class="d-flex flex-start">
                            <div>
                                <h6 class="fw-bold mb-1">{{comment.name}}</h6>
                                <div class="d-flex align-items-center mb-3">
                                    <p class="mb-0">
                                        {{comment.email}}
                                    </p>
                                </div>
                                <p class="mb-0">
                                    {{comment.body}}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {defineProps} from "vue";

    defineProps(['comments']);
</script>


<style scoped lang="less">
    .card-body {
        border-bottom: 1px solid rgba(0, 0, 0, 0.18);
        &:last-child {
            border-bottom: 0;
        }
    }
</style>