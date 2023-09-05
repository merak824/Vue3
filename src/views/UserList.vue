<template>
  <el-table :data="userData">
    <el-table-column prop="username" label="用户名" align="center"></el-table-column>
    <el-table-column prop="password" label="密码" align="center"></el-table-column>
    <el-table-column prop="name" label="性别" align="center"></el-table-column>
    <el-table-column prop="phone" label="电话" align="center"></el-table-column>
    <el-table-column prop="email" label="邮箱" align="center"></el-table-column>
    <el-table-column prop="address" label="地址" align="center"></el-table-column>
    <el-table-column prop="avatar" label="头像" align="center"></el-table-column>
    <el-table-column label="操作" align="center">
      <template #default="scope">
        <el-button type="primary" @click="editRow(scope.row)">编辑</el-button>
        <el-button type="danger" @click="editRow(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
// import axios from "axios"

export default{
    name:'user_list',
    data(){
      return{
        userData:[]
      }
    },
    mounted(){
        this.$axios.get("http://localhost:8081/user/findAll").then(res=>{
          console.log(res.data);
          this.userData = res.data.data;
        })
    }
}
</script>

<style>
.user_list{
  position: absolute;
  width: 1600px;
  height: 760px;
  border-bottom-right-radius:10px;
}
</style>