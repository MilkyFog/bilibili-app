<script>
export default {
  data() {
    return {
      tableHeight: 500,
      tableLoading: false,
    }
  },
  methods: {
    handleRowClick() {
      console.log('MainTable: handleRowClick')
    },
    handleEdit() {
      console.log('MainTable: handleEdit')
    },
    getNameByCode() {
      console.log('MainTable: getNameByCode')
    }
  },
  props: {
    tableData: {
      type: Array,
      default: () => {
        return [
          {
            date: '2022-05-20',
            concludeWorker: '张丽娟',
            name: '小组活动一',
            type: '小组活动',
            time: '2022-05-04 14:00 ~ 2022-05-04 17:00',
            place: '鄞州人民医院一楼'
          },
          {
            date: '2022-05-20',
            concludeWorker: '张丽娟',
            name: '小组活动一',
            type: '小组活动',
            time: '2022-05-04 14:00 ~ 2022-05-04 17:00',
            place: '鄞州人民医院一楼'
          }
        ]
      }
    },
    columnConfig: {
      type: Array,
      default: () => {
        return [
          {
            key: 0,
            label: '活动日期',
            prop: 'date',
            width: '200'
          },
          {
            key: 1,
            label: '归档社工',
            prop: 'concludeWorker',
            width: '100'
          },
          {
            key: 2,
            label: '活动名称',
            prop: 'name',
          },
          {
            key: 3,
            label: '活动类型',
            prop: 'type',
          },
          {
            key: 4,
            label: '活动时间',
            prop: 'time',
          },
          {
            key: 5,
            label: '活动地点',
            prop: 'place'
          }
        ]
      }
    }
  },
  computed: {
    computedTableData: {
      get() {
        return this.tableData
      },
      set(value) {
        this.$emit('update:tableData', value)
      }
    }
  }
}
</script>
<template>
  <div class="main-table">
    <!-- <el-button @click="tableData[0].total -= 1">测试</el-button> -->
    <el-table ref="elTable" :data="tableData" header-row-class-name="header-row" header-cell-class-name="header-cell"
      border highlight-current-row @row-click="$emit('row-click')" v-loading="tableLoading" element-loading-text="数据加载中"
      element-loading-spinner="el-icon-loading">
      <!-- v-bind="item" <=> :key="item.key" :label="item.label" -->
      <el-table-column v-for="item in columnConfig" v-bind="item"></el-table-column>
      <el-table-column label="操作" width="80" align="center">编辑</el-table-column>
    </el-table>
  </div>
</template>

<style scoped lang="scss">
// 表头样式
.header-row {
  color: #333 !important;
  font-size: 14px;
  box-sizing: border-box;

  >th {
    height: 36px;
    // font-weight: unset !important;
    line-height: 36px !important;
    padding: 0 !important;

    // text-align: center !important; // 表头内容居中,根据实际业务需要控制
    &:after {
      position: absolute;
      top: 50%;
      inset-inline-end: 0;
      width: 1px;
      height: 24px;
      background-color: #d4d4d4;
      transform: translateY(-50%);
      transition: background-color 0.2s;
      content: "";
    }
  }

}

.header-cell {
  background-color: #e9e9e9;
}
</style>