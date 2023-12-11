<template>
  <div class =index>
    &nbsp;
  <div class="login">

    <br/>
    <h3>美食推荐管理系统</h3>
    <br/>
    
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="loginForm"
      style="height: 250px;"
    >
      <el-form-item label="用户名:" prop="username">
        <el-input
          type="username"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
        <el-button type="primary" style="float: 150px;" @click="submitForm('ruleForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('ruleForm')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
  <br/>
</div>
</template>

<script>
export default {
  data() {
      var  validateUsername= (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        
      };
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else{
          callback();
        }
        
      };
      
      return {
        ruleForm: {
          username: '',
          password: '',
          
        },
        rules: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
};
</script>

<style>
.index{
  background-image: url("../assets/Login/1.jpg");
  background-repeat: no-repeat;
  background-position: center top;
}
.login{
  background-color: #e3e3e3;
  width: 400px; 
  margin: 0px auto auto auto;
  margin-top: 100px;

  
  border-radius: 17px;
  box-shadow: 0px 0px 40px -10px #b0b0b0;
  .loginForm{
    padding: 40px 20px;
  }
}

.el-form-item__content{
  margin: 0;
}
</style>