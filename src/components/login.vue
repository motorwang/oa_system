<template>
    <div class="login">
        <!-- 头部 -->
        <header>
            <span>欢迎登录考勤管理系统</span>
        </header>
        <!-- 公司logo -->
        <div>
            <div class="logo"></div>
            <div class="login_body"></div>
        </div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="账 号：">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密 码：">
                <el-input type='password' v-model="form.pwd"></el-input>
            </el-form-item>
            <div class='btn'>
              <button class="login"><router-link :to="{ name: 'main'}">登录</router-link></button>
              <button class="reset"><a href="javascript:;">重置</a></button>
            </div>
        </el-form>
        <div class="loginbg">©2017 &nbsp;&nbsp;青牛科技</div>
    </div>  
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "wangbo",
        pwd: "123456",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },

  methods: {
    onSubmit() {
      // 账号密码校验在这里
      if (this.form.name == "wangbo" && this.form.pwd) {
        console.log(this.form.name, this.form.pwd);
      } else {
        alert("账号或密码有误....");
      }
    },
    // 重置账号,密码
    reset() {
      this.form.name = "";
      this.form.pwd = "";
    }
  }
};
</script>

<style scoped>
/* 头部 */
header {
  height: 47px;
  line-height: 47px;
  background: url("../assets/loginbg1.png") repeat-x;
  position: relative;
}
header span {
  padding-left: 40px;
  color: #afc5d2;
  font-size: 14px;
  line-height: 47px;
  background: url("../assets/loginsj.png") 15px center no-repeat;
}

/* logo */
.logo {
  width: 100%;
  height: 71px;
  line-height: 71px;
  margin-top: 70px;
  background: url("../assets/loginlogo.png") center center no-repeat;
}
.login_body {
  width: 100%;
  height: 585px;
  background: url("../assets/loginbg3.png") center center no-repeat;
}

/* 表单 */
.el-form {
  width: 400px;
  padding: 25px 10px 20px 10px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  background-color: #fff;
  box-shadow: 1px 1px 1px 1px #333;
}

/* 登录按钮 */
.btn {
  margin-bottom: 0;
  text-align: center;
}
.btn button {
  border: none;
  outline-style: none;
  padding: 0;
  width: 70px;
  height: 40px;
  background-color: #1c77ac;
  box-sizing: border-box;
  color: #fff;
  font-size: 16px;
  border-radius: 3px;
  overflow: hidden;
}
.btn a {
  width: 100%;
  height: 100%;
  line-height: 40px;
  display: block;
  text-decoration: none;
  background-color: #1c77ac;
  color: #fff;
}
.login {
  margin-right: 5px;
}
.reset {
  margin-left: 5px;
}

/* 版权 */
.loginbg {
  width: 100%;
  height: 50px;
  font-size: 14px;
  line-height: 50px;
  background: url("../assets/loginbg2.png") repeat-x;
  text-align: center;
  position: absolute;
  bottom: 0;
  color: #0b3a58;
}
</style>


