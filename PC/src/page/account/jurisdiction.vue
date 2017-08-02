<template>
  <div id="box">
    <div class="box">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>后台账号管理</el-breadcrumb-item>
        <el-breadcrumb-item>账号角色与权限管理</el-breadcrumb-item>
      </el-breadcrumb>


      <div class="distribution">
        <div class="distribution_title">
          分配角色权限
        </div>
        <div class="distribution_form">
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="role"
              label="角色"
              :span="2"
            >
            </el-table-column>
            <el-table-column
              prop="menuName"
              label="角色现有权限"
              :span="6"
            >
            </el-table-column>
            <el-table-column
              :span="4"
              label="操作"
            >
              <template scope="scope">
                <el-button type="text" size="small" @click="DisplayBlock2">权限分配</el-button>
                <el-button type="text" size="small" @click="open3(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div class="block">
          <el-pagination
            layout="prev, pager, next"
            :total="SumPage"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </div>

      <div class="add_account">
        <div class="add_title">添加账号角色</div>
        <div class="add_name">
          <el-input  placeholder="填写角色名称"></el-input>
        </div>
        <div class="add_distribution">
          <i class="permission_url" @click="DisplayBlock">权限分配</i>
        </div>
        <el-button type="primary" @click="open2">确认添加</el-button>
      </div>
    </div>
    <div class="mask"></div>
    <div class="assign_role_permissions popup">
      <div class="assign_role_permissions_title popup_title">分配角色权限</div>
      <div class="checkbox_box">
        <div class="assign_checkbox">
          <ul  >
            <li v-for="item in jurData">
               <span v-text="item.name"></span>
            </li>
            <li v-text="jurData"></li>
          </ul>
        </div>
      </div>

      <div class="popup_btn">
        <el-button @click="DisplayNone">取消</el-button>
        <el-button type="primary">确定</el-button>
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
    data() {
      return {
        tableData:[],
        jurData:[],
        TableDataUrl:this.GLOBAL.baseUrl+'role/findAuthorityByRoleList',
        JurListUrl:this.GLOBAL.baseUrl+'authority/findAuthorityList',
        DelectList:this.GLOBAL.baseUrl+'role/removeRoleByIdL',
        currentChange:1,
        SumPage:'',

      }
    },
    created: function(){
      this.getJurisdiction()
      this.getTable()//定义方法

    },
    methods: {
      //获取列表信息
      getTable:function(){
        var tableList=[];
        var sumPage;
        $.ajax({
          type:'POST',
          data:{'common':this.GLOBAL.common,'size':10,'nowpage':this.currentChange},
          async:false,
          url:this.TableDataUrl,
          success:function (data) {
            if(data.result){
                tableList=data.data.list;
                sumPage=data.data.count;
            }
          }
        })
        this.tableData=tableList;
        this.SumPage=sumPage;
      },
      //分页
      handleCurrentChange(val) {
        this.currentChange=val;
        this.getTable()
      },
      //获取权限列表
      getJurisdiction:function(){
        var list=[];
        $.ajax({
            type:'POST',
            data:{'common':this.GLOBAL.common},
            url:this.JurListUrl,
            async:false,
            success:function (data) {
                if(data.result){
                  list=data.data.authorityList;
                  var parentList=[];
                  var ChildList=[];
                  //寻找子元素
                  for(var i=0;i<list.length;i++){
                    for(var j=0;j<list.length;j++){
                      if(list[j].parentId==list[i].id){
                        ChildList.push(list[j]);
                      }
                    }
                  }
                  //寻找父元素--删除子元素就是父元素啦
                  for(var i=0;i<ChildList.length;i++){
                    for(var j=0;j<list.length;j++)
                    {
                      if(list[j].id==ChildList[i].id){
                        list.splice(j,1);
                        j=j-1;
                      }
                    }
                  }
                  parentList=list;
                  //把子元素push到父元素
                  for(var i=0;i<parentList.length;i++){
                    parentList[i].data=[];
                    for(var j=0;j<ChildList.length;j++){
                      if(ChildList[j].parentId==parentList[i].id){
                        parentList[i].data.push(ChildList[j])
                      }
                    }
                  }
                  this.jurData=parentList;
                  console.log(this.jurData);
                }else{
                    swal({title:'',text:data.msg})
                }

            }
        })
      },
      open2(){
        this.$confirm('此操作将添加账号角色, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '添加成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消添加'
          });
        });
      },
      //删除
      open3(row) {
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var that=this;
          $.ajax({
            type:'GET',
            data:{'common':this.GLOBAL.common,'id':row.id},
            url:this.DelectList,
            success:function (data) {
              if(data.result){
                that.$message({
                  type: 'success',
                  message: '删除成功!'
                });
              }else{
                that.$message({
                  type: 'info',
                  message: '删除失败!'
                });
              }
            }
          })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      DisplayBlock:function(){
        $('.mask').css('display','block');
        $('.assign_role_permissions').css('display','block');
      },

      DisplayNone:function(){
        $('.mask').css('display','none');
        $('.assign_role_permissions').css('display','none');
      },
      DisplayBlock2:function(){
        $('.mask').css('display','block');
        $('.assign_role_permissions').css('display','block');
      },

      DisplayNone2:function(){
        $('.mask').css('display','none');
        $('.assign_role_permissions').css('display','none');
      },



    }


  }
</script>
<style>
  #box{
    position: relative;
  }
  .add_account{
    width: 100%;
    height: 200px;
    text-align: center;
    border-top: 1px solid #c4c4c4;
  }
  .add_title,.add_name,.add_distribution{
    width: 100%;
    padding: 0 40%;
    box-sizing: border-box;
  }
  .add_title{
    text-align: center;
    line-height: 60px;
    font-size: 16px;
    margin-top: 20px;
  }
  .add_name{
    width: 100%;
    height: 36px;
    overflow: hidden;
  }
  .add_name input{
    width: 100%;
    height: 30px;
    font-size: 14px;
  }
  .add_distribution{
    text-align: left;
    line-height: 48px;
    font-size: 14px;
  }
  .add_distribution i{
    text-decoration: none;
    cursor: pointer;
    color: #20a0ff;
  }
  .el-button{
    margin: auto;
  }
  .distribution{
    width: 100%;
    height: auto;
    padding-bottom: 50px;
    overflow: hidden;
    margin-top: 50px;
  }
  .distribution_title{
    text-align: center;
    font-size: 18px;
    line-height: 60px;
    margin-top: 20px;
  }
  .distribution_form{
    width: 80%;
    margin: 0 10%;
  }
  .distribution_form table tr td{
    text-align: center;
  }
  .distribution_form table tr th{
    text-align: center;
  }
  .table tr td{
    text-align: center;
    border-color: #303030 !important;
  }
  .operation a{
    color: #303030;
  }
  .operation a:hover{
    text-decoration: underline;
    color: #303030;
  }
  .operation a:first-child{
    margin-right: 5px;
  }
  .el-pagination {
    float: right;
    margin: 50px 10% 0 0;
  }
  .assign_checkbox li{
    width:100%;
    height:30px;
    background: pink;
  }
  .mask{
    width:100%;
    height:100%;
    position: fixed;
    top:0;
    left:0;
    background: rgba(0,0,0,0.5);
    z-index: 9;
    display: none;
  }
  .popup{
    width: 600px;
    max-height: 400px;
    overflow-y: scroll;
    padding: 30px;
    background: #FFFFFF;
    position: fixed;
    top: 100px;
    left: 50%;
    margin-left: -330px;
    z-index: 999;
    text-align: center;
    display: none;
  }
  .popup_title{
    font-size: 16px;
    color: #303030;
    text-align: center;
    line-height: 32px;
  }
  .popup_btn{
    margin: 0 auto;
    margin-top: 20px;
  }
  .checkbox_box{
    overflow: hidden;
  }
  .assign_checkbox{
    width: 50%;
    float: left;
    height:auto;
  }
</style>
