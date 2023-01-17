import {createStore} from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        base: {
            allPosts: [],
            allComments: [],
        },
        listPosts: {
            textSearch: ""
        },
        post: {
            postId: -1
        }
    },
    getters: {
        getPosts(state) {
            let reg = new RegExp(state.listPosts.textSearch, "i");
            let resultFilter = state.base.allPosts.filter(item => item.title.search(reg) > -1 || item.body.search(reg) > -1);

            return resultFilter.map(post => {
                let countComments = state.base.allComments.filter(comment => comment.postId === post.id).length;
                return {...post, countComments};
            })
        },
        getPost(state) {
            if (state.post.postId === -1) return;
            let post = state.base.allPosts.find(item => parseInt(item.id) === state.post.postId);
            let comments = state.base.allComments.filter(comment => parseInt(comment.postId) === state.post.postId);

            return {
                ...post,
                comments
            }
        }
    },
    mutations: {
        GET_POSTS(state, data) {
            state.base.allPosts = [...data];
        },
        GET_COMMENTS(state, data) {
            state.base.allComments = [...data];
        },
        SET_SEARCH_FIELD(state, data) {
            state.listPosts.textSearch = data;
        },
        SET_CURRENT_POST_ID(state, data) {
            state.post.postId = parseInt(data);
        }
    },
    actions: {
        getPosts({commit}) {
            return new Promise((resolve, reject) => {
                axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then((data) => {
                        commit('GET_POSTS', data.data);
                        resolve();
                    })
                    .catch((err) => {
                        reject(err)
                    });
            });
        },
        getComments({commit}) {
            return new Promise((resolve, reject) => {
                axios.get('https://jsonplaceholder.typicode.com/comments')
                    .then((data) => {
                        commit('GET_COMMENTS', data.data);
                        resolve();
                    })
                    .catch((err) => {
                        reject(err);
                    })
            });
        },
        setSearchField({commit}, data) {
            commit('SET_SEARCH_FIELD', data);
        },
        setCurrentPostId({commit}, data) {
            commit('SET_CURRENT_POST_ID', data);
        }
    },
    modules: {},
});
