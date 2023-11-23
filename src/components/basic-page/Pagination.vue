<template>
  <div :class="{ hidden: hidden }" class="pagination-container">
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { scrollTo } from "@/utils/scroll-to";

export default {
  name: "Pagination",
  props: {
    total: {
      required: true,
      type: Number,
    },
    page: {
      // 当前页
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 2,
    },
    pageSizes: {
      // 页数选择
      type: Array,
      default() {
        return [5, 10, 20, 50];
      },
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper",
    },
    background: {
      type: Boolean,
      default: true,
    },
    autoScroll: {
      type: Boolean,
      default: true,
    },
    hidden: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    currentPage: {
      get() {
        return this.page;
      },
      set(val) {
        this.$emit("update:page", val);
      },
    },
    pageSize: {
      get() {
        return this.limit;
      },
      set(val) {
        this.$emit("update:limit", val);
      },
    },
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("pagination", { page: this.currentPage, limit: val });
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
    handleCurrentChange(val) {
      this.$emit("pagination", { page: val, limit: this.pageSize });
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination-container {
  text-align: center;
  background: #fff;
  padding: 10px 16px 0;
}
.pagination-container.hidden {
  display: none;
}
::v-deep .el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #5283f7;
  border-color: #5283f7;
}
::v-deep .el-pagination.is-background .el-pager li {
  font-weight: normal;
  color: #666;
  background-color: #fff;
  border: 1px solid #e9e9e9;
}
::v-deep .el-pagination.is-background .el-pager li.active {
  color: #5283f7;
  border-color: #5283f7;
  background-color: #fff;
}
::v-deep .el-pagination.is-background .btn-prev,
::v-deep .el-pagination.is-background .btn-next {
  border: 1px solid #e9e9e9;
  background-color: #fff;
  &:hover {
    color: #5283f7;
    border-color: #5283f7;
  }
  &:disabled {
    border-color: #e9e9e9;
  }
}
</style>
