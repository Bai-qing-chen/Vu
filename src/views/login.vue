<template>
  <div class="register">
    <el-form label-position="top" label-width="80px" class="login-from">
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button @click="dengLogin()" type="primary" id="btn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      // labelPosition: 'top',
      formdata: {
        suername: "",
        password: ""
      }
    };
  },
  /*
1. 绑定click事件
2. 发送登录请求
   1. 获取表单数据
   2. 如果登录成功,将token保存在session中并提示用户登录成功
   3. 如果登录失败,提示用户登录失败

*/
  methods:{
    /*登录功能*/ 
   dengLogin(){
      this.$http.post('login',this.formdata)
     .then(res=>{
     
       const data=res.data
      const{meta:{status,msg}}=data
         console.log(res)
        console.log(data)
        if(status===200){
          this.$router.push({
            name:'home'
          })
          this.$message({
          message: msg,
          type: 'success'
        });
        }else{
           this.$message.error(msg);
        }

     })
   }
  }
};
</script>

<style>
/* 登录按钮 */
#btn {
  width: 100%;
}
/* 页面布局*/
.register {
  background-color: #324152;
  height: 100%;
  display: flex;
  /*水品居中*/
  justify-content: center;
  /* 垂直居中 */
  align-items: center;
}
.register .login-from {
  background-color: #fff;
  height: 300px;
  width: 300px;
  padding: 35px;
  border-radius: 20px;
}
</style>
