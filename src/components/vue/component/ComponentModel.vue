<script setup>
import { reactive, ref } from 'vue'
import CustomInput from './CustomInput.vue'

const message = ref('hello')
const object = reactive({
  message: 'Hello',
  name: 'Vue',
})
const updateObject = (newObject, prop, val) => {
  object[prop] = val
}
</script>

<template>
  <div>
    <!-- 双向绑定值 子组件抛出事件-->
    <!-- <CustomInput v-model="message" /> 低版本不支持 -->
    <!-- <custom-input :value="message" @update:modelValue="newValue => message = newValue"></custom-input>
    <div>{{ message }}</div> -->

    <!-- 双向绑定值 计算属性 modelValue <=> value -->
    <!-- <custom-input :value="message" @update:modelValue="newValue => message = newValue"></custom-input>
    <div>{{ message }}</div> -->

    <!-- 双向绑定对象中的属性 -->
    <!-- <custom-input :modelObject="object" @update:modelObject="newObject => object = newObject"></custom-input>
    <div>{{ object.message }}, {{ object.name }}</div> -->
    <custom-input :modelObject="object" @update:modelObject="updateObject"></custom-input>
    <div>{{ object.message }}, {{ object.name }}</div>
  </div>
</template>