<template>
    <div class="row">
        <BlogPostComponent/>
    </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import BlogPostComponent from "@/components/BlogPostComponent.vue";

@Options({
    components: {
        BlogPostComponent
    }
})
export default class HomeView extends Vue {
}
</script>
