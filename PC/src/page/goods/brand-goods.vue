<template>
  <div id="box">

  </div>
</template>
	<div class="box">
		<div class="location">
			<a href="#">业务管理</a>&gt;&gt;<a href="#">商品品牌</a>
		</div>

		<div class="brand_">
			<div class="brand_title">
				商品品牌列表
			</div>
			<div class="add_brand_btn">
				添加商品品牌
			</div>
			<div class="brand_form">
				<table class="table table-bordered">
					<tr>
						<td>品牌logo</td>
						<td>品牌名称</td>
						<td>品牌介绍</td>
						<td>操作</td>
					</tr>
					<tr>
						<td><img src="../../img/1.gif"/></td>
						<td>太平鸟</td>
						<td>啦啦啦哇哇哇</td>
						<td class="brand_operate_btn">
							<a href="#">上移</a>
							<a href="#">下移</a>
							<a href="#">置顶</a>
							<a href="#">置底</a>
							<a href="#">修改</a>
							<a href="#">删除</a>
						</td>
					</tr>
					<tr>
						<td><img src="../../img/2.gif"/></td>
						<td>key社</td>
						<td>欧文kin</td>
						<td class="brand_operate_btn">
							<a href="#">上移</a>
							<a href="#">下移</a>
							<a href="#">置顶</a>
							<a href="#">置底</a>
							<a href="#">修改</a>
							<a href="#">删除</a>
						</td>
					</tr>
					<tr>
						<td><img src="../../img/1.gif"/></td>
						<td>太平鸟</td>
						<td>啦啦啦哇哇哇</td>
						<td class="brand_operate_btn">
							<a href="#">上移</a>
							<a href="#">下移</a>
							<a href="#">置顶</a>
							<a href="#">置底</a>
							<a href="#">修改</a>
							<a href="#"> 删除</a>
						</td>
					</tr>
					<tr>
						<td><img src="../../img/2.gif"/></td>
						<td>key社</td>
						<td>欧文kin</td>
						<td class="brand_operate_btn">
							<a href="#">上移</a>
							<a href="#">下移</a>
							<a href="#">置顶</a>
							<a href="#">置底</a>
							<a href="#">修改</a>
							<a href="#"> 删除</a>
						</td>
					</tr>
				</table>
			</div>
		</div>
	</div>

	<div class="box2">
		<div class="add_brand_goods">
			<div class="add_brand_goods_title">
				添加商品品牌
			</div>
			<div class="brand_logo">
				<div class="brand_logo_title">品牌logo</div>
				<img src="../../img/1.gif"/>
			</div>
			<div class="brand_name">
				<div class="brand_name_title">品牌名称</div>
				<input type="text" />
			</div>
			<div class="brand_introduce">
				<div class="brand_introduce_title">品牌介绍</div>
				<textarea name="" rows="" cols=""></textarea>
			</div>
			<div class="add_brand_goods_btn">
				<div class="add_brand_goods_cancel">取消</div>
				<div class="add_brand_goods_confirm">确认</div>
			</div>
		</div>
	</div>

<script>
	$(function(){
		$('.add_brand_btn').click(function(){
			$('.box2').show();
		})
		$('.add_brand_goods_cancel').click(function(){
			$('.box2').hide();
		})
	})
</script>
