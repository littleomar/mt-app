<template>
    <div class="login">
      <header class="header">
        <a href="/" class="logo"></a>
      </header>
      <div class="login-wrapper">
        <div class="img-wrapper"><img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt=""></div>
        <div class="login-container">
          <form action="#" method="post" @submit="verifyLogin">
            <div class="validate-info" v-show="this.errorLogin.code === 1"><i class="error-icon"></i>{{this.errorLogin.message}}</div>
            <p class="dynamic-code">
              <span class="text">账号登录</span>
              <span class="code"><a href="">邮箱动态码登录<i class="email"></i></a></span>
            </p>
            <label>
              <i class="iconfont icon-yonghu"></i>
              <input type="text" placeholder="用户名/邮箱" class="username" name="username" v-model="username" v-validate="'required'">
            </label>
            <label>
              <i class="iconfont icon-mima"></i>
              <input type="password" placeholder="密码" class="password" name="password" v-model="password" v-validate="'required'">
            </label>
            <p class="forget"><a href="#">忘记密码?</a></p>
            <button type="submit" class="submit">登录</button>
            <p class="register">还没有账号？<a href="/register">免费注册</a></p>
          </form>
        </div>
      </div>
      <footer class="footer">
        <div class="site-info">
          <ul class="link-wrapper">
            <li class="link first"><a href="#">关于美团</a></li>
            <li class="link"><a href="#">加入我们</a></li>
            <li class="link"><a href="#">商家入驻</a></li>
            <li class="link"><a href="#">帮助中心</a></li>
            <li class="link last"><a href="#">美团手机版</a></li>
          </ul>
        </div>
        <div class="site-copyright">
          <p>
            <span>©2019</span>
            <a href="#">美团网团购</a>
            <span>meituan.com</span>
            <a href="#">京ICP证070791号</a>
            <span>京公网安备11010502025545号</span>
          </p>
        </div>
      </footer>
    </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "login",
    layout: 'blank',
    data() {
      return {
        username: '',
        password: '',
        errorLogin: {
          code: 0,
          message: ''
        }
      }
    },
    methods: {
      async verifyLogin(e) {
        e.preventDefault();
        let res = await this.$validator.validateAll();
        if (!res) {
          this.errorLogin.code = 1;
          this.errorLogin.message = this.errors.all()[0];
        } else {
          let verRes = axios.post('/user/login',{
            username: this.username,
            password: this.password
          });
          if (verRes.data.code === 1) {
            this.errorLogin.code = 1;
            this.errorLogin.message = '用户名或密码错误';
          }
          window.location.href = '/'
        }

      }
    },
    created() {
      const directory = {
        custom: {
          username: {
            required: '用户名不能为空'
          },
          password: {
            required: '密码不能为空'
          }
        }
      };
      this.$validator.localize('zhCN',directory);
    }
  }
</script>

<style lang="scss" scoped>
.login{
  .header{
    width: 980px;
    height: 54px;
    margin: 40px auto 30px;
    background-color: #fff;
    .logo{
      display: block;
      width: 82px;
      height: 54px;
      margin: 0;
      background-position: -188px -808px;
      background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
    }
  }
  .login-wrapper{
    width: 980px;
    margin:0 auto 70px;
    display: flex;
    justify-content: space-between;
    .img-wrapper{
      img{
        width: 480px;
        height: 370px;
      }
    }
    .login-container{
      margin-right: 115px;
      width: 270px;
      .validate-info{
        width: 270px;
        height: 40px;
        box-sizing: border-box;
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #f5d8a7;
        border-radius: 2px;
        background: #fff6db;
        font-size: 12px;
        color: #666;
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
      .dynamic-code{
        display: flex;
        justify-content: space-between;
        .text{
          color: #666;
          display: inline-block;
          font: 400 14px/1.5 'Hiragino Sans GB','WenQuanYi Micro Hei',tahoma,sans-serif;
        }
        .code{
          display: inline-block;
          line-height: 21px;
          a{
            color: #666;
            padding-right: 16px;
            position: relative;
            .email{
              display: block;
              position: absolute;
              right: 0;
              top: 3px;
              width: 14px;
              height: 14px;
              background-image: url(//s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
              background-position: -946px -677px;
            }
          }
        }
      }
      label{
        display: block;
        width: 270px;
        height: 52px;
        padding: 8px 0;
        position: relative;
        i{
          position: absolute;
          color: #666;
          &.icon-yonghu{
            font-size: 18px;
            left: 6px;
            top: 15px;
            font-weight: 600;
            opacity: .5;
          }
          &.icon-mima{
            font-size: 22px;
            left: 4px;
            top: 14px;
            font-weight: 600;
            opacity: .5;
          }
        }
        input{
          width: 270px;
          height: 36px;
          box-sizing: border-box;
          padding: 5px;
          padding-left: 33px;
          border: 1px solid #aaa;
          line-height: 24px;
        }
      }
      .forget{
        text-align: right;
        height: 26px;
        padding-bottom: 8px;
        a{
          color: #2bb8aa;
        }
      }
      .submit{
        display: block;
        width: 100%;
        height: 35px;
        margin: 8px 0;
        background-image: linear-gradient(to bottom,#2ec3b4,#2db3a6);
        border: none;

        color: #fff;
        vertical-align: middle;
        font-size: 14px;
        font-weight: 700;
        -webkit-font-smoothing: antialiased;
        line-height: 1.5;
        letter-spacing: .1em;
        text-align: center;
        text-decoration: none;
        border-width: 0 0 1px;
        border-radius: 2px;
        cursor: pointer;
      }
      .register{
        font: 400 14px/1.5 'Hiragino Sans GB','WenQuanYi Micro Hei',tahoma,sans-serif;
        a{
          color: #2bb8aa;
        }
      }
    }
  }
  .footer{
    width: 980px;
    height: 88px;
    margin: 0 auto 30px;
    .site-info{
      width: 100%;
      height: 50px;
      border-top: 1px solid #EEE;
      border-bottom: 1px solid #EEE;
      padding: 12px 0;
      margin-bottom: 20px;
      .link-wrapper{
        display: flex;
        list-style: none;
        padding: 0;
        .link{
          margin: 5px 0;
          padding: 0 16px;
          border-right: 1px solid #eee;
          font-size: 12px;
          &.first{
            padding-left: 0;
          }
          &.last{
            padding-right: 0;
            border-right: none;
          }
        }
      }
    }
    .site-copyright{
      p{

      }
    }
  }
}
</style>
