<template>
  <div class="title-menu w-100% h-46px line-height-46px">
    <Item :isActive="isActive" @active="$emit('active')">
      <div class="px-20px">
        <div class="float-left text-#212121 font-500">
          <slot name="title"></slot>
        </div>
        <div class="float-right text-#999 text-12px">
          <slot name="icon"></slot>
        </div>
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
    }
  }
}
</script>