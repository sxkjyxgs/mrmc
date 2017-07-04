<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>客服电话</title>
	<link rel="stylesheet" href="../../css/phone.css" />
</head>
<body>
	<div class="box">
		<div class="location">
			<a href="#">客服电话</a>&gt;&gt;<a href="#">客服电话</a>
		</div>
		<div class="phone">
			<div class="phone_title">客服电话</div>
			<div class="current_phone">
				<p>当前客服电话：<i class="current_phonenumber">18858594797</i><span class="go_change">修改</span></p>
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
</body>
<script src="../../assets/plugins/jquery/jquery.min.js"></script>
<script>
	$(function(){
		$('.go_change').click(function(){
			$('.change_phone').show();
		})
		$('.canceling').click(function(){
			$('.change_phone').hide();
		})
	})
</script>
</html>