import { defineStore } from 'pinia';
import BlogPostService from '@/service/BlogPostService';
import BlogPost from '@/types/BlogPost';
import ResponseData from '@/types/ResponseData';

export const useBlogPostStore = defineStore('blogPost', {
  state: () => ({
    blogPosts: [] as BlogPost[],
    currentBlogPost: {} as BlogPost,
    latestBlogPost: {} as BlogPost,
    recentBlogPosts: [] as BlogPost[],
    loading: false,
    error: null as string | null,
  }),

  getters: {
    getBlogPosts: (state) => state.blogPosts,
    getCurrentBlogPost: (state) => state.currentBlogPost,
    getLatestBlogPost: (state) => state.latestBlogPost,
    getRecentBlogPosts: (state) => state.recentBlogPosts,
    isLoading: (state) => state.loading,
    hasError: (state) => state.error !== null,
  },

  actions: {
    async fetchAllBlogPosts() {
      this.loading = true;
      this.error = null;

      try {
        const response: ResponseData = await BlogPostService.fetchAllBlogPosts();
        this.blogPosts = response.data;

        // Set recent blog posts (up to 5)
        this.recentBlogPosts = this.blogPosts.slice(0, 5);

        return response.data;
      } catch (error) {
        this.error = 'Failed to fetch blog posts';
        console.error('Error fetching blog posts:', error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async fetchLastPublishedBlogPost() {
      this.loading = true;
      this.error = null;

      try {
        const response: ResponseData = await BlogPostService.fetchLastPublishedBlogPost();
        this.latestBlogPost = response.data;
        return response.data;
      } catch (error) {
        this.error = 'Failed to fetch latest blog post';
        console.error('Error fetching latest blog post:', error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async fetchBlogPostById(id: string) {
      this.loading = true;
      this.error = null;

      try {
        const response: ResponseData = await BlogPostService.fetchSingleBlogPostByIdentifier(id);
        this.currentBlogPost = response.data;
        return response.data;
      } catch (error) {
        this.error = 'Failed to fetch blog post';
        console.error(`Error fetching blog post with ID ${id}:`, error);
        throw error;
      } finally {
        this.loading = false;
      }
    },
  }
});
