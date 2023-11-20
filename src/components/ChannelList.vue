<template>
  <div>
    <div class="channel-list overflow-hidden" :style="{ height: `${height}px` }">
      <!-- 100%的宽度 三列就只有33%宽度了 -->
      <div v-for="item in channels" :key="item.id" class="item float-left" :style="{ width: `${100 / columns}%` }">
        <!-- @active="activeId = $event" 将当前点击的item的id赋值给activeId -->
        <Channel @active="$emit('active', item.id)" :isActive="item.id === activeId" :data="item">
        </Channel>
      </div>


    </div>
    <div class="collapse" @click="isExpand = !isExpand">
      <span>{{ isExpand ? "折叠" : "展开" }}</span>
      <!-- TODO: 动态绑定类 -->
      <i class="iconfont text-12px ml-8px" :class="isExpand ? 'icon-arrow-up' : 'icon-jiantou9'"></i>
    </div>
  </div>
</template>

<script>
import channelServ from '@/services/channel'
import Channel from './Channel.vue'
export default {
  components: { Channel },
  data() {
    return {
      channels: [], // TODO: 只在当前组件使用的数据放在data 
      isExpand: true, // 控制是否展开
    };
  },
  props: {
    activeId: { // 当前点击的item的id
      type: Number,
      required: true
    },
    columns: { // 控制ChannelList一行有多少列
      type: Number,
      default: 2
    }
  },
  async created() {
    // DOM渲染次数: 两次 网络请求是异步的 当channels请求到之后 又再渲染了一次
    const datas = await channelServ.getChannels();
    this.channels = datas.filter(item => item.name !== '热门');
  },
  computed: {
    height() { // TODO: 计算属性动态绑定样式
      let rows = 3; // 没有展开的时候 行数默认为3行
      if (this.isExpand) {
        rows = Math.ceil(this.channels.length / this.columns) // 行数需要向上取整
      }
      return rows * 40; // 每行的高度是40
    }
  }
}
</script>
<style scoped>
/* 上下箭头的alibaba图标库的css */
@import "//at.alicdn.com/t/font_1564527_7ksvh9f13lg.css";

.channel-list {
  transition: 0.3s;
}

/* TODO: clear: both清除浮动 */
.collapse {
  clear: both;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #999;
  font-size: 14px;
  cursor: pointer;
}

</style>