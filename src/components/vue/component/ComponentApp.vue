<script setup>
import { ref } from 'vue'
import CustomInput from './CustomInput.vue'
  
const message = ref('hello')
</script>

<template>
  <div>
    <!-- <CustomInput v-model="message" /> 低版本不支持 -->
    <!-- <custom-input :value="message" @update:modelValue="newValue => message = newValue"></custom-input>
    <div>{{ message }}</div> -->
  </div>
</template>