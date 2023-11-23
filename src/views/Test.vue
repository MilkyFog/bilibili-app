<template>
  <div class="test">
    <!-- 现在版本不支持 不然可以更加简单 v-model:tableData -->
    <BasicPage></BasicPage>
  </div>
</template>

<script setup>
import InputItem from '@/search/InputItem'
import SelectItem from '@/search/SelectItem'
import MyBudgetTable from '../budget-table/MyBudgetTable.vue';
import Tool from '../components/basic-page/Tool.vue';
import MainTable from '../components/basic-page/MainTable.vue';
import SearchLine from '../components/basic-page/SearchLine.vue';
import BasicPage from '../components/basic-page/BasicPage.vue';
import { ref } from 'vue';
const test = () => {
  console.log('Test: test')
}

const searchForm = ref({
  name: "",
  gender: "",
  status: "",
  planNo: "2002",
  institution: "鄞州人民医院",
})
const institutionList = ref([
  {
    value: '1',
    label: '宁波人民医院',
  },
  {
    value: '2',
    label: '浙江人民医院'
  }
])
const tableData = ref([
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
const tableConfig = [
  { key: 0, prop: 'name', label: '物品名称', type: 'input' },
  { key: 1, prop: 'price', label: '单价', type: 'input' },
  { key: 2, prop: 'num', label: '数量', type: 'input' },
  { key: 3, prop: 'total', label: '总价', type: 'input' },
  // { key: 4, prop: 'valueType', label: '类型', type: 'select', options: [{ value: '0', label: '温度' }, { value: '1', label: '湿度' }, { value: '2', label: '氨气浓度' }, { value: '3', label: '料塔预料' }] }
]
const columnConfig = [
  {
    key: 0,
    label: '商品名称',
    prop: 'name'
  },
  {
    key: 1,
    label: '商品价格',
    prop: 'price',
  },
  {
    key: 2,
    label: '商品数量',
    prop: 'num'
  },
  {
    key: 3,
    label: '总价',
    prop: 'total'
  }
]
</script>

<style scoped lang="scss"></style>