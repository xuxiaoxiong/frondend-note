<template>
  <div class="layout">
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import route from "@/router";

defineOptions({
  name: "Layout"
});
</script>

<style scoped>
.layout {
  display: flex;
  height: 100%;
}
.router-view {
  width: 80%;
  height: 100%;
  margin: var(--margin-global);
}
</style>
