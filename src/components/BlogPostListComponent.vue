<template>
  <div class="blog-post-list">
    <article
      v-bind:key="blogPost.id"
      v-for="blogPost in blogPosts"
      class="card mb-4 blog-post-card"
    >
      <div class="card-body">
        <header>
          <h2 class="card-title">
            <router-link
              :to="{ name: 'detail', params: { id: blogPost.id } }"
              class="blog-post-link"
            >
              {{ blogPost.title }}
            </router-link>
          </h2>
          <div class="meta-info mb-3">
            <span class="meta me-3">
              <i class="fa fa-calendar"></i> {{ formatDate(blogPost.publishedAt) }}
            </span>
            <span class="meta me-3">
              <i class="fa fa-user"></i> {{ blogPost.author }}
            </span>
          </div>
        </header>
        <div class="card-text mb-3" v-if="blogPost.content">
          <p>{{ getExcerpt(blogPost.content) }}</p>
        </div>
        <div class="tags" v-if="blogPost.tags">
          <span
            v-for="tag in getTags(blogPost.tags)"
            :key="tag"
            class="badge bg-secondary me-1"
          >
            {{ tag }}
          </span>
        </div>
        <div class="mt-3">
          <router-link
            :to="{ name: 'detail', params: { id: blogPost.id } }"
            class="btn btn-outline-primary btn-sm"
          >
            Read More
          </router-link>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import moment from "moment";
import DetailView from "@/views/DetailView.vue";
import { useBlogPostStore } from "@/stores/blogPost";

export default defineComponent({
    name: "BlogPostListComponent",
    data() {
        return {
            blogPostStore: useBlogPostStore()
        }
    },
    computed: {
        blogPosts() {
            return this.blogPostStore.getBlogPosts;
        },
        DetailView() {
            return DetailView
        },
        formatDate() {
            return (value: any) => {
                return moment(value).format("MMM D, YYYY")
            }
        }
    },
    mounted() {
        // Fetch blog posts excluding the latest one using the store
        this.blogPostStore.fetchAllBlogPosts();
    },
    methods: {
        getExcerpt(content: string): string {
            // Remove HTML tags and get plain text
            const plainText = content.replace(/<[^>]*>/g, '');
            // Return first 150 characters as excerpt
            return plainText.length > 150
                ? plainText.substring(0, 150) + '...'
                : plainText;
        },
        getTags(tags: string): string[] {
            return tags.split(',').map(tag => tag.trim()).filter(tag => tag);
        }
    }
});
</script>

<style scoped>
.blog-post-card {
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
}

.blog-post-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.blog-post-link {
    color: #333;
    text-decoration: none;
}

.blog-post-link:hover {
    color: #0d6efd;
}

.meta {
    color: #6c757d;
    font-size: 0.9rem;
}

.meta i {
    margin-right: 4px;
}

.tags {
    margin-top: 10px;
}
</style>
