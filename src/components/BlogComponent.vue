<template>
  <article class="col-12" v-if="blogPost.id">
    <header>
      <h1 class="title">{{ blogPost.title }}</h1>
    </header>
    <div class="row">
      <div class="col-8" v-html="blogPost.content" />
      <div class="col-1"></div>
      <aside class="col-3">
        <p>Published at: {{ formatDate(blogPost.publishedAt) }} </p>
        <p>By: {{ blogPost.author }}</p>
      </aside>
    </div>
  </article>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import BlogPost from "@/types/BlogPost";
import BlogPostService from "@/service/BlogPostService";
import ResponseData from "@/types/ResponseData";
import moment from "moment";

export default defineComponent({
  name: "BlogComponent",
  data() {
    return {
      blogPost: {} as BlogPost
    }
  },
  mounted() {
    if (this.$route.params.id != undefined) {
      BlogPostService.fetchSingleBlogPostByIdentifier(this.$route.params.id.toString())
          .then((response: ResponseData) => {
            this.blogPost = response.data;
          })
    } else {
      BlogPostService.fetchLastPublishedBlogPost()
          .then((response: ResponseData) => {
            this.blogPost = response.data;
          })
    }
  },
  computed: {
    formatDate() {
      return (value: any) => {
        return moment(value).format("DD-MM-YYYY hh:mm:ss A")
      }
    }
  },
})
</script>
