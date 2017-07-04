<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">后台账号管理</el-breadcrumb-item>
        <el-breadcrumb-item>账号角色与权限管理</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="add_account">
        <div class="add_title tit;l">添加账号角色</div>
        <div class="add_name">
          <input type="text" placeholder="填写角色名称" />
        </div>
        <div class="add_distribution">
          <a href="#" class="permission_url">权限分配</a>
        </div>
        <div class="add_btn">
          确认添加
        </div>
      </div>
      <div class="distribution">
        <div class="distribution_title">
          分配角色权限
        </div>
        <div class="distribution_form">
          <table class="table table-bordered">
            <tr>
              <td>角色名</td>
              <td>角色现有权限</td>
              <td>操作</td>
            </tr>
            <tr>
              <td>主管理员</td>
              <td>后台账号管理-所有、业务管理-所有、用户信息处理-所有</td>
              <td class="operation"><a href="#" class="permission_url">权限分配</a><a href="#">删除</a></td>
            </tr>
            <tr>
              <td>客服管理员</td>
              <td>用户信息处理-所有</td>
              <td class="operation"><a href="#" class="permission_url">权限分配</a><a href="#">删除</a></td>
            </tr>
            <tr>
              <td>管理员</td>
              <td>业务管理-所有、用户信息处理-所有</td>
              <td class="operation"><a href="#" class="permission_url">权限分配</a><a href="#">删除</a></td>
            </tr>
          </table>
        </div>
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
