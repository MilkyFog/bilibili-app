<script setup>
import { computed, nextTick, reactive, ref } from 'vue';

// data: 
const budgetData = ref([
  {
    name: '便利贴',
    price: "5.00",
    num: '5',
    total: '25.00',
  },
  {
    name: '横幅',
    price: "10.00",
    num: '10',
    total: '100.00',
  }
])
const position = reactive({
  rowIndex: -1,
  columnIndex: -1
})

const props = defineProps({
  tableData: Array,
  tableConfig: Array,
})
// NOTE: methods: 
/** 
 * 给每个cell的row和column添加上对应的index
 * 单元格的className的回调方法 也可以使用字符串为所有单元格设置一个固定的className。
 * @params 
 * @example :cell-class-name="setCellPosition"
*/
const setCellPosition = ({ row, column, rowIndex, columnIndex }) => {
  row.index = rowIndex
  column.index = columnIndex
}
/**
 * 点击每个数据cell 将当前点击cell的位置更新
 * @param {Object} row
 * @param {Object} column
*/
const onClickCell = (row, column, cell) => {
  position.rowIndex = row.index
  position.columnIndex = column.index
  nextTick(() => { // 等组件DOM更新完成 执行回调函数 让el-input聚焦
    // this.$refs.elInput.focus()
    cell.querySelector('input').focus()
  })
}
/**
 * 当el-input失去焦点 将当前聚焦的cell的位置初始化为(-1, -1)
 * @example @blur="handlleInputBlur"
 */
const handleInputBlur = () => {
  position.rowIndex = -1
  position.columnIndex = -1
}

// computed
const getTotalSum = computed(() => {
  const sum = budgetData.value.reduce((sum, cur) => sum + Number(cur.total || 0), 0)
  return sum.toFixed(2)
})
const deleteRow = (index, rows) => {
  rows.splice(index, 1)
}
</script>
<template>
  <div class="budget-table b-A">
    <el-table :data="budgetData" header-row-class-name="header-row" v-loading="false" element-loading-text="数据加载中"
      element-loading-spinner="el-icon-loading" header-cell-class-name="header-cell" :cell-class-name="setCellPosition"
      @cell-click="onClickCell">
      <el-table-column prop="name" label="物品名称" min-width="100" align="center" fixed="left">
        <template v-slot="scope">
          <el-input v-if="scope.row.index === position.rowIndex && scope.column.index === position.columnIndex"
            type="text" v-model="scope.row.name" @blur="handleInputBlur"></el-input>
          <span v-else>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="单价/元" min-width="100" align="center">
        <template v-slot="scope">
          <el-input v-if="scope.row.index === position.rowIndex && scope.column.index === position.columnIndex"
            type="text" v-model="scope.row.price" @blur="handleInputBlur"></el-input>
          <span v-else>{{ scope.row.price }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="num" label="数量" min-width="100" align="center">
        <template v-slot="scope">
          <el-input v-if="scope.row.index === position.rowIndex && scope.column.index === position.columnIndex"
            type="text" v-model="scope.row.num" @blur="handleInputBlur"></el-input>
          <span v-else>{{ scope.row.num }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="total" label="总价/元" min-width="100" align="center">
        <template v-slot="scope">
          <el-input v-if="scope.row.index === position.rowIndex && scope.column.index === position.columnIndex"
            type="text" v-model="scope.row.total" @blur="handleInputBlur"></el-input>
          <span v-else>{{ scope.row.total }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="100">
        <template slot-scope="scope">
          <el-button size="small" type="danger" @click.native.prevent.stop="deleteRow(scope.$index, budgetData)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style lang="scss">
.add-row-button {
  border: 1px dashed blue;
}
</style>