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
      <slot></slot>
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