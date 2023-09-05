<template>
  <div >
    <div class="header">
    <h5>头部</h5>
    </div>
    <el-col class="aside">
      <h4 class="mb-2">后台管理系统</h4>
      <el-menu class="menu" active-text-color="#ffd04b" background-color="#545c64" default-active="2" text-color="#fff">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><User /></el-icon>
            <span>用户信息</span>
          </template>
          <el-menu-item-group title="用户操作">
            <el-menu-item index="1-1" @click="user_list">用户列表</el-menu-item>
            <el-menu-item index="1-2" @click="user_create">新增用户</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Notebook /></el-icon>
            <span>文章信息</span>
          </template>
          <el-menu-item-group title="文章操作">
            <el-menu-item index="2-1" @click="article_list">文章列表</el-menu-item>
            <el-menu-item index="2-2" @click="article_create">新增文章</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><Message /></el-icon>
            <span>留言板</span>
          </template>
          <el-menu-item-group title="留言板操作">
            <el-menu-item index="3-1">留言板列表</el-menu-item>
            <el-menu-item index="3-2">新增留言板</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><Link /></el-icon>
            <span>4</span>
          </template>
          <el-menu-item-group title="操作4">
            <el-menu-item index="4-1">4-1</el-menu-item>
            <el-menu-item index="4-2">4-2</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="5">
          <el-icon><setting /></el-icon>
          <span>设置</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods:{
    article_list(){
      this.$router.push({path:'/article_list'})
    },
    article_create(){
      this.$router.push({path:'/article_create'})
    },
    user_list(){
      this.$router.push({path:'/user_list'})
    },
    user_create(){
      this.$router.push({path:'/user_create'})
    }
  }
}
</script>

<style>
.header{
  background-color: aqua;
  height: 100px;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
}
.aside{
  background-color: #545c64;
  position: absolute;
  height: 760px;
  width: 200px;
  border-bottom-left-radius:10px;
}
.content{
  position: absolute;
  top: 140px;
  left: 250px;
  width: 1600px;
  height: 760px;
  border-bottom-right-radius:10px;
}
.menu{
  width: 201px;
}
</style>
