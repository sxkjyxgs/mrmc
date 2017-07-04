<template>
  <div id="box">
    <div class="box">
      <div class="location">
        <a href="#">店主管理</a>&gt;&gt;<a href="#">店主申请管理</a>
      </div>

      <div class="apply_">
        <div class="apply_title">店主申请管理</div>
        <div class="apply_condition">
          <div class="apply_time">
            申请时间：时间插件
          </div>
          <div class="apply_information">
            申请信息：
            <select name="">
              <option value="">全部</option>
              <option value="">升级到个人店主</option>
              <option value="">升级到高级店主</option>
              <option value="">升级到公司店主</option>
            </select>
            <input type="text" value="根据账号查找" />
            <a href="#" class="apply_search_btn">搜索</a>
          </div>
        </div>

        <div class="apply_form">
          <table class="table table-bordered">
            <tr>
              <td>申请时间</td>
              <td>申请账号</td>
              <td>当前级别</td>
              <td>累计销售金</td>
              <td>所属团队</td>
              <td>申请信息详情</td>
              <td>操作</td>
            </tr>
            <tr>
              <td>2016/05/11 12:00:09</td>
              <td>15029292929</td>
              <td>普通用户</td>
              <td>0</td>
              <td>无</td>
              <td><a href="#">申请升级到公司店主</a></td>
              <td>
                <a href="#">通过</a>
                <a href="#">驳回</a>
              </td>
            </tr>
            <tr>
              <td>2016/05/11 12:00:02</td>
              <td>13910101010</td>
              <td>个人店主</td>
              <td>122.00</td>
              <td>高级店主团队</td>
              <td><a href="#">申请升级到公司店主</a></td>
              <td>
                <a href="#">通过</a>
                <a href="#">驳回</a>
              </td>
            </tr>
            <tr>
              <td>2016/05/11 11:00:09</td>
              <td>15029292929</td>
              <td>公司店主</td>
              <td>0</td>
              <td>高级店主团队</td>
              <td><a href="#">申请升级到公司店主</a></td>
              <td>
                <a href="#">通过</a>
                <a href="#">驳回</a>
              </td>
            </tr>
            <tr>
              <td>2016/05/11 11:00:02</td>
              <td>13910101010</td>
              <td>个人店主</td>
              <td>122.00</td>
              <td>高级店主团队</td>
              <td><a href="#">申请升级到公司店主</a></td>
              <td>
                <a href="#">通过</a>
                <a href="#">驳回</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

