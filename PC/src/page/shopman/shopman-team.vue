<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">店主管理</el-breadcrumb-item>
        <el-breadcrumb-item>店主团队管理</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="apply_">
        <div class="titlee" style="border:0;">店主团队列表</div>
        <div class="apply_condition">
          <div class="apply_time">

            <div class="block">
              <el-button type="success" @click="DisplayBlock">添加团队</el-button>
            </div>
          </div>
          <div class="apply_information">
            <input type="text" placeholder="输入团长账号搜索团队" style="padding:0 10px;" />
            <el-button type="success">搜索</el-button>
          </div>
        </div>

        <div class="apply_form">
          <el-table
            border
            style="width: 100%">
            <el-table-column
              label="团队级别">
            </el-table-column>
            <el-table-column
              label="团队生成时间">
            </el-table-column>
            <el-table-column
              label="团长账号">
            </el-table-column>
            <el-table-column
              label="团队人数">
            </el-table-column>
            <el-table-column
              label="操作">
            </el-table-column>
          </el-table>

        </div>
      </div>
    </div>
    </div>
  </div>
</template>



