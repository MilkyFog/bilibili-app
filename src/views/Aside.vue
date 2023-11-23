<template>
  <div>
    <div class="w-250px">
      <!-- TileMenu被点击后 activeId变为100 active事件抛出路径 Item.vue -> TitleMenu.vue -> App.vue -->
      <!-- isActive作用: 改变Item选中的背景颜色 :class="{ active: isActive }" 传递路径 App.vue -> TitleMenu.vue -> Item.vue -->
      <TitleMenu :isActive="activeId === 100" @active="activeId = 100">
        <template #title>
          发现频道
        </template>
        <template v-slot:icon>
          >
        </template>
      </TitleMenu>
      <!-- $evenet是ChannelList中active事件抛出的参数 @active="$emit('active', item.id)" -->
      <ChannelList :activeId="activeId" @active="activeId = $event" />
    </div>
  </div>
</template>

<script>
import TitleMenu from '@/components/TitleMenu.vue';
import ChannelList from '@/components/ChannelList.vue';
export default {
  components: {
    TitleMenu,
    ChannelList
  },
  data() {
    return {
      activeId: 100,
    }
  }
}
</script>

<style scoped>
</style>