<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">店主管理</el-breadcrumb-item>
        <el-breadcrumb-item>店主管理</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="apply_">
        <div class="titlee" style="border:0;">店主列表</div>
        <div class="apply_condition">
          <div class="apply_time">

            <div class="block">
              <el-button type="success">添加无团队店主</el-button>
            </div>
          </div>
          <div class="apply_information">
            筛选：
            <select name="">
              <option value="">全部</option>
              <option value="">有团队店主</option>
              <option value="">无团队店主</option>
            </select>

            <input type="text" placeholder="输入账号（手机号）查找店主" style="padding:0 10px;" />
            <el-button type="success">查找</el-button>
          </div>
        </div>

        <div class="apply_form">
          <el-table
            border
            style="width: 100%">
            <el-table-column
              label="何时升级到此级别店主">
            </el-table-column>
            <el-table-column
              label="店主级别">
            </el-table-column>
            <el-table-column
              label="账号">
            </el-table-column>
            <el-table-column
              label="所属团队--团长账号">
            </el-table-column>
            <el-table-column
              label="累计销售金额">
            </el-table-column>
            <el-table-column
              label="操作">
            </el-table-column>
          </el-table>

        </div>
      </div>
    </div>
  </div>
</template>


