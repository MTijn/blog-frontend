<template>
  <BlogPostListComponent/>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import BlogPostListComponent from "@/components/BlogPostListComponent.vue";

@Options({
    components: {
        BlogPostListComponent
    }
})
export default class ArchiveView extends Vue {
}
</script>
