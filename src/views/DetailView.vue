<template>
  <div class="row">
    <BlogComponent />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import BlogComponent from "@/components/BlogComponent.vue";

@Options({
  components: {
    BlogComponent
  }
})
export default class DetailView extends Vue {
}
</script>
