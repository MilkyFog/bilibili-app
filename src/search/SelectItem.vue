<script setup>
import { computed } from "vue";
import Item from "./Item"



// TODO: Props
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  modelValue: String,
  options: Array
})

// TODO: Emits
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})


</script>
<template>
  <div class="select-item">
    <item :text="text">
      <el-select 
        class="h-28px" filterable clearable 
        placeholder="请选择" size="mini"
        v-model="value"
      >
        <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label" />
      </el-select>
    </item>
  </div>
</template>



<style scoped></style>