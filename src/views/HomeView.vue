<template>
  <div>
    <!-- Latest Blog Post Section -->
    <div class="row mb-4">
      <div class="col-12">
        <BlogPostComponent />
      </div>
    </div>

    <hr class="section-divider my-5">
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import BlogPostListComponent from "@/components/BlogPostListComponent.vue";
import BlogPostComponent from "@/components/BlogPostComponent.vue";

@Options({
    components: {
        BlogPostListComponent,
        BlogPostComponent
    }
})
export default class HomeView extends Vue {
}
</script>

<style scoped>
.card {
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.card-header {
    background-color: #f8f9fa;
    border-bottom: 1px solid #e9ecef;
}
.section-divider {
    height: 1px;
    background: linear-gradient(to right, rgba(0,0,0,0.03), rgba(0,0,0,0.15), rgba(0,0,0,0.03));
    border: none;
}
</style>
