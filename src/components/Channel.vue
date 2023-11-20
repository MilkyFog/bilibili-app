<template>
  <div class="title-menu w-100% h-40px line-height-40px">
    <Item :isActive="isActive" @active="$emit('active')">
      <div class="inner px-20px">
        <span class="name text-14px text-#212121 float-left">{{ data.name }}</span>
        <span class="number text-12px text-#999 ml-8px float-left">{{ data.channel_count }}</span>
      </div>
    </Item>
  </div>
</template>

<script>
import Item from '@/components/Item.vue';

export default {
  components: {
    Item
  },
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: () => ({}) // TODO: 组件会被使用多次 每个组件虽然配置是一样的 但是数据来自于一个函数调用 保证每个函数
    }
  }
}
</script>