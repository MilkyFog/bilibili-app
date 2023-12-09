<script>
import SearchItem from './SearchItem.vue';
import SearchButton from './SearchButton.vue';
export default {
  components: {
    SearchItem,
    SearchButton
  },
  data() {
    return {
      items: [
        {
          text: '活动日期：',
          type: 'date-picker',
          value: ''
        },
        {
          text: '活动性质：',
          type: 'select',
          value: '',
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
        },
        {
          text: '归档社工：',
          type: 'select',
          value: '选项1',
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
        },
      ],
      value1: '',
    }
  },
  methods: {
  },
  props: {
    searchForm: {
      type: Object,
      default: () => {
        return {
          name: "name",
          gender: "gender",
          status: "",
        }
      }
    }
  }
}
</script>
<template>
  <div class="search-line-up">
    <div class="line">
      <search-item v-for="item in items" :item="item" :text="item.text">
        
      </search-item>
      <search-button></search-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-line-up {
  padding-bottom: 4px;
  border-bottom: 1px solid #eeeeee;
  overflow: hidden;

  .line {
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>