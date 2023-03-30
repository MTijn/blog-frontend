<template>
    <div class="row">
        <div class="list-group list-group-flush">
            <article class="list-group-item" v-bind:key="blogPost.id" v-for="blogPost in blogPosts">
                <header>
                    <h1>
                        <router-link
                            :to="{ name: 'detail', params: { id: blogPost.id } }"
                        >
                            {{ blogPost.title }}
                        </router-link>
                    </h1>
                    <span>Published at: {{ formatDate(blogPost.publishedAt) }}</span>
                </header>
            </article>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import BlogPostService from "@/service/BlogPostService";
import ResponseData from "@/types/ResponseData";
import moment from "moment";
import DetailView from "@/views/DetailView.vue";

export default defineComponent({
    name: "BlogPostListComponent",
    data() {
        return {
            blogPosts: []
        }
    },
    mounted() {
        BlogPostService.fetchAllBlogPosts()
            .then((response: ResponseData) => {
                this.blogPosts = response.data;
            })
    },
    computed: {
        DetailView() {
            return DetailView
        },
        formatDate() {
            return (value: any) => {
                return moment(value).toDate().toLocaleString()
            }
        }
    }
});
</script>

<style scoped>

</style>
