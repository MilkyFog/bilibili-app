<script>
import DrawerTop from './DrawerTop.vue'
export default {
  components: {
    DrawerTop,
  },
  data() {
    return {
      drawerVisible: true,
      direction: "rtl",
      drawerLoading: false,
      drawerTitle: "查看", //弹窗标题
      drawerType: 0, //0=查看，1=新增，2=编辑
      //抽屉表单
      drawerForm: {
        name: "",
        content: "",
        status: "",
        op: "",
        createTime: "",
      },
      confirmTxt: "", //确认文字
      closePass: true, //是否允许关闭抽屉，row-click不能加冒泡阻止事件，先用状态来判断
      selectData: [], //选中行的数据预存，取消编辑的时候恢复
      rules: {
        name: [{ required: true, message: "请输入用户名称", trigger: "blur" }],
        content: [{ required: true, message: "请输入用户ID", trigger: "blur" }],
        status: [{ required: true, message: "请选择启用状态", trigger: "change" }],
      },
      norules: {}, //不需要验证的情况，避免报错
      statusList: [
        {
          name: "启用",
          code: 1,
        },
        {
          name: "禁用",
          code: 0,
        },
      ],
    }
  },
  methods: {
    handleClose() {
      console.log('Drawer: handleClose')
    },
    resetDrawer() {
      console.log('Drawer: resetDrawer')
    },
    closeDrawer() {
      console.log('Drawer: closeDrawer')
    },
    handleDrawerEdit() {
      console.log('Drawer: handleDrawerEdit')
    },
    handleDrawerDelete() {
      console.log('Drawer: handleDrawerDelete')
    },
    handleDrawerSave() {
      console.log('Drawer: handleDrawerSave')
    },

    handleDrawerCancel() {
      console.log('Drawer: handleDrawerCancel')
    },
    getNameByCode() {
      console.log('Drawer: getNameByCode')
    },
  }
}
</script>
<template>
  <!--  
       
    -->
  <!-- :modal是否需要遮罩层 :show-close是否显示关闭按钮 size调整drawer宽度 -->
  <!-- :with-header="false" 关闭title的显示 -->
  <el-drawer ref="pageDrawer" :visible.sync="drawerVisible" v-loading="drawerLoading"  :direction="direction" 
     size="670px" :show-close="false" :modal="true" :with-header="false" 
     class="drawer-dialog" :before-close="handleClose" @close="resetDrawer" 
    >
    <drawer-top></drawer-top>
    <!-- <div class="drawer-container">
      <div class="drawer-head flex-end">
        <div class="head-btn-box">
          <el-button v-if="drawerType == 0" class="ktna-btn ktna-btn-primary" size="small" @click.stop="handleDrawerEdit">
            编辑
          </el-button>
          <el-button v-if="drawerType == 0" class="ktna-btn ktna-btn-warning-primary" size="small"
            @click.stop="handleDrawerDelete">
            删除
          </el-button>
          <el-button v-if="drawerType != 0" class="ktna-btn ktna-btn-primary" size="small" @click.stop="handleDrawerSave">
            保存
          </el-button>
          <el-button v-if="drawerType != 0" class="ktna-btn ktna-btn-info" size="small" @click.stop="handleDrawerCancel">
            取消
          </el-button>
        </div>
      </div>
      <el-form ref="drawerForm" :inline="true" :rules="drawerType == 0 ? norules : rules" :validate-on-rule-change="false"
        :model="drawerForm" label-width="100px" class="drawer-inline">
        <el-form-item label="用户名称：" prop="name">
          <p v-if="drawerType == 0" class="drawer-view">{{ drawerForm.name }}</p>
          <el-input v-else v-model="drawerForm.name" ref="firstInput" maxlength="255" size="mini" />
        </el-form-item>
        <el-form-item label="用户ID：" prop="content">
          <p v-if="drawerType == 0" class="drawer-view">{{ drawerForm.content }}</p>
          <el-input v-else v-model="drawerForm.content" maxlength="255" size="mini" />
        </el-form-item>
        <el-form-item label="启用状态：" prop="status">
          <p v-if="drawerType == 0" class="drawer-view" :class="drawerForm.status == 0 ? 'color-grey' : 'color-green'">
            {{ getNameByCode(statusList, drawerForm.status) }}
          </p>
          <el-select v-else v-model="drawerForm.status" clearable placeholder="请选择" size="mini">
            <el-option v-for="item in statusList" :key="item.code" :label="item.name" :value="item.code" />
          </el-select>
        </el-form-item>
        <el-form-item label="下拉选项：" prop="op">
          <p v-if="drawerType == 0" class="drawer-view">{{ drawerForm.op || "-" }}</p>
          <el-select v-else v-model="drawerForm.op" filterable clearable placeholder="请选择" size="mini">
            <el-option v-for="item in statusList" :key="item.code" :label="item.name" :value="item.code" />
          </el-select>
        </el-form-item>
        <el-form-item class="column-2" label="文本框：" prop="createTime">
          <p v-if="drawerType == 0" class="drawer-view">{{ drawerForm.createTime }}</p>
          <el-input v-else v-model="drawerForm.createTime" type="textarea" :rows="5" maxlength="255" size="mini"
            show-word-limit />
        </el-form-item>
      </el-form>
    </div> -->
  </el-drawer>
</template>

<style scoped lang="scss"></style>