<script>
export default {
  data() {
    return {
      value: "",
    }
  },
  props: {
    text: {
      type: String,
    },
    item: {
      type: Object,
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
  <div class="search-item flex items-center h-28px">
    <div class="left h-22px line-height-22px font-400 text-#666">
      {{ text }}
    </div>
    <div class="right mr-12px">
      <el-input v-if="item.type === 'input'" size="mini" v-model="value"></el-input>
      <!-- unlink-panels 左边调整年份 右边不会跟着变 -->
      <el-date-picker v-else-if="item.type === 'date-picker'" type="daterange" v-model="value" size="mini" unlink-panels
        start-placeholder="开始日期" end-placeholder="结束日期" range-separator="->"></el-date-picker>
      <el-select v-else-if="item.type === 'select'" v-model="value" size="mini">
        <el-option v-for="option in item.options" :key="option.value" :label="option.label" :value="option.value"></el-option>
      </el-select>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>