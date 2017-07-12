<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">客服电话</el-breadcrumb-item>
        <el-breadcrumb-item>客服电话</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="phone">
        <div class="phone_title">客服电话</div>
        <div class="current_phone">
          <p>当前客服电话：<i class="current_phonenumber">18858594797</i><el-button type="danger">修改</el-button></p>
        </div>
        <div class="change_phone">
          <div class="change_ipt">
            当前电话修改：
            <input type="text" placeholder="手机号或座机号" />
          </div>
          <div class="change_btns">
            <i class="canceling">取消</i>
            <i class="changeing">修改</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .phone{
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin-top: 20px;
    position: relative;
  }

  .current_phone{
    margin-top: 30px;
  }

  .current_phone button{
    margin-left: 30px;
  }

  .change_phone{
    width: 450px;
    height: 150px;
    border: 1px solid #303030;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -225px;
    margin-top: -75px;
    display: none;
  }

  .change_ipt{
    position: relative;
    top: 40%;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .change_ipt input{
    width: 280px;
    float: right;
    height: 20px;
    font-size: 16px;
  }

  .change_btns{
    position: relative;
    top: 55%;
    width: 100%;
    padding: 0 100px;
    box-sizing: border-box;
  }

  .change_btns i{
    padding: 4px 15px;
    color: #FFFFFF;
    background: #303030;
  }

  .change_btns .canceling{
    float: left;
    cursor: pointer;
  }

  .change_btns .changeing{
    float: right;
    cursor: pointer;
  }
</style>
