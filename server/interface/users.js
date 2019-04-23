// import Router from 'koa-router'
// import Redis from 'koa-redis'
// import nodeMailer from 'nodemailer'
// import User from '../dbs/models/users'
// import Passport from './utils/passport'
// import Email from '../dbs/config'
// import axios from './utils/axios'


const Router = require('koa-router')
const Redis = require('koa-redis')
const nodeMailer = require('nodemailer')
const User = require('../dbs/models/users')
const Passport = require('./utils/passport')
const Email = require('../dbs/config')
const axios = require('./utils/axios')




const router = new Router({prefix:'/user'});
let store = new Redis().client;



router.post('/register',async ctx=>{
  const {username,code,password,email} = ctx.request.body;
  let emailRes = await User.find({email});
  let userRes = await User.find({username});
  let codeRes = await store.get(email);


  if (codeRes === code.toUpperCase()) {
    if (emailRes.length>0||userRes.length>0) {
      ctx.status = 406;
      ctx.body = {
        code: 1,
        message: '注册失败，用户名或者邮箱存在！'
      };
      return false;
    } else {
      let registerRes = await User.create({username,password,email});
      if (registerRes) {
        ctx.status = 200;
        ctx.body = {
          code: 0,
          message: '注册成功'
        };
      } else {
        ctx.status = 503;
        ctx.body = {
          code: 1,
          message: '注册失败，服务器错误！'
        };
      }
    }
  } else {
    ctx.status = 406;
    ctx.body = {
      code: 1,
      message: '验证码错误'
    };
    return false;
  }



});

router.post('/code',async (ctx,next)=>{
  let email = ctx.request.body.email;
  let code = '';

  if (await store.exists(email)) {
    if (await store.ttl(email)>850) {
      ctx.body = {
        code: 1,
        message: '操作过于频繁，请稍后再试！'
      };
      return false;
    } else {
      await store.expire(email,900);
      code = await store.get(email)
    }
  } else {
    code = Email.code();
    let res = await store.set(email,code);
    await store.expire(email,900);
  }

  let transporter = nodeMailer.createTransport({
    host: Email.smtp.host,
    secureConnection: true, // use SSL
    port: 465,
    secure: true,
    auth: {
      user: Email.smtp.user,
      pass: Email.smtp.pass
    }
  });

  let mailOptions = {
    from: `"认证邮件"<${Email.smtp.user}>`,
    to: email,
    subject: 'MT网认证邮件',
    html: `您在MT网中注册，您的验证码为 ${code} ,验证码15分钟内有效，请勿泄露与他人。`
  };
  await transporter.sendMail(mailOptions,(error,info)=>{
    if (error) {
      return console.log(error);
    }
  });
  ctx.body = {
    code: 0,
    message: '验证码发送成功，15分钟内有效'
  }
});


router.post('/verify/code',async ctx => {
  let code = ctx.request.body.code.toUpperCase().trim();
  let codeRes = await store.get(ctx.request.body.email);

  if (codeRes === code) {
    ctx.body = {
      code: 0,
      message: ''
    }
  } else {
    ctx.body = {
      code: 1,
      message: '验证码错误，请重新输入'
    }
  }
});


router.get('/verify',async (ctx,next)=>{
  let type = Object.keys(ctx.request.query)[0];
  let str = ctx.request.query[type];
  
  switch (type) {
    case 'username':
      let username = await User.find({username: str});
      if ( username.length > 0 ) {
        ctx.body = {
          code: 1,
          message: '用户名已存在'
        }
      } else {
        ctx.body = {
          code: 0,
          message: ''
        }
      }
      break;
    case 'email':
      let email = await User.find({email: str});
      if ( email.length > 0 ) {
        ctx.body = {
          code: 1,
          message: '邮箱已被注册'
        }
      } else {
        ctx.body = {
          code: 0,
          message: ''
        }
      }
      break;
  }
});






// export default router;
module.exports = router