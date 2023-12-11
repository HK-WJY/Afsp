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
          <div class="mainTop">
            <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
            
          </el-radio-group>
          <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane label="个人中心">
              <div style="margin: auto; width: 250px;">
                  <el-form
                    size="small"
                    :model="user"
                    status-icon
                    :rules="rules"
                    style="height: 250px;"
                    label-width	= 60px
                  
                  >

                    <el-form-item label="用户名:" prop="username" >
                      <el-input type="text" v-model="user.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码:" prop="password">
                      <el-input type="password" v-model="user.password"></el-input>
                    </el-form-item>
                    <el-form-item
                      prop="email"
                      label="邮箱"
                      
                      :rules="[
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                      ]"
                    >
                      <el-input v-model="dynamicValidateForm.email"></el-input>
                    </el-form-item>
                    <el-form-item>
                      
                    </el-form-item>
                  </el-form>
                  </div>
              </el-tab-pane>
            <el-tab-pane label="我的收藏">配置管理</el-tab-pane>
            
          </el-tabs>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateCheckPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value !== this.user.password) {
          callback(new Error('两次输入密码不一致!'));
        }  
      else {
        callback();
      }
    };
    return {
      tabPosition: 'left',
      user: {
        username: "",
        password: "",
        checkPass: "",
      },
      dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        checkPass: [{validator: validateCheckPass, trigger: "blur" }]
      },
      

    };
      
    },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.el-menu {
  float: right;
  
}
.mainTop{
  width: 800px;
  margin: 16px auto auto auto;
  
}
.el-form{
  margin: 0px 1px auto -176px;
}
</style>