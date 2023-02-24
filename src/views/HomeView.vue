<template>
  <v-row>
    <v-col cols="12" lg="10">
      <v-sheet>
        <h1>Test</h1>
        <p>Dit is een test</p>
      </v-sheet>
    </v-col>
    <v-col cols="12" sm="2">
      <v-sheet rounded="lg" theme="dark">
        <p>Door Martijn</p>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
