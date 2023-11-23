<template>
  <div class="search-item flex h-100% items-center">
    <span class="text-14px text-#666 h-22px line-height-22px">{{ text }}</span>
    <!-- 插入输入框 el-date-picker el-select -->
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  }
}) 
</script>

<style scoped lang="scss"></style>