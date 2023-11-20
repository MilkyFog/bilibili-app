<template>
  <div>
    <div class="w-250px">
      <TitleMenu :isActive="isActive" @active="isActive = true">
        <template #title>
          发现频道
        </template>
        <template v-slot:icon>
          >
        </template>
      </TitleMenu>
    </div>
  </div>
</template>

<script>
import TitleMenu from '@/components/TitleMenu.vue';
export default {
  components: {
    TitleMenu,
  },
  data() {
    return {
      isActive: true
    }
  }
}
</script>

<style scoped>
</style>