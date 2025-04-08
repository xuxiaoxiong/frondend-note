<template>
  <div class="home">
    12312312
  </div>
</template>

<script setup>
import { tryOnMounted } from "@vueuse/core";

defineOptions({
  name: "Home"
});

// 这里获取全局对象

tryOnMounted(() => {
  // 清除缓存
  // sessionStorageClear();

  // 添加动态路由
  // addDynamicRoutes();

  // 设置语言
});
</script>
