<template>
  <div class="userManage">
    <div class="box">
      <div class="broad">其他服务>>运费模板</div>
      <div class="contents">
        <div class="item1">
          <div class="right"><el-button type="success" icon="icon-plus">添加运费模板</el-button></div>
        </div>
        <div class="item2">
          <el-table :data="tableData"  border style="width: 100%">
            <el-table-column prop="username" label="序号"  width="180" align="center" header-align="center"></el-table-column>
            <el-table-column prop="restime" label="模板名称" align="center" width="180" header-align="center"></el-table-column>
            <el-table-column prop="logintime" label="默认运费"  align="center"  width="180" header-align="center"></el-table-column>
            <el-table-column prop="UserType" label="地址"  align="center" width="180" header-align="center"></el-table-column>
            <el-table-column prop="number" label="免邮设置"  align="center" width="180"  header-align="center"></el-table-column>
            <el-table-column label="操作" align="center" width="180"  header-align="center"></el-table-column>
          </el-table>
        </div>
      </div>
      <div class="content">
        <div class="titles">
          添加普通用户
        </div>
        <div class="form">
          <el-form  label-width="100px" class="demo-ruleForm">
            <el-form-item label="模板名称" prop="resname">
              <el-input  placeholder="未注册的手机号"></el-input>
            </el-form-item>
            <el-form-item label="默认运费（元）" prop="pass">
              <el-input  type="number" placeholder="输入数字（仅限数字）"></el-input>
            </el-form-item>
            <el-from-item>
              <el-button type="success" icon="icon-plus">添加费默认运费地区</el-button>
            </el-from-item>
            <el-from-item>
              <el-table :data="tableData"  border style="width: 100%">
                <el-table-column prop="username" label="非默认模板地区"  width="180" align="center" header-align="center"></el-table-column>
                <el-table-column prop="restime" label="运费" align="center" width="180" header-align="center"></el-table-column>
              </el-table>
            </el-from-item>
            <el-from-item>
               <div class="left">免邮设置<el-radio class="radio" v-model="radio" label="1">不免邮</el-radio></div>
               <div class="right"><el-radio class="radio" v-model="radio" label="2">订单满额免邮</el-radio><el-input  placeholder="免邮金额"></el-input></div>
            </el-from-item>
            <el-form-item>
              <el-button>取消</el-button>
              <el-button type="primary" class="right" style="margin-right: 50px;">添加</el-button>
            </el-form-item>
          </el-form>
        </div>



      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import Element from 'element-ui'
  import 'element-ui/lib/theme-default/index.css'

  Vue.use(Element)
  export default {
    name: 'userManage',
    data() {
      return {
        tableData: [{
          username:'1',
          restime:'2016-05-20  20:50',
          logintime:'2016-05-20  20:50',
          UserType:'普通用户',
          number:'123'
        },
          {
            username:'2',
            restime:'2016-05-20  20:50',
            logintime:'2016-05-20  20:50',
            UserType:'个人店主',
            number:'123'
          },
          {
            username:'3',
            restime:'2016-05-20  20:50',
            logintime:'2016-05-20  20:50',
            UserType:'普通用户',
            number:'123'
          },
          {
            username:'4',
            restime:'2016-05-20  20:50',
            logintime:'2016-05-20  20:50',
            UserType:'普通用户',
            number:'123'
          }
        ]
      }
    }
  }

</script>
<style>
  .contents{
    border:1px solid #ccc;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
  .item2{
    padding:20px;
    box-sizing: border-box;
  }
  .broad{
    margin-bottom:30px;
  }
  .item1{
    padding:20px;
  }
  .dange{
    padding:20px 20px 0 20px;
  }
</style>
