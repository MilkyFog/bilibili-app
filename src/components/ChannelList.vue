<template>
  <div class="channel-list">
    <div v-for="item in channels" :key="item.id" class="item">
      <!-- @active="activeId = $event" 将当前点击的item的id赋值给activeId -->
      <Channel 
        @active="$emit('active', item.id)" 
        :isActive="item.id === activeId" 
        :data="item">
      </Channel>
    </div>
  </div>
</template>

<script>
import channelServ from '@/services/channel'
import Channel from './Channel.vue'
export default {
  data() {
    return {
      channels: [], // TODO: 只在当前组件使用的数据放在data 
    };
  },
  props: ['activeId'],
  async created() {
    // DOM渲染次数: 两次 网络请求是异步的 当channels请求到之后 又再渲染了一次
    const datas = await channelServ.getChannels();
    this.channels = datas.filter(item => item.name !== '热门');
  },
  components: { Channel }
}
</script>