<script>
export default {
}
</script>
<template>
  <el-button class="ktna-btn" size="small">
    <!-- <i class="iconfont kt-add" /> -->
    <slot></slot>
  </el-button>
</template>
<style scoped lang="scss">
.ktna-btn {
  height: 28px;
  font-weight: 400;
  color: #5283F7;
  background: rgba(82, 131, 247, 0.1);
  border-radius: 4px;
}
</style>
