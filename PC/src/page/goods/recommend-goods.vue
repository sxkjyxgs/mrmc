<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>系统推荐商品</el-breadcrumb-item>
      </el-breadcrumb>
        <div class="titlee" style="border:none;">系统推荐列表</div>
        <div class="boxx" style="width:100%;">
        <el-table
          border>
          <el-table-column
            label="排序"
            prop="date">
          </el-table-column>
          <el-table-column
            prop="name"
            label="商品">
          </el-table-column>
          <el-table-column
            prop="province"
            label="推荐模式">
          </el-table-column>
          <el-table-column
            prop="city"
            label="添加时间">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作">
            <template scope="scope">
              <el-button  type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
        <div class="boxx">
          <el-pagination
            layout="prev, pager, next"
            :total="50" class="right" style=" margin:0;">
          </el-pagination>
        </div>
      <ul class="show-img">
        <li>
          <div class="titlee">添加系统推荐-链接到商品详情</div>
          <div class="show-shop">
            <el-form label-width="150px" class="demo-ruleForm" style="width:80%;">
              <el-form-item
                label="链接商品"
                prop="goods">
                <el-input type="age" auto-complete="off" placeholder="输入商品名称查找商品"></el-input>
              </el-form-item>
              <el-form-item
                label="推荐页展示图片"
                prop="imgs">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture">
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">图片中请包含价格与标题</div>
                </el-upload>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="open2">添加</el-button>
              </el-form-item>
            </el-form>
          </div>
        </li>
        <li>
          <div class="titlee">添加系统推荐-链接到图文详情</div>
          <div class="show-shop">
            <el-form label-width="150px" class="demo-ruleForm" style="width:80%;">
              <el-form-item
                label="推荐页标题"
                prop="goods">
                <el-input type="age" auto-complete="off" placeholder="输入推荐页标题"></el-input>
              </el-form-item>
              <el-form-item
                label="推荐页展示图片"
                prop="imgs">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture">
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">图片中请包含价格与标题</div>
                </el-upload>
              </el-form-item>
              <el-form-item
                label="推荐页图文介绍"
                prop="goods">
                <el-input
                  type="textarea"
                  :rows="5"
                  placeholder="图文介绍">
                </el-input>
              </el-form-item>
              <el-form-item
                label="链接商品"
                prop="goods">
                <el-input type="age" auto-complete="off" placeholder="输入商品名称查找商品"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="open2">添加</el-button>
              </el-form-item>
            </el-form>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

</script>
<style>
  .show-img{
    border-top:1px solid #838383;
    width:100%;
    margin-top:50px;
    display: flex;

  }
  .show-img li{
    width:50%;
    float: left;
    border-right:1px solid #838383;
    border-bottom:1px solid #838383;
  }
  .show-img li:nth-child(2){
    border-right:0;
  }
  .demo-ruleForm{
    margin: 30px 0!important;
  }
</style>

<script>
  export default {
    methods: {
      open2() {
        this.$confirm('此操作将添加此商品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>

