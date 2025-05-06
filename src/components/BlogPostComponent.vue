<template>
  <teleport to="head" v-if="blogPost.id">
    <component :is="'script'" type="application/ld+json">
      [{
        "@context":"http://schema.org",
        "@type":"Website",
        "name":"MartijnKlene.nl",
        "url":"https://martijnklene.nl"
      },
      {
        "@context":"https://schema.org",
        "@type":"BlogPosting",
        "headline":"{{ blogPost.title }}",
        "datePublished":"{{ blogPost.publishedAt }}",
        "keywords":"{{ blogPost.tags }}",
        "url":"https://martijnklene.nl/detail/{{ blogPost.id }}",
        "author":"{{ blogPost.author }}",
        "publisher": {
          "@type":"Organization",
          "url": "https://martijnklene.nl",
          "name":"Martijn Klene",
          "logo":"https://pbs.twimg.com/profile_images/998841428238262274/g71Qp9j2_400x400.jpg"
        },
        "image":"https://pbs.twimg.com/profile_images/998841428238262274/g71Qp9j2_400x400.jpg"
      }]
    </component>
  </teleport>
  <article class="blog-post-detail card" v-if="blogPost.id">
    <div class="card-body">
      <header class="blog-post-header mb-4">
        <h1 class="blog-post-title mb-3">{{ blogPost.title }}</h1>
        <div class="blog-post-meta">
          <span class="meta me-3">
            <i class="fa fa-calendar"></i> {{ formatDate(blogPost.publishedAt) }}
          </span>
          <span class="meta me-3">
            <i class="fa fa-user"></i> {{ blogPost.author }}
          </span>
        </div>
        <div class="tags mt-3" v-if="blogPost.tags">
          <span
            v-for="tag in getTags(blogPost.tags)"
            :key="tag"
            class="badge bg-secondary me-1"
          >
            {{ tag }}
          </span>
        </div>
      </header>
      <div class="blog-post-divider mb-4"></div>
      <div class="blog-post-content" v-html="blogPost.content"></div>

      <div class="blog-post-footer mt-5 pt-4" v-if="$route.params.id">
        <div class="d-flex justify-content-between">
          <router-link to="/archive" class="btn btn-outline-dark">
            <i class="fa fa-arrow-left me-2"></i>Back to Archive
          </router-link>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import moment from "moment";
import { useBlogPostStore } from "@/stores/blogPost";

export default defineComponent({
    name: "BlogPostComponent",
    data() {
        return {
            blogPostStore: useBlogPostStore()
        }
    },
    computed: {
        blogPost() {
            return this.$route.params.id ? this.blogPostStore.getCurrentBlogPost : this.blogPostStore.getLatestBlogPost;
        },
        formatDate() {
            return (value: any) => {
                return moment(value).format("MMMM D, YYYY")
            }
        }
    },
    mounted() {
        if (this.$route.params.id != undefined) {
            this.blogPostStore.fetchBlogPostById(this.$route.params.id.toString());
        } else {
            this.blogPostStore.fetchLastPublishedBlogPost();
        }
    },
    methods: {
        getTags(tags: string): string[] {
            return tags.split(',').map(tag => tag.trim()).filter(tag => tag);
        }
    }
})
</script>

<style scoped>
.blog-post-detail {
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.blog-post-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
}

.blog-post-meta {
    color: #6c757d;
    font-size: 0.95rem;
}

.blog-post-meta i {
    margin-right: 4px;
}

.blog-post-divider {
    height: 1px;
    background: linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.2), rgba(0,0,0,0.1));
}

.blog-post-content {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #333;
}

.blog-post-content p {
    margin-bottom: 1.5rem;
}

.blog-post-content h2,
.blog-post-content h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.blog-post-footer {
    border-top: 1px solid #e9ecef;
}

.social-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #f8f9fa;
    color: #6c757d;
    text-decoration: none;
    transition: all 0.2s;
}

.social-icon:hover {
    background-color: #0d6efd;
    color: white;
}
</style>
