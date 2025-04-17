<template>
  <div class="row">
    <div class="col-md-8">
      <BlogPostComponent/>
    </div>
    <div class="col-md-4">
      <div class="card mb-4">
        <div class="card-header">
          <h3 class="card-title">About</h3>
        </div>
        <div class="card-body">
          <img src="https://pbs.twimg.com/profile_images/998841428238262274/g71Qp9j2_400x400.jpg"
               alt="Profile"
               class="img-fluid rounded-circle mb-3 mx-auto d-block"
               style="max-width: 150px;"
          >
          <p>Welcome to my personal blog where I share my thoughts and experiences.</p>
        </div>
      </div>

      <div class="card mb-4">
        <div class="card-header">
          <h3 class="card-title">Recent Posts</h3>
        </div>
        <div class="card-body">
          <div class="recent-posts" v-if="recentPosts.length > 0">
            <ul class="list-unstyled">
              <li v-for="post in recentPosts" :key="post.id" class="mb-2">
                <router-link :to="{ name: 'detail', params: { id: post.id } }">
                  {{ post.title }}
                </router-link>
              </li>
            </ul>
          </div>
          <div v-else>
            <p>Loading recent posts...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import BlogPostComponent from "@/components/BlogPostComponent.vue";
import BlogPost from "@/types/BlogPost";
import { useBlogPostStore } from "@/stores/blogPost";

@Options({
    components: {
        BlogPostComponent
    }
})
export default class DetailView extends Vue {
    private blogPostStore = useBlogPostStore();

    get recentPosts(): BlogPost[] {
        return this.blogPostStore.getRecentBlogPosts;
    }

    mounted() {
        // Fetch all blog posts which will also set recent posts in the store
        this.blogPostStore.fetchAllBlogPosts();
    }
}
</script>

<style scoped>
.card {
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}
.card-header {
    background-color: #f8f9fa;
    border-bottom: 1px solid #e9ecef;
}
</style>
