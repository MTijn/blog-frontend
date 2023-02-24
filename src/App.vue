<template>
  <v-app>
    <v-app-bar
        title="MartijnKlene.nl"
        class="px-3"
        color="white"
        flat
        density="compact"
    >
      <v-tabs color="grey-darken-2">
        <v-tab to="/">Home</v-tab>
        <v-tab to="/about">About</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import * as path from "path";
</script>
