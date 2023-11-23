<script>
export default {
  methods: {
    resetSearch() {
      console.log('SearchButton: resetSearch')
    },
    getList() {
      console.log('searchButton: getList')
    }
  }
}
</script>
<template>
  <div class="search-btn">
    <el-button class="ktna-btn ktna-btn-primary ktna-btn-search" size="small" @click="getList(1)">
      查询
    </el-button>
    <el-button class="ktna-btn ktna-btn-info ktna-btn-search" size="small" @click="resetSearch">
      重置
    </el-button>
  </div>
</template>

<style scoped lang="scss">
.search-btn {
  flex: 1;
  margin-right: 12px;
  margin-bottom: 8px;
  display: flex;
  justify-content: flex-end;

  .ktna-btn,
  .ktna-btn:focus:not(.ktna-btn:hover) {
    height: 28px;
    line-height: 26px;
    box-sizing: border-box;
    font-size: 14px !important;
    border-color: transparent !important;
    box-shadow: unset !important;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 #f4f4f4;

    i {
      position: relative;
      top: 1px;
    }
  }

  .ktna-btn-search {
    padding: 0 15px !important;
  }

  // 白底按钮的线条
  .ktna-btn-info,
  .ktna-btn-info:focus:not(.ktna-btn-info:hover) {
    border: 1px solid #d9d9d9 !important;
    color: #666 !important;
    background: #fff !important;
  }

  // 主要按钮
  .ktna-btn-primary,
  .ktna-btn-primary:focus:not(.ktna-btn-primary:hover) {
    color: #fff !important;
    background: #5283f7 !important;
  }
}
</style>