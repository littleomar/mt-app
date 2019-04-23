
const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('koa-bodyparser')
// import Redis from 'koa-redis'
// import session from 'koa-generic-session'
const mongoose = require('mongoose')

const dbConfig = require('./dbs/config')
const users = require('./interface/users')
// import passport from './interface/utils/passport'


const app = new Koa()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 6000


app.keys = ['mt','keyskeys'];
app.use(bodyParser())


mongoose.connect(dbConfig.dbs,{
  useNewUrlParser:true
})

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }



  app.use(users.routes()).use(users.allowedMethods())

  app.use(ctx => {
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.listen(6000, "127.0.0.1")
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
