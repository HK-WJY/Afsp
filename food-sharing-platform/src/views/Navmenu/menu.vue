<template>
  <div>
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          
        >
        <div class="ziTi">
          <el-menu-item index="1">
            <router-link to="/" >首页</router-link>
          </el-menu-item>
          <el-menu-item index="1">
            <router-link to="/person">我的</router-link>
          </el-menu-item>
        </div>
          
        </el-menu>
      </el-header>
      <el-main>
        <el-container>
          <el-aside width="200px">
            aside
          </el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>