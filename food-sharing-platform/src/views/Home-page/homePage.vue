<template>
  <div>
    <h4>欢迎访问美食鉴赏页面</h4>
    <div>
      <el-container>
        <el-header>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">
              <router-link to="/">首页</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/person">我 的</router-link>
            </el-menu-item>
          </el-menu>
        </el-header>
        <el-main>
          <div class="demo-caro">
            <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in fits" :key="item">
              <li>{{ item }}</li>
              <el-image
                style="width: 100px; height: 100px"
                :src="url"
                :fit="fit"
              ></el-image>
            </el-carousel-item>
          </el-carousel>
          </div>
          
          <li class="demo-image">
            
            <li>{{ fit }}</li>
              <el-image
                style="width: 100px; height: 100px"
                :src="url"
                :fit="fit"
                v-for="fit in fits" :key="fit"
              ></el-image>
            
          </li>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.demo-caro{
  padding-left: 25%;
  padding-right:25% ;
}
.el-menu {
  float: right;
  
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .demo-image{
    padding-left: 25%;
    padding-right:25% ;
    .block{
      height: 150px;
      width: 150px;
    }
  }
</style>