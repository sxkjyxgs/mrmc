<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">支付系统</el-breadcrumb-item>
        <el-breadcrumb-item>用户提现申请</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="titlee" style="border:0;">提现申请列表</div>
      <div class="operation_time">
        <i>申请时间：</i>
        <div class="block">
          <el-date-picker
            type="daterange"
            placeholder="选择日期范围">
          </el-date-picker>
        </div>
      </div>

      <div class="out_account_form">
        <el-table
          border
          style="width: 100%">
          <el-table-column
            label="申请时间">
          </el-table-column>
          <el-table-column
            label="用户账号">
          </el-table-column>
          <el-table-column
            label="申请提现奖励（元）">
          </el-table-column>
          <el-table-column
            label="备注">
          </el-table-column>
          <el-table-column
            label="操作">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

