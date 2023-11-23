<template>
  <div class="input-item">
    <Item text="计划书编号：">
      <el-input v-model="value" placeholder="请输入" size="mini" clearable @keypress.enter.native="getList(1)"
        @clear="getList(1)" class="h-28px"></el-input>
    </Item>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Item from "./Item"

const props = defineProps({
  text: String,
  modelValue: String,
})
const emit = defineEmits(['update:modelValue'])
const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
const getList = () => {
  console.log('getList')
}
</script>

<style scoped lang="scss">
.el-input {
  width: 200px !important;
}
</style>