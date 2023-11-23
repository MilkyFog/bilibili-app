<script>
export default {
  data() {
    return {
      drawerTitle: '活动归档',
    }
  },
  methods: {
    closeDrawer() {
      console.log('DrawerTop: closeDrawer')
    }
  }
}
</script>
<template>
  <div class="flex-between drawer-top">
    <div class="head-title">{{ drawerTitle }}</div>
    <i class="close-icon el-icon-close" @click="closeDrawer"></i>
  </div>
</template>
<style scoped lang='scss'>
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.drawer-top {
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  background-color: #f7f7f7;

  .head-title {
    font-size: 16px;
    color: #333;
  }

  .close-icon {
    cursor: pointer;
  }
}</style>