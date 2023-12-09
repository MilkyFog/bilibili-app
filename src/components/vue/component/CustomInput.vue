<script setup>
import { computed } from 'vue';

const props = defineProps(['modelValue', 'modelObject'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
// const object = computed({
//   get() {
//     return props.modelObject 
//   },
//   set(object) {
//     emit('update:modelObject', object)
//   }
// })
const object = computed({
  get() {
    return new Proxy(props.modelObject, { // 代理对象的值修改了会触发set函数
      set(obj, name, val) { // obj改动的对象 name: 修改的属性名 val: 修改后的属性值
        console.log('Emit >>>', name, val)
        emit('update:modelObject', {
          ...obj, // 展开之前对象的值
          [name]: val // 将其中修改的属性修改为新的结果
        }, name, val)
        return true
      }
    })
  },
})
</script>

<template>
  <!-- <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" /> -->
  <div class="custom-input">
    <input v-model="object.message" />
    <input v-model="object.name" />
  </div>
</template>