<script setup>
import { computed } from 'vue';

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const value = computed({
  get() {
    return props.modelValue
  },
  set(value) { // 当value改变调用set方法 value代表新值
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <!-- <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" /> -->
  <input v-model="value" />
</template>