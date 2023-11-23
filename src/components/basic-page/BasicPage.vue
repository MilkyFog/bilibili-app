<script>
import SearchLine from './SearchLine.vue';
import SearchItem from './SearchItem.vue';
import Tool from './Tool.vue';
import MainTable from './MainTable.vue';
import Pagination from './Pagination.vue'
import Drawer from './drawer/Drawer.vue';
export default {
  components: {
    SearchLine,
    SearchItem,
    Tool,
    MainTable,
    Pagination,
    Drawer,
  },
  data() {
    return {
      searchForm: {
        name: "name",
        gender: "gender",
        status: "",
      },
      total: 0,
      pageSize: 10, // 示例：分页10条数据。若数据量不大，则可以调整该变量
      pageIndex: 1, // 页码，从1开始
    }
  },
  methods: {
    handleAdd() {
      console.log('BasicPage: handleAdd')
      // if (this.drawerType == 2) {
      //   this.handleClose();
      // } else {
      //   this.drawerType = 1; //1=新增
      //   this.drawerVisible = true;
      //   for (let key in this.drawerForm) {
      //     this.drawerForm[key] = "";
      //   }
      //   this.$nextTick(() => {
      //     this.$refs.drawerForm.clearValidate();
      //   });
      // }
    },
    closeDrawer() {
      console.log('BasicPage: closeDrawer')
      // if (this.drawerVisible && this.closePass) {
      //   this.$refs.pageDrawer.closeDrawer();
      // } else {
      //   this.closePass = true;
      // }
    },
    getList() {
      console.log('BasicPage: getList(1)')
    }
  }
}
</script>
<template>
  <div class="container">
    <div @click="closeDrawer">
      <search-line>
        <search-item>
          <el-input v-model.trim="searchForm.name" placeholder="请输入" size="mini" clearable class="search-item-input"
            @keypress.enter.native="getList(1)" @clear="getList(1)" />
        </search-item>
      </search-line>
      <tool button-type="ktna-btn-primary" text="归档" @open:drawer="handleAdd"></tool>
      <main-table></main-table>
    </div>
    <pagination :total="total" :page.sync="pageIndex" :limit.sync="pageSize" @pagination="getList(pageIndex)" />
    <drawer ref="drawer"></drawer>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 12px;
  font-size: 14px;
}
</style>