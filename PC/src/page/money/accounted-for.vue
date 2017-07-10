<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">支付系统</el-breadcrumb-item>
        <el-breadcrumb-item>入账</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="accounted_for">
        <div class="block">
          <div class="block">
            <el-date-picker
              v-model="value6"
              type="daterange"
              placeholder="选择日期范围">
            </el-date-picker>
          </div>
        </div>
      </div>

      <div class="accounted_for_form">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="occurrence_time"
            label="发生时间">
          </el-table-column>
          <el-table-column
            prop="cause_of_occurrence"
            label="发生原因">
          </el-table-column>
          <el-table-column
            prop="receipt"
            label="入款方式">
          </el-table-column>
          <el-table-column
            prop="deposit_account"
            label="入款账号">
          </el-table-column>
          <el-table-column
            prop="user_account"
            label="用户账号">
          </el-table-column>
          <el-table-column
            prop="amount_change"
            label="金额变化">
          </el-table-column>
          <el-table-column
            prop="background_balance"
            label="后台余额">
          </el-table-column>
        </el-table>
      </div>

      <div class="current_balance">
        当前后台余额:￥10086
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
    return {
      value6: '',
      value7: '',
      tableData: [{
        occurrence_time: '发生时间2',
        cause_of_occurrence: '发生原因',
        receipt: '入款方式',
        deposit_account: '入款账号',
        user_account: '用户账号',
        amount_change: '金额变化',
        background_balance: '后台余额'
      }, {
        occurrence_time: '发生时间2',
        cause_of_occurrence: '发生原因',
        receipt: '入款方式',
        deposit_account: '入款账号',
        user_account: '用户账号',
        amount_change: '金额变化',
        background_balance: '后台余额'
      }, {
        occurrence_time: '发生时间2',
        cause_of_occurrence: '发生原因',
        receipt: '入款方式',
        deposit_account: '入款账号',
        user_account: '用户账号',
        amount_change: '金额变化',
        background_balance: '后台余额'
      }, {
        occurrence_time: '发生时间2',
        cause_of_occurrence: '发生原因',
        receipt: '入款方式',
        deposit_account: '入款账号',
        user_account: '用户账号',
        amount_change: '金额变化',
        background_balance: '后台余额'
      }]
    }
  }
  }
</script>

<style>
  .accounted_for{
    width: 80%;
    margin: 30px 0 30px 10%;
  }

  .accounted_for_form{
    width: 80%;
    margin: 0 10%;
  }

  .current_balance{
    width: 80%;
    margin-left: 10%;
    text-align: right;
    line-height: 42px;
    font-style: 14px;
    font-weight: bold;
    color: #000000;
  }
</style>
