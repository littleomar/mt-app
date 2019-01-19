<template>
    <div class="register">
      <header class="header-wrapper">
        <div class="header">
          <div class="logo"><a href="/"></a></div>
          <div class="login"><span class="text">已有美团账号？</span><a href="/login" class="login-link">登录</a></div>
        </div>
      </header>
      <div class="form-wrapper">
        <form action="#" method="post" @submit="submitForm">
          <div class="input-wrapper">
            <div class="name">用户名</div>
            <div class="input" :class="{error:errors.has('username')}">
              <label>
                <input type="text" name="username" v-validate="'required'" v-model="username" @blur="verifyUser" @focus="clearVer">
              </label>
            </div>
            <div class="tips">
              <span class="success" v-if="this.username&&!errors.has('username')&&(this.userError.code===0)"><i class="success-icon"></i></span>
              <span class="error" v-if="errors.has('username')||(this.userError.code===1)"><i class="error-icon"></i>{{errors.first('username')}}{{this.userError.message}}</span>
            </div>
          </div>
          <div class="input-wrapper">
            <div class="name">邮箱</div>
            <div class="input" :class="{error:errors.first('email')}">
              <label>
                <input type="email" name="email" v-validate="'required|email'" v-model="email" @focus="clearCheckEmail" @blur="checkEmail">
              </label>
            </div>
            <div class="tips">
              <span class="success" v-if="this.emailError.code === 0&&!errors.has('email')"><i class="success-icon"></i></span>
              <span class="error" v-if="errors.has('email')||this.emailError.code === 1"><i class="error-icon"></i>{{errors.first('email')}}{{this.emailError.message}}</span>
            </div>
          </div>
          <input type="button" class="send-email" :class="{next:this.sendEmailMsg.state}" @click="sendEmail" :value="this.sendEmailMsg.text" />
          <div class="input-wrapper">
            <div class="name">邮箱动态码</div>
            <div class="input">
              <label>
                <input type="text" AUTOCOMPLETE="off" name="verify" v-model="verify" @focus="clearCheckCode" @blur="checkCode">
              </label>
            </div>
            <div class="tips">
              <span class="success" v-if="this.codeError.code === 0"><i class="success-icon"></i></span>
              <span class="error" v-if="this.codeError.code === 1"><i class="error-icon"></i>{{this.codeError.message}}</span>
            </div>
          </div>
          <div class="input-wrapper">
            <div class="name">创建密码</div>
            <div class="input"  :class="{error:errors.first('password')}">
              <label>
                <input type="password" name="password" v-validate="'required|pass'" v-model="password">
              </label>
            </div>
            <div class="tips">
              <span class="success" v-if="this.password&&!errors.has('password')"><i class="success-icon"></i></span>
              <span class="error" v-if="errors.has('password')"><i class="error-icon"></i>{{errors.first('password')}}</span>
            </div>
          </div>
          <div class="input-wrapper">
            <div class="name">确认密码</div>
            <div class="input"  :class="{error:errors.first('passwordVerify')}">
              <label>
                <input type="password" name="passwordVerify" v-validate="'passVer|pass'" v-model="passwordVerify">
              </label>
            </div>
            <div class="tips">
              <span class="success" v-if="this.passwordVerify&&!errors.has('passwordVerify')"><i class="success-icon"></i></span>
              <span class="error" v-if="errors.has('passwordVerify')"><i class="error-icon"></i>{{errors.first('passwordVerify')}}</span>
            </div>
          </div>
          <button class="submit">同意以下协议并注册</button>
          <div class="tern"><a href="#">《美团网用户协议》</a></div>
        </form>
      </div>
      <footer class="footer">
        <p>
          <span>©</span><a href="#">meituan.com</a>
          <a href="#">京ICP证070791号</a>
          <span>京公网安备11010502025545号</span>
        </p>
      </footer>
    </div>
</template>

<script>
  import axios from "axios";


  export default {
    name: "register",
    layout: 'blank',
    methods: {
      async sendEmail() {
        let _self = this;
        let emailVer = await this.$validator.validate('email');
        if (!(emailVer && this.emailError.code === 0)) return false;
        if (this.sendEmailMsg.state) {
          return false;
        } else {
          this.sendEmailMsg.state = true;
          this.sendEmailMsg.text = `再次获取(60s)`;
          let time = 60;

          await axios.post('/user/code',{email:this.email});

          let timer = setInterval(()=>{
            time--;
            if (time === 0) {
              _self.sendEmailMsg.state = false;
              _self.sendEmailMsg.text = '免费获取短信动态码';
              clearInterval(timer)
            }else {
              this.sendEmailMsg.text = `再次获取(${time}s)`
            }
          },1000)
        }
      },
      async verifyUser() {
        let userVer = await this.$validator.validate('username');
        if (userVer) {
          let userRes = await axios.get(`/user/verify?username=${this.username}`);
          this.userError = userRes.data;
        }
      },
      clearVer() {
        this.userError = {message: ''}
      },
      async checkEmail() {
        let emailVer = await this.$validator.validate('email');
        if (emailVer) {
          const emailRes = await axios.get(`/user/verify?email=${this.email}`);
          this.emailError = emailRes.data;
        }
      },
      clearCheckEmail() {
        this.emailError = {message: ''}
      },
      async checkCode() {
        let reqData = {
          email: this.email,
          code: this.verify
        };
        let codeRes = await axios.post(`/user/verify/code`,reqData);
        this.codeError = codeRes.data;
      },
      clearCheckCode() {
        this.codeError = {message: ''}
      },
      async submitForm(e) {
        e.preventDefault();
        let checkFormRes = await this.$validator.validateAll();
        if (checkFormRes&&this.verify&&this.passwordVerify) {
          let registerRes = await axios.post('/user/register',{
            username: this.username,
            code: this.verify,
            password: this.password,
            email: this.email
          });

          if (registerRes.data.code === 0) {
            window.location.href = '/login';
          }
        } else {
          return false;
        }

      }
    },
    data() {
      return {
        username: '',
        email: '',
        verify: '',
        password: '',
        passwordVerify: '',
        userError: {message:''},
        emailError: {message: ''},
        codeError: {message: ''},
        userInfo: {},
        sendEmailMsg: {
          state: false,
          text: '免费获取短信动态码'
        }
      }
    },
    created() {
      this.$validator.extend('pass',{
        validate: value => /^[\w_-]{6,16}$/.test(value)
      })
      this.$validator.extend('passVer',{
        validate: value => value === this.password
      })
      const directory = {
        custom: {
          username: {
            required: '用户名不能为空'
          },
          email: {
            required: '邮箱不能为空',
            email: '邮箱格式不正确'
          },
          password: {
            required: '密码不能为空',
            pass: `密码为6-16位,且只能包含数字，大小写字母，'_'或者'-'`
          },
          passwordVerify: {
            passVer: '两次密码输入不一致，请重新输入',
            pass: '密码格式错误'
          }
        }
      };
      this.$validator.localize('zhCN',directory);
    }

  }
</script>

<style lang="scss" scoped>
.register{
  .header-wrapper{
    width: 100%;
    height: 61px;
    border-bottom: 2px solid #2bb8aa;
    .header{
      width: 980px;
      margin: 0 auto;
      padding: 10px 0;
      height: 49px;
      display: flex;
      justify-content: space-between;
      .logo{
        a{
          display: block;
          width: 54px;
          height: 36px;
          background-position: -669px -748px;
          background-image: url(https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
        }
      }
      .login{
        vertical-align: bottom;
        .text{
          /*line-height: 36px;*/
          font-size: 14px;
          color: #666;
          margin-right: 10px;
          vertical-align: bottom;
        }
        .login-link{
          display: inline-block;
          padding: 3px 10px;
          font-weight: 400;
          font-size: 14px;
          text-decoration: none;
          background-color: #2db3a6;
          background-size: 100%;
          background-image: linear-gradient(to bottom,#2ec3b4,#2db3a6);
          color: #fff;
          border-bottom: 1px solid #008177;
          &:hover{
            background-color: #2eb7aa;
            background-image: linear-gradient(to bottom,#2bb8aa,#2eb7aa);
          }
        }
      }
    }
  }
  .form-wrapper{
    width: 980px;
    margin: 0 auto 30px;
    padding-top: 30px;
    .send-email{
      display: inline-block;
      text-decoration: none;
      margin-left: 220px;
      padding: 1px 8px 0;
      font-size: 12px;
      color: #333;
      background-color: #dedede;
      border: 1px solid #e3e3e3;
      border-bottom: 1px solid #aaa;
      background-size: 100%;
      background-image: linear-gradient(to bottom,#f7f7f7,#dedede);
      &:hover{
        background-color: #e9e9e9;
        border: 1px solid #e5e5e5;
        border-bottom: 1px solid #b3b3b3;
        background-image: linear-gradient(to bottom,#fff,#e9e9e9);
      }
      &.next{
        cursor: not-allowed;
        color: #bbb;
        border: 1px solid #eee;
        background-color: #eee;
        background-image: linear-gradient(to bottom,#eee,#eee);
      }
    }
    .submit{
      display: block;
      margin:8px 0 8px 220px;
      padding: 7px 20px 6px;
      border: none;
      font-size: 14px;
      font-weight: 700;
      color: #fff;
      background-color: #2db3a6;
      background-size: 100%;
      background-image: linear-gradient(to bottom,#2ec3b4,#2db3a6);
      border-bottom: 1px solid  #008177;
      cursor: pointer;
      &:hover{
        background-color: #2eb7aa;
        background-image: linear-gradient(to bottom,#2bb8aa,#2eb7aa);
      }
    }
    .tern{
      margin-left: 220px;
      padding: 3px 0;
      margin-bottom: 8px;
      a{
        color: #2bb8aa
      }
    }
    .input-wrapper{
      display: flex;
      padding: 8px 0 8px 110px;
      .name{
        width: 100px;
        text-align: right;
        line-height: 36px;
        font-size: 14px;
        color: #333;
      }
      .input{
        margin-left: 10px;
        input{
          display: block;
          width: 260px;
          height: 36px;
          box-sizing: border-box;
          border: 1px solid #aaa;
          padding: 5px;
          line-height: 24px;
          font-size: 14px;
          &:focus{
            border-color: #2bb8aa;
          }
        }
        &.error{
          input{
            border-color: #f76120;
            &:focus{
              border-color: #f76120;
            }
          }
        }
      }
      .tips{
        margin-left: 8px;
        padding: 6px 0;
        height: 36px;
        .success{
          line-height: 24px;
          color: #999;
          font-size: 12px;
          .success-icon{
            display: inline-block;
            width: 17px;
            height: 17px;
            margin-right: 5px;
            background-image: url(https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/icons.c1b3784.png);
            background-repeat: no-repeat;
            background-position: 0 -453px;
            vertical-align: -3px;
          }
        }
        .error{
          display: inline-block;
          height: 24px;
          line-height: 24px;
          .error-icon{
            display: inline-block;
            width: 17px;
            height: 17px;
            margin-right: 5px;
            background-image: url(https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/icons.c1b3784.png);
            background-repeat: no-repeat;
            background-position: 0 -296px;
            vertical-align: -3px;
          }
        }
      }
    }
  }
  .footer{
    width: 100%;
    padding-top: 20px;
    border-top: 1px solid #EEE;
    p{
      font-size: 13px;
      text-align: center;
    }
  }
}
</style>
