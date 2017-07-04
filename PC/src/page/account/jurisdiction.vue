<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">后台账号管理</el-breadcrumb-item>
        <el-breadcrumb-item>账号角色与权限管理</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="add_account">
        <div class="add_title title">添加账号角色</div>
        <el-input v-model="input" placeholder="填写角色名称"></el-input>
        <el-button type="text">权限分配</el-button>
        <el-button type="primary" size="large">大型按钮</el-button>
      </div>
      <div class="distribution">
        <div class="distribution_title title">分配角色权限</div>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="name"
            label="角色名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="jurisdiction"
            label="角色现有权限"
            width="180">
          </el-table-column>
          <el-table-column
            prop="operation"
            label="操作">
          </el-table-column>
        </el-table>

        <div class="page">
          <ul class="pager">
            <li class="previous"><a href="#">上一页</a></li>
            <li class="next"><a href="#">下一页</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="box2">
      <div class="permission_assignment">
        <div class="permission_assignment_title">分配角色权限</div>
        <dl>
          <dt><input type="checkbox" value="商品管理" />商品管理</dt>
          <dd><input type="checkbox" value="商品分类管理" />商品分类管理</dd>
          <dd><input type="checkbox" value="商品品牌管理" />商品品牌管理</dd>
          <dd><input type="checkbox" value="商品标签管理" />商品标签管理</dd>
        </dl>
        <dl>
          <dt><input type="checkbox" value="后台账号管理" />后台账号管理</dt>
          <dd><input type="checkbox" value="添加后台账号" />添加后台账号</dd>
          <dd><input type="checkbox" value="后台权限管理" />后台权限管理</dd>
          <dd><input type="checkbox" value="管理后台账号" />管理后台账号</dd>
        </dl>
        <div class="permission_btn">
          <div class="permission_cancel">取消</div>
          <div class="permission_confirm">确认</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//  export default {
//    data() {
//      return {
//        input: ''
//      }
//    }
//  }



//  export default {
//    data() {
//      return {
//        tableData: [{
//          name: '2016-05-02',
//          jurisdiction: '王小虎',
//          operation: '上海市普陀区金沙江路 1518 弄'
//        }, {
//          name: '2016-05-04',
//          jurisdiction: '王小虎',
//          operation: '上海市普陀区金沙江路 1517 弄'
//        }, {
//          name: '2016-05-01',
//          jurisdiction: '王小虎',
//          operation: '上海市普陀区金沙江路 1519 弄'
//        }, {
//          name: '2016-05-03',
//          jurisdiction: '王小虎',
//          operation: '上海市普陀区金沙江路 1516 弄'
//        }]
//      }
//    }
//  }
</script>
