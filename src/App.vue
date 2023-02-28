<template>
  <v-app>
    <v-app-bar>
      <v-tabs>
        <v-tab to="/"><h1>MartijnKlene.nl</h1></v-tab>
        <v-tab to="/archive">Archive</v-tab>
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
</script>
