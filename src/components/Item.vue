<template>
  <div 
    class="item w-100% h-100% cursor-pointer hover:bg-#f4f4f4 b-C" 
    :class="{ active: isActive }" 
    @click="handleClickItem"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClickItem() {
      this.$emit('active')
      // console.log(this)
    }
  }
}
</script>

<style>
.active {
  background-color: #e7e7e7;
}
</style>