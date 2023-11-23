<script>
export default {
  data() {
    return {
      position: {
        rowIndex: -1,
        columnIndex: -1
      },
      totalPrice: 0,
    }

  },
  methods: {
    /**
     * 给每个cell的row和column添加上对应的index 
     * 单元格的className的回调方法 也可以使用字符串为所有单元格设置一个固定的className。
     * @params 
     * @example :cell-class-name="setCellPosition"
     */
    setCellPosition({ row, column, rowIndex, columnIndex }) {
      row.index = rowIndex
      column.index = columnIndex
    },
    /**
     * 点击每个数据cell 将当前点击cell的位置更新
     * @param {Object} row
     * @param {Object} column
     */
    onClickCell(row, column, cell, event) {
      this.changePosition(row.index, column.index)
      if (column.index === 4) return // 如果点击的是操作列 没有input可以focus()
      this.$nextTick(() => { // 等组件DOM更新完成 执行回调函数 让el-input聚焦
        cell.querySelector('input').focus()
      })
    },
    changePosition(row, column) {
      this.position.rowIndex = row
      this.position.columnIndex = column
    },
    /**
     * 当el-input失去焦点 将当前聚焦的cell的位置初始化为(-1, -1)
     * @example @blur="handlleInputBlur"
     */
    handleInputBlur() {
      this.changePosition(-1, -1)
    },
    deleteRow(index, rows) {
      rows.splice(index, 1)
    },
    addRow() {
      const tableConfig = this.tableConfig
      let rowData = {}
      for (const item of tableConfig) {
        rowData[item.prop] = ""
      }
      this.changePosition(this.computedTableData.length, 0)
      this.$nextTick(() => {
        const tableRef = this.$refs.budgetTable
        const firstCell = tableRef.$el.querySelector('.el-table__body-wrapper tbody tr:last-child td:first-child')
        console.log(firstCell)
        if (firstCell) {
          firstCell.querySelector('input').focus(); // 假设单元格内部是输入框，调用 focus() 方法
        }
      })
      this.computedTableData.push(rowData)
    }
  },
  props: {
    tableConfig: Array,
    tableData: Array,
  },
  emits: ['update:tableData'],
  computed: {
    computedTableData: {
      get() {
        return this.tableData
      },
      set(newTableData) {
        this.$emit('update:tableData', newTableData)
      }
    }
  },
  watch: {
    tableData: {
      handler(newValue) {
        this.totalPrice = newValue.reduce((accumulator, curValue) => accumulator + Number(curValue.total), 0)
      },
      deep: true
    }
  }
}
</script>
<template>
  <div class="budget-table">
    <el-table :data="computedTableData" header-row-class-name="header-row" v-loading="false" element-loading-text="数据加载中"
      element-loading-spinner="el-icon-loading" header-cell-class-name="header-cell" ref="budgetTable"
      :cell-class-name="setCellPosition" @cell-click="onClickCell">
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
      <el-table-column label="操作" min-width="100" align="center">
        <template slot-scope="scope">
          <el-button size="small" type="danger"
            @click.native.prevent.stop="deleteRow(scope.$index, computedTableData)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="add-row-button h-50px line-height-50px text-center cursor-pointer" @click="addRow">+ 添加</div>
    <div class="flex justify-end">总价：{{ totalPrice }}元</div>

  </div>
</template>

<style lang="scss">
.add-row-button {
  border: 1px dashed #c1c1cd;
}
</style>