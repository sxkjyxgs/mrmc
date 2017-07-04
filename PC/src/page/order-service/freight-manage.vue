<template>
  <div id="box">
    <div class="box">
      <div class="location">
        <a href="#">其他服务</a>&gt;&gt;<a href="#">运费模板</a>
      </div>

      <div class="freight_">
        <!--<div class="freight_title"></div>-->
        <div class="freight_form">
          <table class="table table-bordered">
            <tr>
              <td>序号</td>
              <td>模板名称</td>
              <td>默认运费</td>
              <td>地址</td>
              <td>免邮设置</td>
              <td>操作</td>
            </tr>
            <tr>
              <td>1</td>
              <td>系统默认运费模板（不可删除）</td>
              <td>￥20.00 </td>
              <td></td>
              <td>￥1000.00免邮</td>
              <td><a href="#">修改</a></td>
            </tr>
            <tr>
              <td>2</td>
              <td>运费模板1</td>
              <td>￥20.00 </td>
              <td></td>
              <td>￥100.00<a href="#">修改</a></td>
              <td><a href="#">修改</a><a href="#">删除</a></td>
            </tr>
            <tr>
              <td>3</td>
              <td>杭州市西湖区运费模板</td>
              <td>￥10.00 </td>
              <td></td>
              <td>￥100.00<a href="#">修改</a></td>
              <td><a href="#">修改</a><a href="#">删除</a></td>
            </tr>
          </table>
        </div>

        <div class="add_freight_template">
          <div class="template_title">添加运费模板</div>
          <div class="template_name"><i>模板名称</i><input type="text" /></div>
          <div class="default_freight"><i>默认运费（元）</i><input type="text" /></div>
          <div class="add_nonDefault_btn"><a href="#">添加非默认运费地区</a></div>
          <div class="add_template_form">
            <table class="table table-bordered">
              <tr>
                <td>非默认运费地区</td>
                <td>运费</td>
              </tr>
              <tr>
                <td>厦门市、xx市（精确到市。选中省即全选所有市，但可以取消勾选单个市）</td>
                <td><input type="text" placeholder="免费金额" />元</td>
              </tr>
              <tr>
                <td>杭州市</td>
                <td><input type="text" placeholder="免费金额" />元</td>
              </tr>
            </table>
          </div>
          <div class="free_settings">
            <p>免邮设置</p>
            <div>
              <input type="radio" />不免邮
            </div>

            <input type="text" class="free_money" placeholder="免邮金额" />
            <div>
              <input type="radio" />订单满额免邮
            </div>
          </div>
          <div class="add_freight_btn">
            <div class="add_freight_cancel">取消</div>
            <div class="add_freight_confirm">确认</div>
          </div>
        </div>
      </div>
    </div>

    <div class="box2">
      <div class="add_nonDefault_area">
        <div class="add_nonDefault_area_title">添加非默认运费地区</div>
        <div class="area_choose">
          <p>非默认运费地区选择</p>
          <div class="area_list">
            <dl>
              <dt><input type="checkbox" />浙江省</dt>
              <dd><input type="checkbox" />杭州市</dd>
              <dd><input type="checkbox" />舟山市</dd>
            </dl>
            <dl>
              <dt><input type="checkbox" />辽宁省</dt>
              <dd><input type="checkbox" />葫芦岛市</dd>
              <dd><input type="checkbox" />大连市</dd>
            </dl>
          </div>
          <p>运费</p>
          <div class="free_setting"><input type="text" placeholder="免邮金额" />元</div>
        </div>
        <div class="area_choose_btn">
          <div class="area_choose_cancel">取消</div>
          <div class="area_choose_confirm">确认</div>
        </div>
      </div>
    </div>
  </div>
</template>
	<style>
		html,body{font-size: 14px;font-family: "微软雅黑";}
		i{font-style: normal;}
		.box{width: 100%;height: 100%;min-height: 600px;padding: 10px;overflow: hidden;box-sizing: border-box;}
		.location{font-size: 18px;}
		.location a{font-size: 18px;color: #303030;text-decoration: none;}
		.location a:hover{text-decoration: underline;}
		.freight_{width: 100%;min-height: 500px;border: 1px solid #303030;margin-top: 30px;overflow: hidden;position: relative;}
		.freight_form{width: 100%;padding: 0 10% 50px 10%;margin-top: 30px;}
		.table tr td{text-align: center;border-color: #303030 !important;}
		.table tr td a{margin: 0 5px;color: #303030;}
		.add_freight_template{width: 80%;margin-left:10%;margin-top: 30px;border: 1px solid #303030;margin-bottom: 100px;}
		.template_title{text-align: center;line-height: 60px;font-size: 16px;margin-top: 20px;}
		.template_name,
		.default_freight{width: 50%;margin-left: 25%;overflow: hidden;}
		.default_freight{margin-top: 30px;}
		.template_name i{display: inline-block;float: left;width: 150px;text-align: right;}
		.default_freight i{display: inline-block;float: left;width: 150px;text-align: right;}
		.template_name input{display: inline-block;width:60%;float: left;margin-left: 50px;}
		.default_freight input{display: inline-block;width:60%;float: left;margin-left: 50px;}
		.add_nonDefault_btn{margin: 30px 0;overflow: hidden;}
		.add_nonDefault_btn a{padding: 4px 10px;background: #1E9FFF;color: #FFFFFF;float: right;margin-right: 25%;border-radius: 3px;}
		.add_nonDefault_btn a:hover{background: #178FE5;text-decoration: none;}
		.add_template_form{width: 50%;margin-left: 25%;}
		.add_template_form .table tr td:nth-child(1){width: 50%;}
		.table tr td input{width: 30%;}
		.free_settings{width: 50%;margin-left: 25%;overflow: hidden;}
		.free_settings p{font-size: 16px;float: left;}
		.free_settings div:nth-child(2){float: left;margin-left: 50px;}
		.free_settings div:nth-child(4){float: right;margin-right: 50px;}
		.free_settings .free_money{float: right;}
		.add_freight_btn{width: 50%;overflow: hidden;margin: 30px 0;margin-left: 25%;}
		.add_freight_cancel,.add_freight_confirm{width: 100px;height: 30px;text-align: center;line-height: 30px;float: left;cursor: pointer;}
		.add_freight_cancel{background: #838383;float: left;margin-left: 150px;color: #FFFFFF;}
		.add_freight_confirm{background: #1E9FFF;float: right;margin-right: 150px;color: #FFFFFF;}
		.add_freight_confirm:hover{background: #178FE5;}
		.box2{width: 100%;height: 100%;position: fixed;left: 0;top: 0;background: rgba(0,0,0,0.5);display: none;}
		.add_nonDefault_area{width: 400px;height: 500px;background: #FFFFFF;position: absolute;left: 50%;top: 50%;margin-left: -200px;margin-top: -250px;}
		.add_nonDefault_area_title{font-size: 16px;line-height: 60px;margin-top: 10px;text-align: center;}
		.area_choose{width: 100%;padding: 0 10%;box-sizing: border-box;}
		.area_choose p{margin-top: 30px;}
		.area_list{overflow: hidden;}
		.area_list dl{float: left;margin-left: 10%;}
		.free_setting input{width: 100px;margin-right: 20px;}
		.area_choose_btn{width: 100%;height: 30px;overflow: hidden;margin-top: 120px;}
		.area_choose_cancel,.area_choose_confirm{width: 100px;height: 30px;text-align: center;line-height: 30px;float: left;cursor: pointer;}
		.area_choose_cancel{background: #838383;float: left;margin-left: 50px;color: #FFFFFF;}
		.area_choose_confirm{background: #1E9FFF;float: right;margin-right: 50px;color: #FFFFFF;}
		.area_choose_confirm:hover{background: #178FE5;}
	</style>



<script>
	$(function(){
		$('.add_nonDefault_btn a').click(function(){
			$('.box2').show();
		})
		$('.area_choose_cancel').click(function(){
			$('.box2').hide();
		})
	})
</script>
