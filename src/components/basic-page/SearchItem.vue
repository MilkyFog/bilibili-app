<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<template>
  <!-- slot
    1. input <el-input v-model.trim="searchForm.name" placeholder="请输入" size="mini" clearable
          class="search-item-input" @keypress.enter.native="getList(1)" @clear="getList(1)" />
    2. select <el-select v-model="searchForm.code" filterable clearable placeholder="请选择" size="mini" class="search-item-input"
      @change="getList(1)">
      <el-option v-for="state in statusList" :key="state.code" :label="state.name" :value="state.code" />
    </el-select>
    3. date-picker <el-date-picker v-model="searchDate" class="search-item-date" size="mini" type="daterange" align="right" unlink-panels
      range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd"
      @change="getList(1)" />
  -->
  <div class="search-item">
    <span>文本框：</span>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.search-item {
  float: left;
  margin-right: 12px;
  margin-bottom: 8px;
  color: #333333;

  .search-item-input {
    width: 140px;
  }

  .search-item-date {
    width: 240px;

    .el-input__inner {
      padding: 0 28px;
    }
  }

  .search-item-date-2 {
    width: 160px;

    .el-input__inner {
      padding: 0 28px;
    }
  }

  .el-input__inner {
    font-size: 14px;
    padding: 0 8px;
  }
}
</style>